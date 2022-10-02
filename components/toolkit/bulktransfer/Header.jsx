
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




  return (
 
    <div id='toolheader' className='text-white flex flex-row  max-h-[70px] items-center justify-between m-20'>
      
      <h3>Bulk Transfer</h3>
      <WalletMultiButton /> 

    </div>
    
 
  )
}

export default Header