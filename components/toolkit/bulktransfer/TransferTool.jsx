//react stuff
import React, { useEffect, useState, useMemo } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//icons
import { BiTransfer } from 'react-icons/bi'

//images
import logo from '../../../public/assets/newth.ico'

//components
import Cards from './Cards'

//types/objects
import {Nft} from '../../../types'

//helpers
import client from '../../../client'
import * as ga from '../../../lib/ga'


//solana stuff
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Transaction, PublicKey, TransactionInstruction } from '@solana/web3.js'
import { gql } from '@apollo/client'
import Image from 'next/image'

 
const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.' || 'vesseLs of SHADIES items waiting to be awakened for their evolution. An evolution experience from The Shady Class.']



const TransferTool = () => {
    const { publicKey, signTransaction, connected } = useWallet()	
    const [selected,setSelected] = useState(false)
    const [nfts, setNfts] = useState([])	
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
     // setSending([])
      //setTo('')
    }
  }, [publicKey?.toBase58()])

  useMemo(()=>{
    nfts.map((nft)=>{
      if (approvedAccounts.includes(nft.description)){
        console.log('approved: ',nft.name)
        setAllowed(true)
      }
    })
  }, [nfts])



  return (

    <>
        <div className={
            (allowed) ? 'hidden' : 'text-center flex flex-col mt-20 items-center'
        }>
            
            <h2>You must be a ShadyClass Holder to Utilize this Tool</h2>
            <Image src={logo} height={400} width={400}></Image>
            
            <a href="https://magiceden.io/marketplace/tshc">
             <div className='w-[900px] '>
             <h2 className='hover:shadow hover:text-rose-600 duration-[200ms,400ms] transition-[color,box-shadow]'>Buy The Shady Class NFT on Magic Eden!</h2> 
             </div>
            </a>

        </div>
      
        <div id='container' className={
            (!allowed) ? 'hidden' : ' bg-[#09101B] fixed  rounded-md flex flex-col p-8 mt-16 h-screen mx-20 shadow-slate-400 shadow-xl'
          }>
          
        <div className={
          (allowed) ? '' : 'hidden'
          }>
            <div className='flex justify-between'>
                <div id='counter'>
                    <div className='ml-10 flex flex-col items-center'>
                    <h2>X/100</h2>
                    <p>items Selected</p>
                    </div>
                </div>

                <div id='transferTo' className='flex flex-col mr-5 gap-2'>
                    <input type="text" class="rounded text-slate-800" />
                    <button className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-gradient-to-r from-[#c31432] to-[#240b36] w-64 text-center h-12'> 
                        <BiTransfer className='mr-2'> </BiTransfer><p className='font-bold'>Transfer items</p> 
                    </button> 
                </div>
                
            </div>
          </div> 

          <div id='items' className='text-white overflow-x-hidden bg-slate-900 shadow-xl rounded-xl mt-10'>
                  <div className='lg:mx-10 mt-5  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-20 '>

                  {nfts
                  .filter(n => n.name.toLowerCase())
                  .sort ((a, b) => {
                    if (a.name > b.name) return 1;
                    else if (a.name < b.name) return -1;
                    else return 0;
                  })
                  .map(n => (
                
                  <Cards 
                      key={Math.random()}
                      name={n.name} 
                      image={n.image} 
                      isSelected={selected}

                  >

                  </Cards>
                  ))}
                      
                  
                  </div>
          </div>
          
          
          

      </div>
    </>
  )
}

export default TransferTool