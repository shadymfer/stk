import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';

import { FaDiscord, FaFacebook, FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import Arc from '../../public/assets/logo.png'
const NavBar2 = () => {

  const [nav, setNav] = useState(false)
  const [shadow,setShadow] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
  }

  useEffect( ()=>{
    const handleShadow = () =>{
        if(window.scrollY >= 90){
            setShadow(true)
        }
        else{
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow)
  },[])

 

  return (
    <div className={
      shadow
        ? 'fixed w-full h-20 bg-black/30 z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100]'
    }>
       
      <div className='flex flex-row items-center justify-center w-full h-full  2xl:px-40   '> 
      <div className='mr-[100px] ml-4 md:mr-[800px]'> 
        <Image  src={Arc} width={70} height={70} alt=''/></div>
        <a className='hidden md:flex uppercase hover:border-b font-bold text-white mr-5' href="/" target="_blank" rel='noreferrer'>Home</a>
        <div className="group inline-block relative">
              <ul className='hidden md:flex font-bold text-white justify-center items-center  '>
                  <div className="p-4">
                    <div className=" relative">
                        <button className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">Shadies Toolkit</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </button>
                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <li className="">
                                <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">TRADING SUITE 🤖 (COMING SOON)</a>
                            </li>
                            <li className="">
                                <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">VAULT 🔐 (COMING SOON)</a>
                            </li>
                            <li className="">
                                <Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/toolkit">BULK TRANSFER ⚡</Link>
                            </li>
                            <li className="">
                                <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://staking.theshadyclass.xyz/">STAKING 💰</a>
                            </li>
                            <li className="">
                                <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://collector.theshadyclass.xyz/">COLLECTOR 🔱</a>
                            </li>
                            
                        </ul>
                    </div>
                  </div>
                
              </ul>
              <div onClick={handleNav} className='md:hidden text-white items-center'>
                  <AiOutlineMenu size={25} />
              </div>
          </div>
          <a className='hidden md:flex ml-1 uppercase hover:border-b font-bold text-white ' href="https://magiceden.io/marketplace/tshc" target="_blank" rel="noreferrer">MagicEden✨</a>
                  
                  <WalletMultiButton className='m-5'/>
                  
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen bg-[#ecf0f3] text-[#333333] p-10 eas-in duration-500' 
                : 'fixed left-[-100%] top-0 eas-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Link href=''> 
                    <Image onClick={()=> setNav(false)} className='cursor-pointer' src={Arc} alt='/' width='50' height='50'/>
                    
                     </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                            
                        </div>
                    </div>
                    <h1>The Shady Class NFT</h1>
                    <div className='border-b border-gray-300'>
                        
                        <p className='w-[85%] md:w-[90%]'>Web3 Chibis in the Solana network</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase '>
                        <li  onClick={()=> setNav(false)} className='py-4 text-sm '><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">TRADING SUITE 🤖 (COMING SOON)</a></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">VAULT 🔐 (COMING SOON)</a></li>
                        <li  onClick={()=> setNav(false)}className='py-4 text-sm'><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/toolkit">BULK TRANSFER ⚡</Link></li>
                        <li  onClick={()=> setNav(false)}className='py-4 text-sm'><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://staking.theshadyclass.xyz/">STAKING 💰</a></li>
                        <li onClick={()=> setNav(false)}className='py-4 text-sm' ><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="https://collector.theshadyclass.xyz/">COLLECTOR 🔱</a> </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar2