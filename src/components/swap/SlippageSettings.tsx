'use client';
import { cn } from '@/lib/utils/format';

interface SlippageSettingsProps {
  slippage: number;
  onChange: (value: number) => void;
}

const presets = [0.1, 0.5, 1.0];

export function SlippageSettings({ slippage, onChange }: SlippageSettingsProps) {
  return (
    <div className="bg-surface-elevated rounded-xl p-4 space-y-3 animate-slide-down">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Slippage Tolerance</span>
        <span className="text-sm text-primary-400">{slippage}%</span>
      </div>
      <div className="flex gap-2">
        {presets.map(preset => (
          <button key={preset} onClick={() => onChange(preset)}
            className={cn("flex-1 py-2 rounded-lg text-sm font-medium transition-colors",
              slippage === preset ? "bg-primary-500 text-white" : "bg-surface-card hover:bg-surface-border text-muted-foreground")}>
            {preset}%
          </button>
        ))}
        <div className="flex-1 relative">
          <input type="number" value={slippage} onChange={e => onChange(Number(e.target.value))} step={0.1} min={0.1} max={50}
            className="w-full py-2 px-3 rounded-lg bg-surface-card text-sm outline-none border border-surface-border" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">%</span>
        </div>
      </div>
      {slippage > 5 && <p className="text-xs text-warning">⚠️ High slippage may result in unfavorable rates</p>}
    </div>
  );
}
