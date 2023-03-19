import React from 'react'
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const Marketplace = () => {


  return (
    <div className='p-5'>

      {/* Header */}
      <div className='text-left'>
        <p>
          Marketplace
        </p>
      </div>

      {/* Buy With Credit Card Module */}
      <div className='text-left'>
        <p>
          Supercharged Module
        </p>
        
      </div>

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
  )
}

export default Marketplace
