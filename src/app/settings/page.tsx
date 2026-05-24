'use client';
import { useState } from 'react';
export default function SettingsPage() {
  const [slippage, setSlippage] = useState(0.5);
  const [deadline, setDeadline] = useState(20);
  const [expert, setExpert] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-6">
        <div className="glass rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-bold">Transaction Settings</h2>
          <div>
            <label className="text-sm text-muted-foreground">Default Slippage (%)</label>
            <div className="flex gap-2 mt-2">
              {[0.1, 0.5, 1.0].map(v => (
                <button key={v} onClick={() => setSlippage(v)} className={`px-4 py-2 rounded-lg ${slippage === v ? 'bg-primary-500 text-white' : 'bg-surface-elevated'}`}>{v}%</button>
              ))}
              <input type="number" value={slippage} onChange={e => setSlippage(Number(e.target.value))} className="w-24 px-3 py-2 bg-surface-elevated rounded-lg border border-surface-border" />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Transaction Deadline (minutes)</label>
            <input type="number" value={deadline} onChange={e => setDeadline(Number(e.target.value))} className="w-full mt-2 px-4 py-2 bg-surface-elevated rounded-lg border border-surface-border" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Expert Mode</div>
              <div className="text-sm text-muted-foreground">Allow high slippage trades</div>
            </div>
            <button onClick={() => setExpert(!expert)} className={`w-12 h-6 rounded-full transition-colors ${expert ? 'bg-primary-500' : 'bg-surface-elevated'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${expert ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>
        <div className="glass rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-bold">Interface</h2>
          <div className="flex items-center justify-between">
            <div><div className="font-medium">Dark Mode</div><div className="text-sm text-muted-foreground">Use dark theme</div></div>
            <button className="w-12 h-6 rounded-full bg-primary-500"><div className="w-5 h-5 rounded-full bg-white translate-x-6" /></button>
          </div>
          <div className="flex items-center justify-between">
            <div><div className="font-medium">Auto Router</div><div className="text-sm text-muted-foreground">Find best routes automatically</div></div>
            <button className="w-12 h-6 rounded-full bg-primary-500"><div className="w-5 h-5 rounded-full bg-white translate-x-6" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
