import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
//import { providers, signIn, getSession, csrfToken } from "next-auth/client";

import { FaDiscord } from 'react-icons/fa';
import discordImg from '../../public/assets/discordlogo.png'
import Image from 'next/image';

const Login = ({ providers }) => {

    const {data:session} = useSession();
    if(!session){
        return (
        <>
        <div className='h-screen w-full flex flex-col justify-center items-start p-24 custom-img border border-r-red-700 '>
          <div className='grid grid-row-3'>
            <h1>Welcome to the Shady Class Toolkit</h1>
            <p>Please sign in with your Discord</p>
          </div>
          <div className='items-center' >
              <button onClick={() => signIn('discord')}  className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-[#5865F2] h-[50px] w-64 text-center'> 
                  <FaDiscord className='mr-2'> </FaDiscord> <p className=''>Login with Discord</p>
              </button>
          </div> 
        </div>
        
        </>
      )
    }   
    
}
        
    
  


export default Login