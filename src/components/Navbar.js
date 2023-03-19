// react
import React, {useState} from "react";
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'

// navigation
import { Link, useNavigate } from "react-router-dom";

// data
import { navbarData } from "../utils/utils";

// framer
import { motion } from "framer-motion"

// connect button
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {

    // Collapsed menu hook:
    const [show, setshow] = useState(false);

    // Navigation hook: 
    const navigate = useNavigate(); 

    // Theme switch hook: 
    const [isOn, setIsOn] = useState(() => {
        if(localStorage.getItem('theme') === 'light'){
            return true;
        } else {
            return false;
        }
    });

    // Theme switch:
    const toggleTheme = () => setIsOn(!isOn);

    // Transition animations: 
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    };

    // Sets the theme:
    if (isOn) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
  
    if (
        localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) { document.documentElement.classList.add('dark') } 
    else {
        document.documentElement.classList.remove('dark')
    }
  
    return (
        <div className="">
          <div className="bg-gray-50 shadow-xl w-full sticky dark:border-green-500">
            <nav className="p-3">
                {/* For large and Medium-sized Screens */}
                <div className="flex justify-between">
                    <div className="flex space-x-3 items-center">
                        <img onClick={() => navigate("/")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZ7cCp08TLsmI_-NgTq3m6DVwuJtMdjooFMmMx87enIkBgqpM82b6tPID3JUI6MTpmfg&usqp=CAU" className="h-12 border-black border-2 shadow-lg hover:cursor-pointer" alt="Filecoin Green Logo"></img>
                        <h1 className="font-bold text-lg leading-6 text-black">{navbarData.title}</h1>
                    </div>
                    <div className="hidden sm:flex flex flex-row space-x-4 items-center">
                        {/* Btn: Home */}
                        <button onClick={() => navigate("/")} className="flex p-2 shadow-lg font-semibold text-xs text-black bg-gray-100 border border-white focus:outline-none focus:bg-black focus:text-white duration-150 justify-center items-center">
                            {navbarData.home_btn_txt}
                        </button>

                        {/* Btn: Dashboard */}
                        <button onClick={() => navigate("/dashboard")} className="flex p-2 shadow-lg font-semibold text-xs text-black  bg-gray-100 border border-white focus:outline-none focus:bg-black focus:text-white duration-150 justify-center items-center">
                            {navbarData.dashboard_btn_txt}
                        </button>

                        {/* Btn: Marketplace */}
                        <button onClick={() => navigate("/marketplace")} className="flex p-2 shadow-lg font-semibold text-xs text-black  bg-gray-100 border border-white focus:outline-none focus:bg-black focus:text-white duration-150 justify-center items-center">
                                {navbarData.marketplace_btn_txt}
                        </button>

                        {/* Btn: Connect Wallet */}
                        <ConnectButton className="flex justify-center items-center text-xs"/>

                    </div>
                    <div className="flex flex-row justify-center items-center sm:hidden space-x-3">
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={() => setshow(!show)} className={`flex flex-row focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 justify-center items-center sm:hidden cursor-pointer`}>
                            <div className="bg-white p-1 border border-white shadow-lg items-center">
                                <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-col gap-4 mt-10 w-80 mx-auto ">
                        {/* Home */}
                        <button onClick={() => navigate("/")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none duration-150 justify-center items-center">
                            {navbarData.home_btn_txt}
                        </button>

                        {/* Dashboard */}
                        <button onClick={() => navigate("/dashboard")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none duration-150 justify-center items-center">
                            {navbarData.dashboard_btn_txt}
                        </button>

                        {/* Marketplace */}
                        <button onClick={() => navigate("/marketplace")} className="flex space-x-2 w-full h-10 font-semibold text-sm leading-3 text-white bg-black border border-white focus:outline-none duration-150 justify-center items-center">
                                {navbarData.marketplace_btn_txt}
                        </button>

                        {/* Btn: Connect Wallet */}
                        {/* <ConnectButton className="flex justify-center items-center text-xs"/> */}
                    </div>
                </div>
            </nav>
        </div>
      </div>
    );
}

export default Navbar