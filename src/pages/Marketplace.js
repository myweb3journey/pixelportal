import React from 'react'
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import nft_image_collection from "../assets/nft_image_collection.jpg"

const Marketplace = () => {


  return (
    <div className='bg-black h-screen p-5'>

      {/* Header */}
      <div className='text-center'>
        <p className="text-center font-semibold mb-5 text-4xl text-white">Create NFT</p>
        <p className="text-center font-semibold mb-5 text-2xl text-gray-500">purchase with fiat or crypto!</p>
      </div>


      {/* Buy With Credit Card Module */}
      <div className='flex items-center justify-center'>
        <img src={nft_image_collection} className="w-80 h-80">
        </img>
    </div>

    <div className="mt-10 flex items-center justify-center">
      <CrossmintPayButton
            clientId="600625ce-a37a-44e9-8d09-76f3b59986cc"
            environment="staging"
            theme="light"
            mintConfig={{
              type: "erc-721",
              totalPrice: "0.001",
              _quantity: "1"
            
            }}
            mintTo='0x00e72CBCDF365395f23CeD4404C96A58d27cEd0f'
        />
     </div>
    </div>
  )
}

export default Marketplace
