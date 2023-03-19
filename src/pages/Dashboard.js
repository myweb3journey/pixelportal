import React from 'react'
import hero_img from "../assets/hero_img.png"

const Dashboard = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div className="justify-center items-center">

        <p className="font-semibold mb-5 text-4xl text-white">Create Collection</p>
        <p className="text-wrap ml-20 mr-20 text-base text-gray-500">Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times,<br></br>“Port Over”  to  add an existing collection or “Membership”, if you want to create subscriptions for your community.</p>

      </div>

      <div className='ml-40 mr-40 flex mt-10 gap-10 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>  
          <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Create Pool</div> 
                  </div>
              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Start Creator Pool</button>
              </div>
          </div>

                     
        <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Create Collection</div> 
                  </div>
              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Create Collection</button>
              </div>
          </div>

                     
        <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Create NFT</div> 
                  </div>
              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Create NFT</button>
              </div>
          </div>

                     
        <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Existing Collections</div> 
                  </div>

              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Port Over</button>
              </div>
          </div>


                     
        <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Digital Products</div> 
                  </div>
              
              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">List Items</button>
              </div>
          </div>

                     
        <div className="border border-black bg-gray-50 shadow-xl dark:border-green-400 dark:border dark:bg-black">
              <img className="w-full h-40 bg-black" src={hero_img} alt="Option 1"></img>
              <div className="px-6 py-4">
                  <div className='flex inline-block'>
                      <div className="font-bold text-xl mb-2 dark:text-green-300">Lending Pool</div> 
                  </div>
            
              </div>
              <div className="px-6 pt-2 pb-2 flex text-center">
                  <button onClick={() => {}} className="flex justify-center align-items-center bg-black px-4 py-2 text-sm font-semibold text-white mb-2 shadow-lg">Create Lending Pool</button>
              </div>
          </div>
        </div>

    {/* End */}
    </div>
  );
}

export default Dashboard
