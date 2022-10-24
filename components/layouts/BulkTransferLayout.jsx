import React, { useMemo, useState } from 'react'
import Head from "next/head";
import Header from "../toolkit/bulktransfer/header";
import Link from 'next/link';
import Image from 'next/image';
import {useSession, signOut, getSession} from 'next-auth/react'

import TransferTool from "../toolkit/bulktransfer/TransferTool";
import ToolSideBar from "../toolkit/ToolSideBar";

import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { gql } from '@apollo/client'

import * as ga from '../../lib/ga'
import { Nft } from '../../types.ts'
import client from '../../client.ts'

import IconImg from '../../public/assets/newth.ico'



const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.']


const BulkTransferLayout = ({
    children, isActive
    
  }) => {


    const { publicKey, signTransaction, connected } = useWallet()
    const { connection } = useConnection()
    const [nfts, setNfts] = useState([])
    const [sending, setSending] = useState([])
    const [to, setTo] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [feedbackStatus, setFeedbackStatus] = useState("")
    const [allowed, setAllowed] = useState(false)
  
  
 


  const {data: session, status} = useSession();

    return (
      <>
       <Head>
        <title>Bulk Transfer Tool | The Shady Class</title>
        <meta name="description" content="Bulk Transfer Tool " />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div id='bulk' className="bg-[#050A0F] flex  w-full  text-white ">
          
          <ToolSideBar name={session.user.name} image={session.user.image} active={isActive} menu={"BulkTransfer"} />
         
              <div className="flex  flex-col w-full p-10 ">
                <Header title='Bulk Transfer' /> 
                <div>
                  <TransferTool /> 
                </div> 
              </div>
          
             

          
        </div>
      </>
    );
  };
  
  export default BulkTransferLayout;