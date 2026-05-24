'use client';
import { useState } from 'react';
export function LiquidityForm() {
  const [amount0, setAmount0] = useState('');
  const [amount1, setAmount1] = useState('');
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-bold">Add Liquidity</h3>
      <div className="space-y-3">
        <div className="bg-surface-elevated rounded-xl p-4">
          <label className="text-sm text-muted-foreground">Token A</label>
          <input type="text" placeholder="0.0" value={amount0} onChange={e => setAmount0(e.target.value)} className="bg-transparent text-2xl font-bold outline-none w-full mt-1" />
        </div>
        <div className="bg-surface-elevated rounded-xl p-4">
          <label className="text-sm text-muted-foreground">Token B</label>
          <input type="text" placeholder="0.0" value={amount1} onChange={e => setAmount1(e.target.value)} className="bg-transparent text-2xl font-bold outline-none w-full mt-1" />
        </div>
        <button className="w-full py-3 rounded-xl bg-primary-500 font-bold">Add Liquidity</button>
      </div>
    </div>
  );
}
