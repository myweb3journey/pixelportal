import React from 'react'
import Web3 from 'web3'
import IERC721ABI from '../contracts/IERC721.abi.json'
import IERC721PoolABI from '../contracts/IERC721Pool.abi.json'

// const React = require("react");
// const Web3 = require('web3');


let web3;
let ETH_MAINNET = 1;
let GOERLI = 5;
let defaultAccount;


window.addEventListener('load', async () => {
  console.log("⌛ Loading...")
  await connectMetamaskWallet();
});

const connectMetamaskWallet = async function () {
    if (window.ethereum) {
        // notification("⚠️ Please approve this DApp to use it.")
        try{
            // const chainId = await ethereum.request({ method: 'eth_chainId' });
            // if(parseInt(chainId,1)!=ETH_MAINNET){
            //     throw "⚠️ Please switch to the Ethereum Mainnet to use this app."
            // }
            
            web3 = new Web3(window.ethereum);

            await window.ethereum.enable();
            // notificationOff()

            const accounts = await web3.eth.getAccounts()
            defaultAccount = accounts[0];    
            console.log(defaultAccount);

        } catch (error) {
            console.log(`⚠️ ${error}.`)
          }
        
      }else {
        console.log("⚠️ Please install the Metamask.")
      }
  }



  // /* Deposit Pool button */


  async function approveBtn(){
    console.log("approve pool Btn")
    // get NFT address
    // get token ID for NFT
    // get ERC721Pool Address
    let erc721Address = "0x0F134c6B15265583BC8cB9fAEBCA30D5127C648d";
    let tokenID = 1;
    let erc721Pool = "0xBBdEA5748561eEe4330f744456b658e08f495Ccb";
    let erc721Contract = new web3.eth.Contract(IERC721ABI, erc721Address);
    console.log(erc721Contract);
  
    const params = [
      erc721Pool,
      tokenID
    ];
    console.log(`⌛ Approving "${params[0]}" for ${params[1]}`)
    try {
        const result = await erc721Contract.methods
          .approve(
            erc721Pool,
            tokenID)
          .send({ from: defaultAccount })
          console.log(result)
      } catch (error) {
        console.log(`⚠️ ${error}.`)
      }
      console.log(`🎉 You successfully added "${params[0]}".`)
    }
  


async function depositBtn(){
  console.log("deposit pool")
  // get NFT address
  // get token ID for NFT
  // get ERC721Pool Address
  let tokenID = 1;
  let erc721Pool = "0xBBdEA5748561eEe4330f744456b658e08f495Ccb";
  let erc721PoolContract = new web3.eth.Contract(IERC721PoolABI, erc721Pool);
  console.log(erc721PoolContract);

  const params = [
    tokenID
  ];
  console.log(`⌛ Depositng "${params[0]}"`)
  try {
      const result = await erc721PoolContract.methods
        .deposit(
          [tokenID]
          )
        .send({ from: defaultAccount })
        console.log(result)
    } catch (error) {
      console.log(`⚠️ ${error}.`)
    }
    console.log(`🎉 You successfully added "${params[0]}".`)
  // })
}


const CreatorPool = () => {
  return (
    <div>
      <p>Creator Pool</p>
      <button
        type="button"
        id="approveCreatorPoolBtn"
        onClick={async () => {await approveBtn();} }
      >Approve Pool</button>
   
    <button
      type="button"
      id="depositToCreatorPoolBtn"
      onClick={async () => {await depositBtn();} }

    >Deposit Pool</button>
    </div>
  )
}



export default CreatorPool
