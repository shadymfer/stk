import React from 'react'
import {useSession, signOut, getSession} from 'next-auth/react'

import ToolkitLayout from '../../components/layouts/ToolkitLayout'
import { FaDiscord } from 'react-icons/fa';
import WebsiteLayout from '../../components/layouts/WebLayout';
import ToolSideBar from '../../components/toolkit/ToolSideBar';


const Index = ( { children }) => {
const {data: session, status} = useSession();


  if(session){
    return (
      <>
        {console.log(session)}
        <ToolSideBar name={session.user.name} image={session.user.image}>  
          {children}
       </ToolSideBar>
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