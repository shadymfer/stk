//react stuff
import React, { useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';

//icons
import { BiTransfer } from "react-icons/bi";

//images
import logo from "../../../public/assets/newth.ico";

//components
import Cards from "../bulktransfer/Cards";

//types/objects
import { Nft } from "../../../types";

//helpers
import client from "../../../client";
import * as ga from "../../../lib/ga";

//@ts-ignore
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createTransferInstruction,
} from "@solana/spl-token";

//solana stuff
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Transaction,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { gql } from "@apollo/client";
import Image from "next/image";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import { useTokenRegistryContext } from "../../../contexts";
import {
  buildCloseTokenAccountInstruction,
  listEmptyTokenAccounts,
} from "../../../utils/accounts";


import { getEmptyAccountInfos, EmptyAccountInfo, getSolscanLink, getSelectedPKsToClose } from "../../../utils/utils"
import { EmptyAccount, TotalRedemptions, findEmptyTokenAccounts, createCloseEmptyAccountsTransactions, getTotalRedemptions, getPKsToClose } from "../../../utils/walletmanager";

import * as anchor from "@project-serum/anchor";
import Link from "next/link";

const approvedAccounts = [
  "Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries." ||
    "vesseLs of SHADIES items waiting to be awakened for their evolution. An evolution experience from The Shady Class.",
];

