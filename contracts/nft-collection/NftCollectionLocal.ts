import fs from "fs";
import path from 'path';
import {SmartContract} from "ton-contract-executor";
import {buildNftCollectionDataCell, CollectionMintItemInput, NftCollectionData, Queries, RoyaltyParams} from "./NftCollection.data";
import {Address, Cell, CellMessage, CommonMessageInfo, contractAddress, InternalMessage, Slice, toNano} from "ton";
import BN from "bn.js";
import {decodeOffChainContent} from "../utils/nft-content/nftContent";

export class NftCollectionLocal {
    private constructor(
        public readonly contract: SmartContract,
        public readonly address: Address
    ) {

    }

    //
    // Get methods
    //

    async getCollectionData(): Promise<{ nextItemId: number, ownerAddress: Address, collectionContent: string }> {
        let res = await this.contract.invokeGetMethod('get_collection_data', [])
        if (res.exit_code !== 0) {
            throw new Error(`Unable to invoke get_collection_data on contract`)
        }
        let [nextItemId, collectionContent, ownerAddress] = res.result as [BN, Cell, Slice]

        return {
            nextItemId: nextItemId.toNumber(),
            collectionContent: decodeOffChainContent(collectionContent),
            ownerAddress: ownerAddress.readAddress()!
        }
    }

    async getNftAddressByIndex(index: number): Promise<Address> {
        let res = await this.contract.invokeGetMethod('get_nft_address_by_index', [{
            type: 'int',
            value: index.toString(10)
        }])
        return (res.result[0] as Slice).readAddress()!
    }

    async getRoyaltyParams(): Promise<RoyaltyParams> {
        let res = await this.contract.invokeGetMethod('royalty_params', [])

        let [royaltyFactor, royaltyBase, royaltyAddress] = res.result as [BN, BN, Slice]

        return {
            royaltyFactor: royaltyFactor.toNumber(),
            royaltyBase: royaltyBase.toNumber(),
            royaltyAddress: royaltyAddress.readAddress()!
        }
    }

    async getNftContent(index: number, nftIndividualContent: Cell): Promise<string> {
        let res = await this.contract.invokeGetMethod('get_nft_content', [
            { type: 'int', value: index.toString() },
            { type: 'cell', value: nftIndividualContent.toBoc({ idx: false }).toString('base64')}
        ])

        if (res.type !== 'success') {
            throw new Error('Unable to invoke get_nft_content on collection')
        }

        let [contentCell] = res.result as [Cell]

        return decodeOffChainContent(contentCell)
    }

    //
    // Internal messages
    //

    async sendDeployNewNft(from: Address, value: BN, params: { queryId?: number, passAmount: BN, itemIndex: number, itemOwnerAddress: Address, itemContent: string }) {
        let msgBody = Queries.mint(params)

        return await this.contract.sendInternalMessage(new InternalMessage({
            to: this.address,
            from: from,
            value: new BN(value),
            bounce: false,
            body: new CommonMessageInfo({
                body: new CellMessage(msgBody)
            })
        }))
    }

    async sendBatchDeployNft(from: Address, value: BN,params: { queryId?: number, items: CollectionMintItemInput[] }) {
        let msgBody = Queries.batchMint(params)

        return await this.contract.sendInternalMessage(new InternalMessage({
            to: this.address,
            from: from,
            value: new BN(value),
            bounce: false,
            body: new CommonMessageInfo({
                body: new CellMessage(msgBody)
            })
        }))
    }

    async sendChangeOwner(from: Address, newOwner: Address) {
        let msgBody = Queries.changeOwner({newOwner})

        return await this.contract.sendInternalMessage(new InternalMessage({
            to: this.address,
            from: from,
            value: toNano(1),
            bounce: false,
            body: new CommonMessageInfo({
                body: new CellMessage(msgBody)
            })
        }))
    }

    async sendGetRoyaltyParams(from: Address) {
        let msgBody = Queries.getRoyaltyParams({})

        return await this.contract.sendInternalMessage(new InternalMessage({
            to: this.address,
            from: from,
            value: toNano(1),
            bounce: false,
            body: new CommonMessageInfo({
                body: new CellMessage(msgBody)
            })
        }))
    }

    async sendEditContent(from: Address, params: { queryId?: number,  collectionContent: string, commonContent: string,  royaltyParams: RoyaltyParams  }) {
        let msgBody = Queries.editContent(params)
        return await this.contract.sendInternalMessage(new InternalMessage({
            to: this.address,
            from: from,
            value: toNano(1),
            bounce: false,
            body: new CommonMessageInfo({
                body: new CellMessage(msgBody)
            })
        }))
    }

    static async createFromConfig(config: NftCollectionData) {
        let cell = Cell.fromBoc(fs.readFileSync(path.resolve(__dirname, "../build/upgradable-nft-collection.cell")))[0]

        let data = buildNftCollectionDataCell(config)
        let contract = await SmartContract.fromCell(cell, data)

        let address = contractAddress({
            workchain: 0,
            initialData: contract.dataCell,
            initialCode: contract.codeCell
        })

        contract.setC7Config({
            myself: address
        })

        return new NftCollectionLocal(contract, address)
    }

    static async create(config: { code: Cell, data: Cell, address: Address }) {
        let contract = await SmartContract.fromCell(config.code, config.data)
        contract.setC7Config({
            myself: config.address
        })
        return new NftCollectionLocal(contract, config.address)
    }
    static async createFromContract(contract: SmartContract, address: Address) {
        contract.setC7Config({
            myself: address
        })
        return new NftCollectionLocal(contract, address)
    }
}