import React from 'react'
import {useSession, signOut, getSession} from 'next-auth/react'

import ToolkitLayout from '../../components/layouts/ToolkitLayout'
import { FaDiscord } from 'react-icons/fa';
import WebsiteLayout from '../../components/layouts/WebLayout';



const Index = () => {
const {data: session, status} = useSession();


  if(session){
    return (
      <>
        <p> You are signed in</p>
        <button onClick={() => signOut()}  className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-[#5865F2] h-[50px] w-64 text-center'> 
                  <FaDiscord className='mr-2'> </FaDiscord> <p className=''>Logout</p>
        </button>
        <ToolkitLayout />     
        
      </>
    )
  } 
}

export default Index

export const getServerSideProps =async(context) =>{

  const session = await getSession(context)
  if(!session){
    return{
      redirect:{
        destination:'/auth/login'
      }
    }
    
  }
  return {
    props: {session}
  }
  

}