import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../toolkit/bulktransfer/header";

import ToolSideBar from "../toolkit/ToolSideBar";

const BulkTransferLayout = ({
    children,
    
  }) => {

    
  const {data: session, status} = useSession();
    return (
      <>
       <Head>
        <title>Bulk Transfer Tool | The Shady Class</title>
        <meta name="description" content="Bulk Transfer Tool " />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id='bulk' className="bg-[#050A0F] h-full w-full text-white">
        
    <ToolSideBar name={session.user.name} image={session.user.image}>

</ToolSideBar><main><Header></Header></main>
       
        </div>
      </>
    );
  };
  
  export default BulkTransferLayout;