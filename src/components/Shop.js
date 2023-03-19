import React from 'react'
import Web3 from 'web3'
import erc20Abi from '../contracts/ERC20.abi.json'
import pixelShopAbi from '../contracts/pixelShop.abi.json'




const Shop = () => {
  return (
    <div>
      <p>SHOP COMPONENT</p>
    </div>
  )
}

let web3;
let ETH_MAINNET = 1;
let GOERLI = 5;
let defaultAccount;
let kit
const ShopContractAddress = "0xe9d50eb4825A6D7B917a4346100E733c63A1Bc51"
let contract
let erc20Contract
let properties = []
let celoTestnetChainId=44787
let celoExplorer = "https://alfajores-blockscout.celo-testnet.org/"
let bgColor = "#edc0e0"




window.addEventListener('load', async () => {
    console.log("⌛ Loading Shop...")
    await connectMetamaskWallet();
    // loadContract();

    // await getBalance()
    console.log("getProperties")
    await getProperties()
    // notificationOff()
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

            contract = new web3.eth.Contract(pixelShopAbi, ShopContractAddress)
            console.log(contract)


        } catch (error) {
            console.log(`⚠️ ${error}.`)
          }
        
      }else {
        console.log("⚠️ Please install the Metamask.")
      }
  }

//  async function loadContract(){
//     contract = new web3.eth.Contract(pixelShopAbi, ShopContractAddress)
//     console.log(contract)
//   }


const getProperties =  async function() {
    const _propertiesLength = await contract.methods.getPropertiesLength().call()
    const _properties = []
    for (let i = 0; i < _propertiesLength; i++) {
        let _property = new Promise(async (resolve, reject) => {
          let p = await contract.methods.readProperty(i).call()
          console.log(p)
          let name = p[1][0]
          let image = p[1][1]
          let description = p[1][2]
          let price = p[2][0]
          let sold = p[2][1]
          let numShares = p[2][2]
          let currencyAddress = p[2][3]
          resolve({
            index: i,
            owner: p[0],
            name: name,
            image: image,
            description: description,
            price: price,
            sold: sold,
            numShares: numShares,
            currencyAddress: currencyAddress,
            status: p[3],
            houseTokenAddress: p[4],
          })
          })
          _properties.push(_property)
      }
      properties = await Promise.all(_properties)
      renderProperties()
    }
    async function main(){
        await getProperties()
    }
    main()

function renderProperties() {
    document.getElementById("marketplace").innerHTML = ""
    properties.forEach((_property) => {
      const newDiv = document.createElement("div")
      newDiv.className = "col-md-4"
      newDiv.innerHTML = propertiesTemplate(_property)
      document.getElementById("marketplace").appendChild(newDiv)
    })
  }

  const getBalance = async function () {
    const cUSDBalance = await erc20Contract.methods.balanceOf(defaultAccount).call()
    document.querySelector("#balance").textContent = parseFloat(web3.utils.fromWei(cUSDBalance, 'ether')).toFixed(2)
  }


  function propertiesTemplate(_property) {
    let viewerIsOwner = _property.owner==defaultAccount
    
      return `
      <div class="card mb-4">
        <img class="card-img-top" src="${_property.image}" alt="...">
        <div class="position-absolute top-0 end-0 mt-1 px-2 py-1 rounded-start" style="background-color: ${bgColor};">
          ${_property.sold} Sold
        </div>
        <div class="position-absolute top-0 end-0 mt-5 px-2 py-1 rounded-start" style="background-color: ${bgColor};">
          ${_property.numShares} Shares
        </div>
        <div class="card-body text-left p-4 position-relative">
        <div class="translate-middle-y position-absolute top-0">
        ${_property.owner}
        </div>
        <h2 class="card-title fs-4 fw-bold mt-2">${_property.name}</h2>
        <p class="card-text mb-4" style="min-height: 82px">
          ${_property.description}             
        </p>
        <p class="card-text mb-4" style="min-height: 82px">
          ${_property.currencyAddress}             
        </p>
        <p class="card-text mt-4">
          <i class="bi bi-tag"></i>
          <span>$${web3.utils.fromWei(_property.price.toString(), 'ether')}</span>
        </p>
        
        <div class="d-grid gap-2">
          <!-- do not show buy button if property status is not 0 (which means on sale)-->
          <a class="btn btn-lg btn-outline-dark buyBtn fs-6 p-3" style="${_property.status!=0?'display:none':'display:block'}" id=${
            _property.index
          }>
            Buy for ${parseFloat(web3.utils.fromWei(_property.price.toString(), 'ether')/_property.numShares).toFixed(2)} cUSD per share
          </a>

          <!-- only show update price and cancel buttons if current viewer is the owner and there are no properties sold-->
          <a class="btn btn-lg btn-outline-dark updatePriceBtn fs-6 p-3" style="${_property.status!=0||viewerIsOwner!=true||_property.sold>0?'display:none':'display:block'}" id=${
            _property.index
          }
              data-bs-toggle="modal"
              data-bs-target="#updatePriceModal-${
                _property.index}">
            Update Property
          </a>
          
          <a class="btn btn-lg btn-outline-dark houseTokenBtn fs-6 p-3" href= "${celoExplorer}token/${_property.houseTokenAddress}/token-transfers" target="_blank" id=${
            _property.index} style="${_property.status!=0?'display:none':'display:block'}"
          >
            House Token
          </a>
        </div>
      </div>
    </div>
    
    
    <!--Modal-->
        <div
        class="modal fade"
        id="updatePriceModal-${
          _property.index}"
        tabindex="-1"
        aria-labelledby="updatePriceModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
            <h5 class="modal-title" id="updatePriceModalLabel">New Property</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body">
                <form>
                  <div class="form-row">
                    <div class="col">
                      <input
                        type="number"
                        id="updatePrice-${
                          _property.index}"
                        class="form-control mb-2"
                        placeholder="Enter updated property price"
                      />
                    </div>
                  </div>
                </form>
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-dismiss="modal"
                  id="updatePriceModalBtn-${
                    _property.index}"
                >
                  Update Property Price
                </button>
            
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light border"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <a class="btn btn-lg btn-outline-dark cancelSaleBtn fs-6 p-3" data-bs-dismiss="modal"  id=${
                  _property.index
                }>
                  Cancel Sale
                </a>
                
              </div>
            </div>
            
          </div>

          

          
        </div>
        <!--/Modal-->`
    
}

// function identiconTemplate(_address) {
//     const icon = blockies
//       .create({
//         seed: _address,
//         size: 8,
//         scale: 16,
//       })
//       .toDataURL()
  
//     return `
//     <div class="rounded-circle overflow-hidden d-inline-block border border-white border-2 shadow-sm m-0">
//       <a href="https://alfajores-blockscout.celo-testnet.org/address/${_address}/transactions"
//           target="_blank">
//           <img src="${icon}" width="48" alt="${_address}">
//       </a>
//     </div>
//     `
//   }

  function notification(_text) {
    document.querySelector(".alert").style.display = "block"
    document.querySelector("#notification").textContent = _text
  }
  
  function notificationOff() {
    document.querySelector(".alert").style.display = "none"
  }


export default Shop
