import React from 'react'
import {useSession, signOut, getSession, signIn} from 'next-auth/react'

import ToolkitLayout from '../../components/layouts/ToolkitLayout'
import { FaDiscord } from 'react-icons/fa';
import WebsiteLayout from '../../components/layouts/WebLayout';
import ToolSideBar from '../../components/toolkit/ToolSideBar';
import Link from 'next/link';

import { BiTransfer } from 'react-icons/bi';
import { RiHandCoinLine } from 'react-icons/ri';
import { BsSafe2 } from 'react-icons/bs';
import { GiTargetShot } from 'react-icons/gi';


const Index = ( { children }) => {
const {data: session, status} = useSession();


  if(session){
    return (
      <>
        {console.log(session)}
        <div className='flex'>
          <ToolSideBar name={session.user.name} image={session.user.image} active={true}>  
            {children}
          </ToolSideBar>
          <div className='bg-[#050A0F] flex flex-col w-full text-center py-8 text-white '>
            <div><h1>Welcome to the ShadyClass Toolkit</h1></div>
            <div className='mt-10'><h3>As a ShadyClass NFT Holder you get access to the following tools</h3></div>
            
            <div className='grid grid-cols-3 m-20 gap-12 items-center justify-center '>
              <div>
                <div className='flex flex-col items-center gap-5  border border-sky-900 rounded-xl p-4   '>
                  <BiTransfer className='rounded-full border border-gray-100 text-4xl'  /><h3>Bulk Transfer</h3>
                  
                  <p>This tool lets you transfer UNLIMITED multiple NFTs and you only pay for Gas </p>
                  <p>Unnamed NFTs are those who were most likely setup and minted in LMNFT</p>
                  
                </div>
                <div></div>
              </div>
              
              
              <div className='flex flex-col items-center gap-5  border border-sky-900 rounded-xl p-4  '>
                <RiHandCoinLine className='rounded-full border border-gray-100 text-4xl'> </RiHandCoinLine><h3>The Collector</h3>
                
                 <p>Collects your unused On-Chain SOL </p>
                 <p>When you mint/get a new NFT/token to your wallet, a "Token account" is created and SOL fees are deducted from you. </p>
                 <p>However, when that NFT/token leaves your wallet by sending it to others or by burning, the Token Account is left open and the fees are just there as on-chain rent.</p>
                <p>This tool will help you re-claim those rent fees</p>
                
              </div>
              <div className=''>
                <div className='flex flex-col items-center gap-5  border border-sky-900 rounded-xl p-4 '>
                <BsSafe2 className='rounded-full border border-gray-100 text-4xl'> </BsSafe2> <h3>The Collector</h3>
                  
                  <p>(SOON) Web-based on-chain NFT Ledger. </p>
                
                </div>

                <div className='flex flex-col items-center gap-5  border border-sky-900 rounded-xl p-4 mt-8 '>
                <GiTargetShot className='rounded-full border border-gray-100 text-4xl'> </GiTargetShot> <h3>Trading Suite</h3>
                  
                  <p>(SOON) NFT Sniper and Automated Trading in Solana Marketplaces. </p>
                
                </div>

              </div>
              

              
              
            </div>
          </div>
          
       </div>
      </>
    )
  } 
}

export default Index

Index.getLayout = function IndexLayout(page) {
 
  return(
    <>
   
        {page}
     
    </>    
  )
}


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