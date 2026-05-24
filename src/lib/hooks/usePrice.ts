'use client';
import { useState, useEffect } from 'react';
export function usePrice(symbol: string) {
  const [price, setPrice] = useState(0);
  const [change24h, setChange24h] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const prices: Record<string, number> = { ETH: 3245.67, WBTC: 67890.12, USDC: 1, DAI: 1, UNI: 12.45, LINK: 18.9 };
    setPrice(prices[symbol] || 0);
    setChange24h(Math.random() * 6 - 3);
    setLoading(false);
  }, [symbol]);
  return { price, change24h, loading };
}
