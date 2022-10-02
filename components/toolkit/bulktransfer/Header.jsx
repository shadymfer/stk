
import React, { useMemo, useState } from 'react'
import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { gql } from '@apollo/client'
import * as ga from '../../../lib/ga'
import { Nft } from '../../../types.ts'
import client from '../../../client.ts'
import Image from 'next/image';
import IconImg from '../../../public/assets/newth.ico'
import Link from 'next/link';

const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.']

const Header = () => {

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


  return (
 
    <div id='toolheader' className='text-white flex flex-row w-full max-h-[70px] items-center justify-between m-5'>
      
      <h3>Bulk Transfer</h3>
      <WalletMultiButton /> 
      
    </div>
    
 
  )
}

export default Header