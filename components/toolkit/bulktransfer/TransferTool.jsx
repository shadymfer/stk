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

//@ts-ignore
import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, createTransferInstruction} from '@solana/spl-token'

//solana stuff
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Transaction, PublicKey, TransactionInstruction } from '@solana/web3.js'
import { gql } from '@apollo/client'
import Image from 'next/image'

 
const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.' || 'vesseLs of SHADIES items waiting to be awakened for their evolution. An evolution experience from The Shady Class.']



const TransferTool = () => {
    const { publicKey, signTransaction, connected } = useWallet()	
    const { connection } = useConnection()	
    const [selected,setSelected] = useState(false)
    const [search, setSearch] = useState('')	
    const [nfts, setNfts] = useState([])	
    const [sending, setSending] = useState([])	
    const [to, setTo] = useState('')	
    const [loading, setLoading] = useState(false)	
    const [feedbackStatus, setFeedbackStatus] = useState("")
    const [allowed, setAllowed] = useState(false)

    const massSend = async (list, to) => {	
      console.log("Sending: ", list , "\n To: ", to)

      setLoading(true)	
  
      if (to == '') {
        toast.error('no dest')
        setLoading(false)
        setFeedbackStatus("🤦‍♂️ NO RECEIVER SER, YOU DUMMY...")
  
        return{
          feedbackStatus,
        }
      } else {
        try {
          console.log('to: ', to)
          new PublicKey(to)
          console.log('valid dest address: ', to)
        } catch (e) {
          console.log('Invalid address')
          setTo('')
          setLoading(false)
          setFeedbackStatus("🤦‍♂️ Wrong address ser.. Fool of a took.")
  
          return{
            feedbackStatus,
          }
        }
      }
  
      if (!list || !connection || !publicKey || !signTransaction) {
        console.log('returning')
        setLoading(false)
        setFeedbackStatus("🤦‍♂️ NO SIG SER..")
        return{
          feedbackStatus,
        }
      }
      if (!list.length) {	
        console.log('probably want to select some nfts')	
        setLoading(false)	
        return	
      }	
      setFeedbackStatus(`Processing ${list.length} send request..`)	
      setFeedbackStatus(`✍️ Sending in ${Math.ceil(list.length / 7)} packages..`)	
      
      for (var i = 0; i < list.length / 8; i++) {	
        const tx = new Transaction()	
        for (var j = 0; j < 7; j++) {	
          if (list[i * 7 + j]) {	
            const mintPublicKey = new PublicKey(list[i * 7 + j].mintAddress)	
            const fromTokenAccount = await getAssociatedTokenAddress(	
              mintPublicKey,	
              publicKey	
            )	
            const fromPublicKey = publicKey	
            const destPublicKey = new PublicKey(to)	
            const destTokenAccount = await getAssociatedTokenAddress(	
              mintPublicKey,	
              destPublicKey	
            )	
            const receiverAccount = await connection.getAccountInfo(	
              destTokenAccount	
            )	
            if (receiverAccount === null) {	
              tx.add(	
                createAssociatedTokenAccountInstruction(	
                  fromPublicKey,	
                  destTokenAccount,	
                  destPublicKey,	
                  mintPublicKey,	
                  TOKEN_PROGRAM_ID,	
                  ASSOCIATED_TOKEN_PROGRAM_ID	
                )	
              )	
            }	
            tx.add(	
              createTransferInstruction(	
                fromTokenAccount,	
                destTokenAccount,	
                fromPublicKey,	
                1	
              )	
            )	
          }	
        }	
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash	
        tx.feePayer = publicKey	
        // setFeedbackStatus("✍️ SIGN yer Phantom ser..")
  
        let signed = undefined	
        try {	
          signed = await signTransaction(tx)	
        } catch (e) {	
          toast(e.message)	
          setLoading(false)	
          return	
        }	
        let signature = undefined	
        try {	
          signature = await connection.sendRawTransaction(signed.serialize())	
          await connection.confirmTransaction(signature, 'confirmed')	
          toast.success('Transaction successful')	
          {/*ga.event({	
            action: 'multisend_success',	
            params: { count: sending.length }	
          })*/	}
          sending.map(n => {	
            setNfts(nfts.filter(n => !sending.includes(n)))	
            setFeedbackStatus("🤝 SUCCESS SER! If BULK packaged, wait for all of it to finish.")
          })	
        } catch (e) {	
          setFeedbackStatus("😒 IT ERROR'D SER. Try again.")
          toast.error(e.message)	
          setLoading(false)	
         {/* ga.event({	
            action: 'multisend_error',	
            params: { msg: e.message }	
          })*/	}
  
        }	
      }	
      setSending([])	
      console.log('after success: ', sending)
      setLoading(false)	
  
      return{
        feedbackStatus,
      }
    } 
    


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
                    <h2>{sending.length}/{nfts.length} selected</h2> 
                    
                    <input type="text" className="mt-2 rounded text-slate-800" placeholder='Search NFTs' onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>

                <div id='transferTo' className='flex flex-col mr-5 gap-2' >
                    <input type="text" className="rounded text-slate-800" placeholder='Enter Receiver Address'
                    onChange={e => {
                      setTo(e.target.value)
                    }} />
                    <button 
                    loading={loading}
                    className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-gradient-to-r from-[#c31432] to-[#240b36] w-64 text-center h-12'
                    onClick={() => {
                      // setLoading(true)
                      massSend(sending, to)
                      // setLoading(false)
                    }}> 
                        <BiTransfer className='mr-2'> </BiTransfer><p className='font-bold'>Transfer items</p> 
                    </button> 
                </div>
                
            </div>
          </div> 

          <div id='items' className='text-white overflow-x-hidden bg-slate-900 shadow-xl rounded-xl mt-10'>
                  <div className='lg:mx-10 mt-5  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-20 '>

                  {nfts
                    .filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
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
                          mintAddress={n.mintAddress}
                          unselect={() => {
                            setSending(sending.filter(item => item !== n))
                            console.log('Unselect\n', sending)
                          }}
                          select={() => {
                            setSending([...sending, n])
                            console.log('Selected: \n', sending)
                            
                          }}
                          selected={sending.includes(n)}
                      />
                  
                    ))
                  }
                      
                  
                  </div>
          </div>
          
          
          

      </div>
    </>
  )
}

export default TransferTool