import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { RiHandCoinLine } from 'react-icons/ri'
import { BsSafe2 } from 'react-icons/bs'
import { GiTargetShot } from 'react-icons/gi'


import transferImg from '../../public/assets/favicon.ico'
import Link from 'next/link';

const ToolSideBar = ({name, image}) => {



  return ( 
    <div className='max-w-[280px] h-screen bg-[#09101B] grid grid-rows-4 justify-center items-center text-center text-white '>
     
      <div id="header" className='mb-auto flex flex-col mt-16' >
        <div className="flex flex-row items-center ml-[20%] mt-4 gap-4 w-12 h-12 ">
            <img className='rounded-full border border-gray-100 shadow-sm' src={image}  height={200} width={200} alt='IMG2'/>
            
            <div>
              <p>{name}</p>
              <button onClick={() => signOut()}  className='text-white flex flex-row justify-center items-center uppercase bg-transparent text-center gap-1 hover:bg-[#5865F2] hover:rounded-md '> 
                <FaDiscord className=''> </FaDiscord>  <p className='text-[12px]'>Logout</p>
              </button>
            </div>
            
        </div>
        
        <hr className='mt-4  border-2 border-x-neutral-400'></hr>
        
      </div>

      <div id='nav' className='row-span-2'>

      <Link href='/toolkit/bulktransfer'> 
        <button className='text-white flex flex-row justify-start items-center rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 
        hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]
       '> 
        <BiTransfer className='rounded-full border border-gray-100 text-3xl'  /> <p className=''>Bulk Transfer</p>
        </button>
        </Link> 

        <button onClick={() => signOut()}  className='text-white flex flex-row  justify-start items-center  rounded-md uppercase bg-transparent  h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <RiHandCoinLine className='rounded-full border border-gray-100 text-3xl'> </RiHandCoinLine> <p className=''>The Collector</p>
        </button>
        <button onClick={() => signOut()}  className='text-white flex flex-row justify-start items-center rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <BsSafe2 className='rounded-full border border-gray-100 text-3xl'> </BsSafe2> <p className=''>The Vault</p>
        </button>
        <button onClick={() => signOut()}  className='text-white flex flex-row  justify-start items-center  rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <GiTargetShot className='rounded-full border border-gray-100 text-3xl'> </GiTargetShot> <p className=''>Trading Suite</p>
        </button>
        
      </div>

      
      <div id='footer' className='row-span-2 mb-14 '>

          <p className='text-xl gap-2 flex flex-row justify-center items-center'> 
          <Image src={transferImg} width={40} height={40} className=''></Image> 
          Shadies Toolkit
         </p>
      
        </div>
    </div>
  )
}

export default ToolSideBar