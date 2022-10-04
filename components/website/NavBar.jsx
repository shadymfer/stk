import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';

import { FaDiscord, FaFacebook, FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import Arc from '../../public/assets/logo.png'
import { BsGlobe2 } from 'react-icons/bs';
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

 

  return ( <>
    <div className={
      shadow
        ? 'fixed w-full h-20 bg-black/40 z-[100] ease-in-out duration-300 flex items-center justify-center gap-20 text-lg '
        : 'fixed w-full h-20 z-[100] '
    }>
       
      <div className='flex items-center justify-center gap-20 text-lg my-5'>
        <div className='mr-48 md:mr-96 hover:scale-110 hover:ease-in-out hover:duration-300'>
                <Link href="/" >
                  <Image className='cursor-pointer' src={Arc} width={70} height={70} alt=''/>
                </Link>
              </div>
              
              <div className='text-white hidden md:contents hover:font-bold hover:ease-in-out hover:duration-300 hover:underline '>
                <Link className=" cursor-pointer " href="/toolkit"> Shadies Toolkit</Link> 
              </div>
              
              <a className='hidden md:contents  hover:font-bold hover:ease-in-out hover:duration-300 hover:underline  text-white ' href="https://magiceden.io/marketplace/tshc" target="_blank" rel="noreferrer">MagicEden✨</a>
              
              <div className='text-white hidden md:contents hover:font-bold hover:ease-in-out hover:duration-300 hover:underline '>
                <Link className=" cursor-pointer " href="/#team"> The Team</Link> 
              </div>

              <div onClick={handleNav} className='md:hidden text-white cursor-pointer'>
                        <AiOutlineMenu size={25} />
        </div>   
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#09111a] text-zinc-300 p-10 ease-in duration-300' 
                : 'fixed left-[-120%] top-0 ease-in duration-300 '}>
                <div>
                    <div className='flex w-full items-center justify-between cursor-pointer '>
                    
                    <Image onClick={()=> setNav(false)} className='cursor-pointer ' src={Arc} alt='/' width='50' height='50'/>
                    
                    
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose  onClick={()=> setNav(false)}/>
                            
                        </div>
                    </div>
                    <h1 className='mt-4'>The Shady Class NFT</h1>
                    <div className='border-b border-gray-300'>
                        
                        <p className='w-[85%] md:w-[90%]'>Web3 Chibis in the Solana network</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase px-2'>
                        <li  onClick={()=> setNav(false)} className='px-2 py-4 text-sm hover:bg-[#0f1e36]  hover:font-bold hover:ease-in-out hover:duration-300 hover:underline hover:rounded-lg '><Link className=" py-2 px-4 block whitespace-no-wrap" href="/toolkit">Shadies Toolkit ⚡</Link></li>
                        <li onClick={()=> setNav(false)} className='px-2 py-4 text-sm hover:bg-[#0f1e36]  hover:font-bold hover:ease-in-out hover:duration-300 hover:underline hover:rounded-lg '><a className=' text-white ' href="https://magiceden.io/marketplace/tshc" target="_blank" rel="noreferrer">MagicEden✨</a></li>
                        <li  onClick={()=> setNav(false)}className='px-2 py-4 text-sm hover:bg-[#0f1e36] hover:font-bold hover:ease-in-out hover:duration-300 hover:underline hover:rounded-lg '><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/#team">The Team</Link></li>
                        
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-wide text-white'>In the Shadows We Build </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <a href="https://twitter.com/shadies_NFT"><FaTwitter /></a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <a href="https://www.discord.gg/qMUrjqAjUJ"><FaDiscord /> </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <a href="https://utility.theshadyclass.xyz/">< BsGlobe2/></a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
     
        
     
            
          
    </div>
      
    
                
     


      </>
 )
}

export default NavBar2