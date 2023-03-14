import Moralis from "moralis";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const uploadImage = async (imageName: string, imagePath: string) => {
    const abi = [
        {
            path: imageName,
            content: fs.readFileSync(imagePath, { encoding: "base64" }),
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

    // console.log(response.toJSON());
    return response.toJSON()[0].path;
};

export default async function uploadMetadata(
    collectionName: string,
    NFTName: string,
    NFTDescription: string,
    NFTTraits: object,
    imageName: string,
    imagePath: string
) {
    await Moralis.start({
        apiKey: process.env.MORALIS_WEB3_API_KEY,
    });

    const imageURL = uploadImage(imageName, imagePath);
    console.log(`imageURL: ${imageURL}`);
    const metadata = {
        name: NFTName,
        description: NFTDescription,
        image: imageURL,
        attributes: NFTTraits,
    };

    const abi = [
        {
            path: `${collectionName}.json`,
            content: btoa(JSON.stringify(metadata)),
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

    console.log(response.toJSON());
    return response.toJSON()[0].path;
}

// const testTrait = [{trait_type:"Background",value:"Brown"},{trait_type:"Skin",value:"White"},{trait_type:"Hat",value:"Hat"},{trait_type:"Eye",value:"Blue glasses"},{trait_type:"Diamonds",value:"Green Diamond"}]

// uploadMetadata(
//   "Test_Collection",
//   "Test_NFT",
//   "NFTDescription",
//   testTrait,
//   "cute_cat.png",
//   "./imageDir/demo.png"
// );
