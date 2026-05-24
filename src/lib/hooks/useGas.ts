'use client';
import { useState, useEffect } from 'react';
export function useGas() {
  const [gasPrice, setGasPrice] = useState(30);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setGasPrice(p => p + (Math.random() - 0.5) * 5), 15000);
    return () => clearInterval(interval);
  }, []);
  const estimateGasCost = (units: number) => ((units * gasPrice * 3245) / 1e18).toFixed(2);
  return { gasPrice, loading, estimateGasCost };
}
