import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import BulkSidebar from '../../components/toolkit/ToolSideBar'

const bulktransfer = () => {
  return (
    <div className='toolkit-global' >
      bulktransfer
      <WalletMultiButton className=''/>
      <BulkSidebar />

    </div>
  )
}

export default bulktransfer