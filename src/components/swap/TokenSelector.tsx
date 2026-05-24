'use client';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils/format';

interface Token {
  symbol: string;
  name: string;
  balance: string;
  icon: string;
  price: number;
}

interface TokenSelectorProps {
  tokens: Token[];
  selected: Token;
  onSelect: (token: Token) => void;
  exclude?: Token;
}

export function TokenSelector({ tokens, selected, onSelect, exclude }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = tokens.filter(t =>
    t.symbol !== exclude?.symbol &&
    (t.symbol.toLowerCase().includes(search.toLowerCase()) || t.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border transition-colors">
        <span className="text-xl">{selected.icon}</span>
        <span className="font-bold">{selected.symbol}</span>
        <svg className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-surface-card border border-surface-border rounded-xl p-2 z-50 shadow-lg animate-slide-down">
          <input type="text" placeholder="Search tokens..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 bg-surface-elevated rounded-lg text-sm outline-none mb-2 border border-surface-border" />
          <div className="max-h-64 overflow-y-auto space-y-1">
            {filtered.map(token => (
              <button key={token.symbol} onClick={() => { onSelect(token); setIsOpen(false); setSearch(''); }}
                className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-elevated transition-colors text-left",
                  token.symbol === selected.symbol && "bg-primary-400/10")}>
                <span className="text-2xl">{token.icon}</span>
                <div className="flex-1">
                  <div className="font-semibold">{token.symbol}</div>
                  <div className="text-xs text-muted-foreground">{token.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">{token.balance}</div>
                  <div className="text-xs text-muted-foreground">${token.price.toLocaleString()}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
