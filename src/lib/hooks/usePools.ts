'use client';
import { useState } from 'react';
export function usePools() {
  const [pools, setPools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchPools = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setPools([
      { id: '1', name: 'ETH/USDC', dex: 'Uniswap V3', tvl: '$245M', apr: '12.5%' },
      { id: '2', name: 'WBTC/ETH', dex: 'Uniswap V3', tvl: '$180M', apr: '8.2%' },
      { id: '3', name: 'USDC/DAI', dex: 'Curve', tvl: '$520M', apr: '4.1%' },
    ]);
    setLoading(false);
  };
  return { pools, loading, fetchPools };
}
