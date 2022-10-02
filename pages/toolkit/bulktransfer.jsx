import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { getSession, useSession } from 'next-auth/react';
import React from 'react'
import BulkTransferLayout from '../../components/layouts/BulkTransferLayout'
import ToolkitLayout from '../../components/layouts/ToolkitLayout'

const bulktransfer = ({ children }) => {
  const {data: session, status} = useSession();

  if(session){
    return (
      <>
        <BulkTransferLayout isActive={true}/>
     
      </>
    )
  } 
  
  

  }
    

export default bulktransfer

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


bulktransfer.getLayout = function BulkTransferLayout(page) {
 
  return(
    <>
   
        {page}
     
    </>    
  )
}