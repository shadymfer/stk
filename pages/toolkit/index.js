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
        {console.log(session)}
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