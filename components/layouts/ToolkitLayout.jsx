import { useSession } from "next-auth/react";
import Head from "next/head";

import ToolSideBar from "../toolkit/ToolSideBar";

const ToolkitLayout = ({
    children,
    
  }) => {

    
  const {data: session, status} = useSession();
    return (
      <>
       <Head>
        <title>ShadyToolkit | The Shady Class</title>
        <meta name="description" content="The Shady Class Toolkit" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-[#050A0F] h-screen w-screen text-white">
        
        <ToolSideBar name={session.user.name} image={session.user.image}>
        {children}
         
        </ToolSideBar> 
        </div>
      </>
    );
  };
  
  export default ToolkitLayout;