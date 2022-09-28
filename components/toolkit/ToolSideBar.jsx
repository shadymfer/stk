import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'


import transferImg from '../../public/assets/transfer.png'

const ToolSideBar = () => {

  const {data: session, status} = useSession();
  console.log(session)
  return ( 
    <div className='max-w-[280px] h-full bg-[#09101B] grid grid-rows-4 justify-center items-center text-center p-10 '>
     
      <div id="header" className='mb-40' >
        <p className='text-xl p-3'>Shadies Toolkit</p>
       
      </div>

      <div id='nav' className='row-span-1 '>
        <button className='text-white flex flex-row justify-start items-center rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4 
        hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
        <BiTransfer className='rounded-full border border-gray-100 text-3xl'  />    <p className=''>Bulk Transfer</p>
        </button>

        
        <button onClick={() => signOut()}  className='text-white flex flex-row  justify-start items-center  rounded-md uppercase bg-transparent  h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <BiTransfer className=''> </BiTransfer> <p className=''>The Collector</p>
        </button>
        <button onClick={() => signOut()}  className='text-white flex flex-row justify-start items-center rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <FaDiscord className=''> </FaDiscord> <p className=''>The Vault</p>
        </button>
        <button onClick={() => signOut()}  className='text-white flex flex-row  justify-start items-center  rounded-md uppercase bg-transparent h-[50px] w-64 text-left mb-4 pl-8 gap-4
         hover:shadow-[inset_20rem_0_0_0] hover:shadow-rose-800 duration-[200ms,400ms] transition-[color,box-shadow]'> 
                    <FaDiscord className=''> </FaDiscord> <p className=''>Trading Suite</p>
        </button>
        
      </div>

      
      <div className='row-span-2 place-self-end mb-14 '>
          <div className="flex flex-row items-center ml-3 mb-4 gap-4 w-12 h-12">
          <img className='rounded-full border border-gray-100 shadow-sm' src={session.user.image}  height={200} width={200} alt='IMG2'/>
            <p> {session.user.name}</p>
          </div>
          
          <button onClick={() => signOut()}  className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-[#5865F2] h-[50px] w-64 text-center gap-4'> 
          <FaDiscord className=''> </FaDiscord>  <p className=''>Logout</p>
          </button>
        </div>
    </div>
  )
}

export default ToolSideBar