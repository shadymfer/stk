import Image from 'next/image'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import TransferImg from '../../public/assets/transfer.png'
import StakingImg from '../../public/assets/staking.png'
import CollectorImg from '../../public/assets/collector.png'
import AutomationImg from '../../public/assets/sniper.png'
import VaultImg from '../../public/assets/vault.png'
import Link from 'next/link'
const Utilities = () => {
  return (
    <div id='utilities' className='w-full h-auto mt-10 bg-[#04040499]/40'>
    <div className='max-w-[1240px] mx-auto px-2 py-8' >
        <h1 className='text-white mb-5 mt-20  text-center'>Utilities</h1>
        <div className='grid md:grid-cols-2 gap-12 sm:gap-8'>
                
                <Link href="/bulktransfer">
                <div className='cursor-pointer text-center relative text-white flex items-center justify-center h-auto w-full shadow-md rounded-xl shadow-red-600 flex-col '>
                    <div className=' shadow-red-600 flex items-center justify-center shrink-0 grow-0 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className='' src={TransferImg} alt='' height={100} width={100}/>
                    </div>
                    <h2 className='text-white mt-5'>
                        Bulk Transfer
                    </h2>
                    <p className='m-auto '>Transfer more than 1 NFT to another wallet in 1 go. Fee-free. Gas only.</p>
                </div>
                </Link>
                
                <a href="https://staking.theshadyclass.xyz/" target="_blank" rel='noreferrer'>
                <div className='cursor-pointer text-center relative text-white flex items-center justify-center h-auto w-full shadow-md rounded-xl shadow-red-600 flex-col '>
                    <div className=' shadow-red-600 flex items-center justify-center shrink-0 grow-0 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className='' src={StakingImg} alt='' height={90} width={90}/>
                    </div>
                    <h2 className='text-white mt-5'>
                        Staking Platform
                    </h2>
                    <p className='m-auto'>Stake your TSC NFTs for $CRIM token yields. (Reopening Soon!)</p>
                </div>
                </a>

                <a href="https://collector.theshadyclass.xyz/" target="_blank" rel='noreferrer'>
                <div className='cursor-pointer text-center relative text-white flex items-center justify-center h-auto w-full shadow-md rounded-xl shadow-red-600 flex-col '>
                    <div className=' shadow-red-600 flex items-center justify-center shrink-0 grow-0 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className='' src={CollectorImg} alt='' height={100} width={100}/>
                    </div>
                    <h2 className='text-white mt-5'>
                        The Collector
                    </h2>
                    <p className='m-auto'>Collect your unused on-chain SOL.</p>
                </div>
                </a>
        
                <div className='cursor-pointer text-center relative text-white flex items-center justify-center h-auto w-full shadow-md rounded-xl shadow-red-600 flex-col '>
                    <div className=' shadow-red-600 flex items-center justify-center shrink-0 grow-0 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className='' src={AutomationImg} alt='' height={100} width={100}/>
                    </div>
                    <h2 className='text-white mt-5'>
                        Automation Suite (SOON)
                    </h2>
                    <p className='m-auto'> NFT Sniper and Automated Trading in Solana Marketplaces.</p>
                </div>

                <div className='cursor-pointer text-center relative text-white flex items-center justify-center h-auto w-full shadow-md rounded-xl shadow-red-600 flex-col '>
                    <div className=' shadow-red-600 flex items-center justify-center shrink-0 grow-0 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className='' src={VaultImg} alt='' height={100} width={100}/>
                    </div>
                    <h2 className='text-white mt-5'>
                        The Vault (SOON)
                    </h2>
                    <p className='m-auto'> Web-based on-chain NFT Ledger.</p>
                </div>
             
            </div> 
    </div>
    </div>
  )
}

export default Utilities