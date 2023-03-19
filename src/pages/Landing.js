import React, {useState} from 'react'
import hero_img from "../assets/hero_img.png"

const Landing = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full h-full bg-black">
        
        {/* Hero */}
        <div className="">
        <div className="container mx-auto md:flex items-center gap-8">
                    <div className="p-10 text-white w-full">
                        <h1 className="text-left text-3xl font-extrabold f-f-l">Supercharge your work,<br></br>Grow As A Creator &<br></br>Connect through community!</h1>
                        <div className="text-left text-gray-400 f-f-r text-base lg:text-base sm:pb-0 pt-10 xl:pt-6">
                            <h2>Pixel Port helps creators earn more revenue. Startups can raise millions of dollars in a few weeks while creators often struggle for years to make ends meet.</h2>
                        </div>
                        <div className="pt-5 lg:flex gap-x-5">
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r bg-green-400 text-black font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start Exploring</button>
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-gray-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <img className="w-full mt-8 md:mt-0 object-fill md:w-1/2 md:-ml-4 lg:-ml-4 xl:ml-0" src={hero_img} alt="sample page" role="img" />
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start Exploring</button>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Learn More</button>
                </div>
          </div>

        {/* Description Card: */}
        <div className="bg-black p-10 ml-10 mr-10">
          <section className="bg-gray-800 container py-10 p-10 border border-green-400 rounded-lg">
            <div className="flex justify-center items-center flex-col">
              <div className="lg:text-4xl md:text-3xl text-3xl font-white font-bold leading-10 text-center text-white ">
                <h1>Create & Sell Digital Collectibles</h1>
              </div>
              <div className="pt-10 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
                <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg className width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#C7D2FE" />
                      <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#818CF8" />
                      <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#6366F1" />
                    </svg>
                  </div>
                  <div className="text-white text-2xl font-semibold text-center">
                    <h2>Easy Onboarding</h2>
                  </div>
                  <div className="text-gray-500 mt-2 text-lg text-center ">
                    <p>You can connect your wallet or have the option to pay with Fiat in debit/credit!</p>
                  </div>
                </div>
                <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33325 1.33337H30.6666L26.6666 9.33337H1.33325L5.33325 1.33337Z" fill="#818CF8" />
                      <path d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z" fill="#6366F1" />
                      <path d="M5.33325 22.6667H30.6666L26.6666 30.6667H1.33325L5.33325 22.6667Z" fill="#C7D2FE" />
                    </svg>
                  </div>
                  <div className="text-white text-2xl font-semibold text-center">
                    <h2>Create Collections</h2>
                  </div>
                  <div className="text-gray-500 mt-2 text-lg text-center">
                    <p>You can upload different types of work. Set up your profile to get started!</p>
                  </div>
                </div>
                <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                  <div className="mb-6">
                    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3334 1.33337H2.66671C2.31309 1.33337 1.97395 1.47385 1.7239 1.7239C1.47385 1.97395 1.33337 2.31309 1.33337 2.66671V8.00004H30.6667Z" fill="#6366F1" />
                      <path d="M1.33337 10.6667V29.3334C1.33337 29.687 1.47385 30.0262 1.7239 30.2762C1.97395 30.5263 2.31309 30.6667 2.66671 30.6667H9.33337V10.6667H1.33337Z" fill="#C7D2FE" />
                      <path d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z" fill="#818CF8" />
                    </svg>
                  </div>
                  <div className="text-white text-2xl font-semibold text-center">
                    <h2>Monetize</h2>
                  </div>
                  <div className="text-gray-500 mt-2 text-lg text-center">
                    <p>You can start a creator pool, rent to own NFTs & generate membership subscriptions!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer: */}
        <div className="pt-16">
            <div className="w-full border-white border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto text-white">
                <div className="container mx-auto py-12">
                    <div className="xl:flex lg:flex md:flex pt-6">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                                <svg className="w-12 h-12" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path
                                            fill="#4c51bf"
                                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                        />
                                    </g>
                                </svg>
                                <p className="ml-3 font-bold text-xl">Pixel Port</p>
                            </div>
                        </div>
                        <div className="text-left w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-white font-semibold text-lg mb-6">Pixel Port</li>
                                <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                    <a href="">Pooled NFT</a>
                                </li>
                                <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                    <a href="">Create A Collection</a>
                                </li>
                                <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                    <a href="">Marketplace</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-left w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                          <ul>
                                  <li className="text-white font-semibold text-lg mb-6">Tools We Used</li>
                                  <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                      <a href=")">HiFi</a>
                                  </li>
                                  <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                      <a href="">Crossmint</a>
                                  </li>
                                  <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                      <a href="">Lens</a>
                                  </li>
                              </ul>
                        </div>
                        <div className="text-left w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-white font-semibold text-lg mb-6">Resources</li>
                                <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                    <a href=")">Demo</a>
                                </li>
                                <li className="text-base text-gray-500 hover:text-gray-700 mb-5">
                                    <a href="">Design</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
