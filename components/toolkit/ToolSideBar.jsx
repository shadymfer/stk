import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { RiHandCoinLine } from 'react-icons/ri'
import { BsSafe2 } from 'react-icons/bs'
import { GiTargetShot } from 'react-icons/gi'


import transferImg from '../../public/assets/favicon.ico'
import Link from 'next/link';

const ToolSideBar = ({name, image, active, menu}) => {


  const [isActive, setIsActive] = useState(false)
  const [menuItem, setMenuItem] = useState("")

  useEffect( ()=>{
    console.log('useeffect',active)
    console.log('useeffect', menuItem)
    setIsActive(active)
    setMenuItem(menu)
  },[])

  return ( 
    
<>
{console.log(isActive, menuItem)}
    <aside>
    <div className='max-w-[280px] h-screen bg-[#09101B] flex flex-col  text-center text-white '>
     
     
      <div id="header" className=' flex flex-col mt-10  ' >
        <div className="flex flex-row gap-4 w-14 h-14 items-center">
            <img className='ml-[100%] rounded-full border border-gray-100' src={image}  height={200} width={200} alt='IMG2'/>
            
            <div>
              <p>{name}</p>
              <button onClick={() => signOut()}  className='text-white flex flex-row justify-center items-center uppercase bg-transparent text-center gap-1 hover:bg-[#5865F2] hover:rounded-md '> 
                <FaDiscord className=''> </FaDiscord>  <p className='text-[12px]'>Logout</p>
              </button>
            </div>
            
        </div>
        
        <hr className='mt-4  border-1 border-x-neutral-400'></hr>
        
      </div>
    

      <div id='nav' className='mt-10'>

      <Link href='/toolkit/bulktransfer'> 
        <button  
        onClick={()=>{setIsActive(true) 
          setMenuItem("BulkTransfer")  
        }}  
        className={
        (isActive && menuItem==="BulkTransfer")
        ? 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 bg-[#0f1e36]'
        : 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'
        }> 
        <BiTransfer className='rounded-full border border-gray-100 text-xl'  /> <p className=''>Bulk Transfer</p>
        </button>
        </Link> 

        <button 
        onClick={()=> {setIsActive(true) 
          setMenuItem("TheCollector")  
       }} 
       className={
        (isActive && menuItem==="TheCollector")
        ? 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 bg-red-700'
        : 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'
        }>  
                    <RiHandCoinLine className='rounded-full border border-gray-100 text-xl'> </RiHandCoinLine> <p className=''>The Collector</p>
        </button>
        
        <button onClick={()=> {setIsActive(true) 
          setMenuItem("TheVault")  
      }} className={
        (isActive && menuItem==="TheVault")
        ? 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 bg-red-700'
        : 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'
        }> 
                    <BsSafe2 className='rounded-full border border-gray-100 text-xl'> </BsSafe2> <p className=''>The Vault</p>
        </button>

        <button onClick={()=> {setIsActive(true) 
          setMenuItem("TradingSuite")  
      }} className={
        (isActive && menuItem==="TradingSuite")
        ? 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 bg-red-700'
        : 'text-white flex flex-row justify-start items-center rounded-md  bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'
        }> 
                    <GiTargetShot className='rounded-full border border-gray-100 text-xl'> </GiTargetShot> <p className=''>Trading Suite</p>
        </button>
        
      </div>

      
      <div id='footer' className='mt-80 py-10'>

          <p className='text-xl gap-2 h-full flex flex-row justify-center items-center'> 
          <Image src={transferImg} width={40} height={40} className=''></Image> 
          Shadies Toolkit
         </p>
         <Image src={transferImg} width={40} height={40} className=''></Image> 
        </div>
    </div>
    </aside>
   
    </>
  )
}

export default ToolSideBar

