import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../toolkit/bulktransfer/header";
import TransferTool from "../toolkit/bulktransfer/TransferTool";

import ToolSideBar from "../toolkit/ToolSideBar";

const BulkTransferLayout = ({
    children, isActive
    
  }) => {

    
  const {data: session, status} = useSession();
    return (
      <>
       <Head>
        <title>Bulk Transfer Tool | The Shady Class</title>
        <meta name="description" content="Bulk Transfer Tool " />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div id='bulk' className="bg-[#050A0F] flex h-screen justify-between text-white">
          
          <ToolSideBar name={session.user.name} image={session.user.image} active={isActive} menu={"BulkTransfer"} />
          <div id='bulk-main' className="w-full"> 
              <Header /> 
              <TransferTool /> 
          </div>
         

          
        </div>
      </>
    );
  };
  
  export default BulkTransferLayout;