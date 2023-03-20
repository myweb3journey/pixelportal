import React from 'react'
import Web3 from 'web3'
import IERC721ABI from '../contracts/IERC721.abi.json'
import IERC721PoolABI from '../contracts/IERC721Pool.abi.json'
import CreatorPoolABI from '../contracts/CreatorPool.abi.json'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

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
    let erc721Address = "0x0F134c6B15265583BC8cB9fAEBCA30D5127C648d"; //goerli
    let tokenID = 1;
    let erc721Pool = "0xBBdEA5748561eEe4330f744456b658e08f495Ccb"; //goerli
    let erc721Contract = new web3.eth.Contract(IERC721ABI, erc721Address);
    console.log(erc721Contract);
    console.log(`is it connected ${defaultAccount}`);
  
    
    console.log(`⌛ Approving "${erc721Pool}" for ${tokenID}`)
    try {
        const result = await erc721Contract.methods
          .approve(
            erc721Pool,
            tokenID)
          .send({ from: defaultAccount })
          console.log(result)
      } catch (error) {
        console.log(`⚠️ ${error}.`)
        console.log(error)
      }
      console.log(`🎉 You successfully added "${erc721Pool}".`)
    }
  
  async function createPool(){
    let erc721Address = document.getElementById(`createPool`).value
    console.log(erc721Address);
      console.log("create pool")
      
      console.log(erc721Address);
    
      console.log(`⌛ Creating Pool "${erc721Address}"`)

      let creatorPoolAddress = "0xcbb9ddd989abe357a9a19433bbe68fa011e538fb"; //goerli
      let creatorPoolContract = new web3.eth.Contract(creatorPoolAddress, CreatorPoolABI);
      console.log(creatorPoolContract);
      try {
          const result = await creatorPoolContract.methods
            .createPixelPool(
              erc721Address
              )
            .send({ from: defaultAccount })
            console.log(result)
        } catch (error) {
          console.log(`⚠️ ${error}.`)
        }
        console.log(`🎉 You successfully created a pool for "${erc721Address}".`)
      // })
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

async function withdrawBtn(){
  console.log("withdraw from pool")
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
  console.log(`⌛ Withdrawing "${params[0]}"`)
  try {
      const result = await erc721PoolContract.methods
        .withdraw(
          [tokenID]
          )
        .send({ from: defaultAccount })
        console.log(result)
    } catch (error) {
      console.log(`⚠️ ${error}.`)
    }
    console.log(`🎉 You successfully withdrawn "${params[0]}".`)
  // })
}


const CreatorPool = () => {
  const { address, isConnected } = useAccount()
  
 
  if (isConnected){
    defaultAccount = address
    console.log(`connected to ${defaultAccount}`)
  }

  return (
    <div>
      <h1>Creator Pool</h1>
      <form >
  <div class="flex items-center border-b border-teal-500 py-2">
    <input id='createPool' class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="0x" aria-label="ERC721 Address"/>
    <button 
    onClick={async () => {await createPool();} }
    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Create Pool
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Cancel
    </button>
  </div>
</form>


      
      <button
        type="button"
        id="approveCreatorPoolBtn"
        onClick={async () => {await approveBtn();} }
      >Approve Pool</button>
   <br/>
    <button
      type="button"
      id="depositToCreatorPoolBtn"
      onClick={async () => {await depositBtn();} }

    >Deposit Pool</button>
    <br/>
    <button
      type="button"
      id="withdrawFromCreatorPoolBtn"
      onClick={async () => {await withdrawBtn();} }

    >Withdraw from Pool</button>
    </div>
  )
}



export default CreatorPool
