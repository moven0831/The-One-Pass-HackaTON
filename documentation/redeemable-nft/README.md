# Redeemable NFT


## Related libraries
- [`redeemable-nft-collection.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-collection.fc)
- [`redeemable-nft-item.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-item.fc)
- [`redeemable-nft-single.fc`](https://github.com/moven0831/The-One-Pass-HackaTON/blob/main/contracts/sources/redeemable-nft-single.fc)

## Introduction
The redeemable NFT feature in the Open Pass minting tool allows issuers to predefine utility NFT redemption rules, similar to setting royalties. NFT holders can redeem their NFTs by signing a message authorizing the redemption based on the specified rules. This process can be carried out off-chain, with issuers encouraged to build their own databases to prevent double-spending attacks. This design aims to enhance user experience when using NFTs as vouchers.


## Function Specs
In the storage section, the redeemable features keep track of the following variables in smart contract:

- `storage::owner_address`: The current owner of the token.
- `storage::owner_public_key`: The public key of the owner. To verify that the owner signature is valid in the redeem process without requiring the sender must be authority.
- `storage::remained_redeemable_index`: A unsigned integer to keep track of remained amount of valid redemption.

The smart contract includes several utility libraries and defines a set of functions to interact with the storage, send messages, transfer ownership, and redeem feature of the token.

- `redeem()`: Redeem the token with predefined utility. Allows users to redeem an NFT when there are still redeemable NFTs available. The process involves verifying the owner's public key to ensure authenticity.

There are also some get methods defined in the smart contract for off-chain access to token data:

- `get_nft_content()`: Get the content associated with the token. This method retrieves the content of a specific NFT by its index. It takes two arguments - an integer index and a cell individual_nft_content.
- `redeemable_index`: This method returns the redeemable index for an NFT.