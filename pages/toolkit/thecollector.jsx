import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import TheCollectorLayout from "../../components/layouts/TheCollectorLayout";

const thecollector = ({ children }) => {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <TheCollectorLayout isActive={true} />
      </>
    );
  }
};

export default thecollector;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }
  return {
    props: { session },
  };
};

thecollector.getLayout = function TheCollectorLayout(page) {
  return <>{page}</>;
};
