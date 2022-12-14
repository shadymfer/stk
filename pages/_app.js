

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { FakeWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { AppProps } from 'next/app';
import { FC } from 'react';
import React, { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router'

import { ToastContainer } from 'react-toastify'

import '../styles/globals.css'
require('@solana/wallet-adapter-react-ui/styles.css');

import {SessionProvider} from 'next-auth/react'
import { TokenRegistryContextProvider } from '../contexts';

function MyApp({ Component, pageProps,session }) {

  const router = useRouter()

   // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
   const network = WalletAdapterNetwork.Mainnet;

   // You can also provide a custom RPC endpoint.
   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

   // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
   // Only the wallets you configure here will be compiled into your application, and only the dependencies
   // of wallets that your users connect to will be loaded.
   const wallets = useMemo(
    () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
);


/**
 *   <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
          <ToastContainer/>
          </WalletModalProvider>
      </WalletProvider>
  </ConnectionProvider>
 */

  if(Component.getLayout){
    return ( Component.getLayout(
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
          <ToastContainer/>
            <SessionProvider session={session} >
             
                <Component {...pageProps} />
             
            </SessionProvider>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
            
    )
        
  
    )
    
  }

  return <>

<ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
          <ToastContainer/>
            <SessionProvider session={session} >
              <Component {...pageProps} /> 
            </SessionProvider>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>

 
 
  </> 
}

export default MyApp
