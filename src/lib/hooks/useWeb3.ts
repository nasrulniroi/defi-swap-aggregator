'use client';
import { useState, useCallback } from 'react';
export function useWeb3() {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const connect = useCallback(async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      setIsConnecting(true);
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const cid = await (window as any).ethereum.request({ method: 'eth_chainId' });
        setChainId(parseInt(cid, 16));
      } catch (e) { console.error(e); }
      setIsConnecting(false);
    }
  }, []);
  const disconnect = useCallback(() => { setAccount(null); setChainId(null); }, []);
  return { account, chainId, isConnecting, connect, disconnect, isConnected: !!account };
}
