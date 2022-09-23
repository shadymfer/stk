import React, { useMemo, useState } from 'react'
import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { gql } from '@apollo/client'
import * as ga from '../../lib/ga'
import { Nft } from '../../types.ts'
import client from '../../client.ts'
import Image from 'next/image';
import IconImg from '../../public/assets/newth.ico'
import Link from 'next/link';

const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.']
const Toolkit = () => {
    const { publicKey, signTransaction, connected } = useWallet()
    const { connection } = useConnection()
    const [nfts, setNfts] = useState([])
    const [sending, setSending] = useState([])
    const [to, setTo] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [feedbackStatus, setFeedbackStatus] = useState("")
    const [allowed, setAllowed] = useState(false)



    const GET_NFTS = gql`
    query GetNfts($owners: [PublicKey!], $limit: Int!, $offset: Int!) {
      nfts(owners: $owners, limit: $limit, offset: $offset) {
        address
        mintAddress
        name
        description
        image
        owner {
          address
          associatedTokenAccountAddress
        }
      }
    }
  `

  useMemo(() => {
    if (publicKey?.toBase58()) {
      client
        .query({
          query: GET_NFTS,
          variables: {
            owners: [publicKey?.toBase58()],
            offset: 0,
            limit: 10000
          }
        })
        .then(res => setNfts(res.data.nfts))
    } else {
      setNfts([])
      setSending([])
      setTo('')
    }
  }, [publicKey?.toBase58()])

  useMemo(()=>{
    nfts.map((nft)=>{
      if (approvedAccounts.includes(nft.description)){
        console.log('approved')
        setAllowed(true)
      }
    })
  }, [nfts])

function test(){
  if(connected && allowed){
    return {
      redirect: {
        permanent: false,
        destination: '/toolkit/dashboard',
      },
    };
  }
}

  return (
    
    <div className='flex flex-col justify-center items-center text-center h-screen w-screen'>
        <h1 className='text-3xl sm:5xl '>Welcome to The Shady Class Toolkits</h1> <Image src={IconImg} alt='/' height={400} width={400}></Image>

        <div className='w-screen text-center p-10 '>
            {!connected && (<h1 >Connect Wallet To Get Access</h1>)}
            { connected && (<> { allowed ? 
              <div>
              <h1 className='text-sm text-green-500 '>You are a verified holder! Your support will help us build more fun stuff in Solana. 🔥 ✅</h1>
              <Link href='/toolkit/dashboard' ><button className=' w-lg sm:w-auto md:items-center text-xl p-4 text-gray-100 mt-4 '>Enter Dashboard</button> </Link>
            </div>
            : 
            <a href="https://magiceden.io/marketplace/tshc">
            <h1 className='text-sm text-red-500 font-bold  '>You do not hold any TSC NFT. 👻 Click here to get one in secondary.</h1>
            </a>} 
            </>)
            }

          </div>
          <WalletMultiButton />
    </div>
  )
}

export default Toolkit