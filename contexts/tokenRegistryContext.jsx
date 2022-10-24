import { TokenInfo, TokenInfoMap, TokenListContainer, TokenListProvider } from "@solana/spl-token-registry";
import { createContext, useContext, useEffect, useState } from "react";

export const TokenRegistryContext = createContext(new Map());

export function useTokenRegistryContext() {
  const context = useContext(TokenRegistryContext);
  if (!context) {
    throw new Error("TokenRegistryContext not set");
  }

  return context;
}

export function TokenRegistryContextProvider(props) {
  const [tokenRegistry, setTokenRegistry] = useState(new Map());

  useEffect(() => {
    new TokenListProvider().resolve().then((tokens) => {
      const tokenMap = new Map();
      // TODO filterByChainId
      tokens.getList().forEach((item) => {
        tokenMap.set(item.address, item);
      });
      setTokenRegistry(tokenMap);
    });
  }, []);

  return (
    <TokenRegistryContext.Provider value={tokenRegistry}>
      {props.children}
    </TokenRegistryContext.Provider>
  );
}