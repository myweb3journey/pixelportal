const { Alchemy, Network } = require("alchemy-sdk");
const env = require('dotenv').config()
const fs = require('fs')



API_KEY=process.env.ALCHEMY_API_KEY;

const config = {
    apiKey: API_KEY,
    network: Network.ETH_MAINNET,
};

const goerliConfig = {
    apiKey: API_KEY,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

const main = async () => {
    // Wallet address
    const address = "elanhalpern.eth";
    // await getNftsForOwner(address);
    const nftSmartContract = "0xd844582573b2eb23b4aae78185bd95f4ac442c09";
    await getTokenIDForErc721(address, nftSmartContract);
    
  };

  async function getNftsForOwner(address){
    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address);
  
    // Parse output
    const numNfts = nfts["totalCount"];
    const nftList = nfts["ownedNfts"];

    console.log(nftList);
  
    console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);
  
    let i = 1;
    for (let nft of nftList) {
      console.log(`${i}. ${nft.title} ${nft.tokenId} ${nft.contract.address}`);
      i++;
    }
    return nftList

  }

  /**
   * TODO get multiple token IDs
   */
  export async function getTokenIDForErc721(owner, erc721Address){ 
    //assumes one tokenid to for this hackathon
    erc721Address = erc721Address.toLowerCase();
    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(owner);
  
    // Parse output
    const nftList = nfts["ownedNfts"];

    for(let nft of nftList){
        if(nft.contract.address == erc721Address){
            tokenID = nft.tokenId;
            console.log(tokenID)
            return tokenID;
        }
    }
    //nft not found
    return -1;
  }

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();