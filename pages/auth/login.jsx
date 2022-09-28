import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
//import { providers, signIn, getSession, csrfToken } from "next-auth/client";

import { FaDiscord } from 'react-icons/fa';
import { TbArrowBackUp } from 'react-icons/tb';
import logo from '../../public/assets/newth.ico'
import Image from 'next/image';

const Login = ({ providers }) => {

    const {data:session} = useSession();
    if(!session){
        return (
        
        <div className='h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-bl from-[#c31432] to-[#240b36] text-white '>
          
          <div className='mt-[-200px] '>
          <Image src={logo} height={400} width={400}></Image>
            <h1>Welcome to the Shady Class Toolkit</h1>
            <p className='pt-4 font-medium'>Please sign in with your Discord</p>
          </div>
          <div className='items-center p-5' >
              <button onClick={() => signIn('discord')}  className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-[#5865F2] h-[50px] w-64 text-center'> 
                  <FaDiscord className='mr-2'> </FaDiscord> <p className='font-bold'>Login with Discord</p>
              </button>
          </div> 
          <div className='items-center' >
              <button className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-gradient-to-bl from-[#c31432] to-[#240b36] w-64 text-center h-12'> 
                  <TbArrowBackUp className='mr-2'> </TbArrowBackUp> <p className=''>Go Back to Main Site</p>
              </button>
          </div> 
        </div>
        
       
      )
    }   
    
}
        
    
  


export default Login