'use client';
import { useState, useCallback } from 'react';
export function useRoutes() {
  const [routes, setRoutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const findRoutes = useCallback(async (from: string, to: string, amount: string) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setRoutes([
      { id: '1', dex: 'Uniswap V3', output: (Number(amount) * 3245).toFixed(2), gas: '$2.45', impact: '0.12%', optimal: true },
      { id: '2', dex: 'SushiSwap', output: (Number(amount) * 3240).toFixed(2), gas: '$1.80', impact: '0.15%', optimal: false },
      { id: '3', dex: 'Curve', output: (Number(amount) * 3248).toFixed(2), gas: '$3.10', impact: '0.08%', optimal: false },
    ]);
    setLoading(false);
  }, []);
  return { routes, loading, findRoutes };
}