const CollectorTool = (props) => {
  const [allowed, setAllowed] = useState(false);
  const { publicKey, signTransaction, connected } = useWallet();
  const connection = props.connection;
  const [nfts, setNfts] = useState([]);

  const [emptyAccounts, setEmptyAccounts] = useState([]);
  const [totalRedemptions, setTotalRedemptions] = useState();
  const [emptyAccountInfos, setEmptyAccountInfos] = useState([]);
  const [showTable, setShowTable] = useState(false);
  //const [isInTransaction, setIsInTransaction] = useState(false); 
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const [selectionModel, setSelectionModel] = useState();
  const [donationPercentage] = useState(0);
  const wallet = useWallet();

  const anchorWallet = {
    publicKey: wallet.publicKey,
    signAllTransactions: wallet.signAllTransactions,
    signTransaction: wallet.signTransaction,
  } ;

  const provider = new anchor.AnchorProvider(connection, anchorWallet, {
    preflightCommitment: 'recent',
  });
  const idl = require("./frcnt_IDL.json");
  const program = new anchor.Program(idl, props.frcntrProgramId, provider);

  const testWallet = new PublicKey('6E6tKLiWHX1cifhiBz8evRmjFmA73dNbHyCW77oM7rsT')
  
  const loadEmptyAccounts = () => {
    (async () => {
      if (!wallet || !wallet.publicKey) return;
      //console.log("Finding empty token accounts");
      const updatedEA = await findEmptyTokenAccounts(connection, testWallet);
      //console.log("Found  "+updatedEA.size);

      setEmptyAccounts(updatedEA);

      const totalInfo = await getTotalRedemptions(connection, props.frcntrAccount);

      if (totalInfo) {
        setTotalRedemptions(totalInfo);
      }


    })();
  };

  const enableTable = async () => {
    if (!emptyAccounts) return;
    setShowTable(true);

    const updateStateCallback = (data) => {
      (undefined); setEmptyAccountInfos(data);
    }
    const eaInfos = await getEmptyAccountInfos(connection, emptyAccounts, updateStateCallback);
    if (eaInfos) {
      setEmptyAccountInfos(eaInfos);
      const allIDs = eaInfos.map(ea => ea.id);
      setSelectionModel(allIDs); // select all
    }

    
  }

  const emptyAccountsColumns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'account', headerName: 'ADDRESS', width: 400,
      renderCell: (cellValues) => {
        const adr = cellValues.row.account.publicKey.toBase58();
        return <Link href={getSolscanLink(adr)} target="_blank">{adr}</Link>;
      }
    },
    { field: 'lamports', headerName: 'LAMPORTS', width: 100 },
    {
      field: 'mint', headerName: 'MINT ADDRESS', width: 400,
      renderCell: (cellValues) => {
        const adr = cellValues.row.account.mint.toBase58();
        return <Link href={getSolscanLink(adr)} target="_blank">{adr}</Link>;
      }
    },
    { field: 'name', headerName: 'NAME', width: 200 },
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  
  
  ];


  useEffect(loadEmptyAccounts, [
    wallet,
    connection,
    props.frcntrAccount
  ]);
  
  console.log('wALLET: ',wallet)
  async function getEA(){
    const updatedEA =  await findEmptyTokenAccounts(connection, wallet.publicKey);
    return updatedEA
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
  `;

  useMemo(() => {
    if (publicKey?.toBase58()) {
      client
        .query({
          query: GET_NFTS,
          variables: {
            owners: [publicKey?.toBase58()],
            offset: 0,
            limit: 10000,
          },
        })
        .then((res) => setNfts(res.data.nfts));
    } else {
      setNfts([]);
   
     
    }
  }, [publicKey?.toBase58()]);

  useMemo(() => {
    nfts.map((nft) => {
      if (approvedAccounts.includes(nft.description)) {
        console.log("approved: ", nft.name);
        setAllowed(true);
      }
    });
  }, [nfts]);

  

  const onRedeem = async () =>{
    try {
      //setIsInTransaction(true);
      if (wallet && wallet.publicKey && emptyAccounts && emptyAccounts.length > 0) {

        const closablePKs = getPKsToClose(emptyAccounts);
        let selectedPKs = closablePKs;
        if (selectionModel && emptyAccountInfos) {
          console.log(selectionModel.length + " selected token accounts.");
          selectedPKs = getSelectedPKsToClose(emptyAccountInfos, selectionModel);
          //console.log(selectedPKs.length+ " accounts in queue.");
        }

        const transactions = await createCloseEmptyAccountsTransactions(wallet.publicKey, selectedPKs, props.frcntrAccount, program, donationPercentage, props.donationAddress);
        for (const ta of transactions) {
          const txid = await wallet.sendTransaction(ta, connection);
          console.log(txid);
          const instrCnt = ta.instructions.length;
          console.log("Closing accounts (" + instrCnt + " instructions)");

          const res = await connection.confirmTransaction(txid, 'confirmed');
          if (!res.value.err) {
            setAlertState({
              open: true,
              message: "SOL collected. Grats!",
              severity: "success",
            });
          } else {
            setAlertState({
              open: true,
              message: res.value.err.toString(),
              severity: "warning",
            });
          }
        }

      }
    } catch (error) {
      let message = error.msg || "Process Unsuccessful. Try again.";
      console.trace();

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      // if (wallet && wallet.publicKey) {
      //   const balance = await props.connection.getBalance(wallet.publicKey);
      //   setBalance(balance / LAMPORTS_PER_SOL);
      // }
      //setIsInTransaction(false);
      //loadEmptyAccounts();
    }
  }
    
  

  return (
    <>
      <div
        className={
          allowed ? "hidden" : "text-center flex flex-col mt-20 items-center"
        }
      >
        {" "}
        {console.log("allowed?", allowed, "\nconnected?", connected)}
        <h2>You must be a ShadyClass Holder to Utilize this Tool</h2>
        <Image src={logo} height={400} width={400}></Image>
        <a href="https://magiceden.io/marketplace/tshc">
          <div className="w-[900px] ">
            <h2 className="hover:shadow hover:text-rose-600 duration-[200ms,400ms] transition-[color,box-shadow]">
              Buy The Shady Class NFT on Magic Eden!
            </h2>
          </div>
        </a>
      </div>

      <div
        id="container"
        className={
          !allowed
            ? "hidden"
            : " bg-[#09101B] fixed h-full w-[1440px] rounded-md flex flex-col p-8 mt-16 mx-20 shadow-slate-400 shadow-xl"
        }
      >
        <div className={allowed ? "" : "hidden"}>
          <div>CollectorTool</div>
          {!showTable ? 
          <p onClick={enableTable} style={{ color: "white", textAlign: "center", cursor: "pointer" }}>Activity Log</p> :
        emptyAccountInfos && emptyAccountInfos.length > 0 ?
          <div style={{ width: '100%', textAlign: "center" }}>
            <DataGrid sx={{
              color: "none",
              border: 2,
            }}
              autoHeight
              rows={emptyAccountInfos}
              columns={emptyAccountsColumns}
              checkboxSelection
              selectionModel={selectionModel}
              onSelectionModelChange={setSelectionModel}
            />
          </div>
          : <p>NOTHING TO COLLECT.</p>}
          
        </div>
      </div>
    </>
  );
};

export default CollectorTool;
