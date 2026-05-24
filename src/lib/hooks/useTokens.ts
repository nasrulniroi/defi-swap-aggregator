'use client';
import { useState, useEffect } from 'react';
const MOCK_TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', address: '0x0', decimals: 18, price: 3245.67, change24h: 2.4, chainId: 1 },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', address: '0x1', decimals: 8, price: 67890.12, change24h: 1.8, chainId: 1 },
  { symbol: 'USDC', name: 'USD Coin', address: '0x2', decimals: 6, price: 1.0, change24h: 0.01, chainId: 1 },
  { symbol: 'DAI', name: 'Dai', address: '0x3', decimals: 18, price: 1.0, change24h: -0.01, chainId: 1 },
  { symbol: 'UNI', name: 'Uniswap', address: '0x4', decimals: 18, price: 12.45, change24h: 5.6, chainId: 1 },
  { symbol: 'LINK', name: 'Chainlink', address: '0x5', decimals: 18, price: 18.9, change24h: 3.2, chainId: 1 },
];
export function useTokens() {
  const [tokens, setTokens] = useState(MOCK_TOKENS);
  const [loading, setLoading] = useState(false);
  const searchTokens = (query: string) => tokens.filter(t => t.symbol.toLowerCase().includes(query.toLowerCase()) || t.name.toLowerCase().includes(query.toLowerCase()));
  return { tokens, loading, searchTokens };
}
