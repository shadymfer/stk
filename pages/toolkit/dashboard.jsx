import React from 'react'
import ToolSideBar from '../../components/toolkit/ToolSideBar'
import { WalletDisconnectButton, WalletMultiButton, useWalletModal } from '@solana/wallet-adapter-react-ui';

const dashboard = () => {
  return (<>
    <div className='toolkit-global'>Dashboard
    <ToolSideBar />
    <WalletMultiButton />
    </div>
    

    </>
  )
}

export default dashboard