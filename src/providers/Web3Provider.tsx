'use client';
import { createContext, useContext, useState, useEffect } from 'react';
interface Web3ContextType {
  account: string | null;
  chainId: number | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
}
const Web3Context = createContext<Web3ContextType>({
  account: null, chainId: null, connect: async () => {}, disconnect: () => {}, isConnecting: false,
});
export const useWeb3 = () => useContext(Web3Context);
export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const connect = async () => {
    setIsConnecting(true);
    try {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const chainId = await (window as any).ethereum.request({ method: 'eth_chainId' });
        setChainId(parseInt(chainId, 16));
      }
    } catch (e) { console.error(e); }
    setIsConnecting(false);
  };
  const disconnect = () => { setAccount(null); setChainId(null); };
  return (
    <Web3Context.Provider value={{ account, chainId, connect, disconnect, isConnecting }}>
      {children}
    </Web3Context.Provider>
  );
}
