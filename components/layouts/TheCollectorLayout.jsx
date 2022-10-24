import React, { useMemo, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../toolkit/bulktransfer/header";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import ToolSideBar from "../toolkit/ToolSideBar";
import CollectorTool from "../toolkit/collector/CollectorTool";


import * as anchor from '@project-serum/anchor';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';



const network = process.env.REACT_APP_SOLANA_NETWORK ;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST;
const frcntProgramID = new anchor.web3.PublicKey(process.env.REACT_APP_COUNTER_PROGRAM_ID);
const frcntAccount = new anchor.web3.PublicKey(process.env.REACT_APP_COUNTER_PROGRAM_ACCOUNT);
const donationAddress = new  anchor.web3.PublicKey(process.env.REACT_APP_DONATION_ADDRESS);
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('mainnet-beta'));





const TheCollectorLayout = ({ children, isActive }) => {
  const { data: session, status } = useSession();
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  return (
    <>
      <Head>
        <title>The Collector Tool | The Shady Class</title>
        <meta name="description" content="Bulk Transfer Tool " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="bulk" className="bg-[#050A0F] flex  w-full  text-white ">
        <ToolSideBar
          name={session.user.name}
          image={session.user.image}
          active={isActive}
          menu={"TheCollector"}
        />

        <div className="flex  flex-col  w-full p-10 ">
          <Header title="The Collector" />
          <div>
            <CollectorTool 
              connection={connection}
              rpcHost={rpcHost}
              frcntrProgramId={frcntProgramID}
              frcntrAccount={frcntAccount}
              donationAddress={donationAddress} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheCollectorLayout;
