'use client';
import { useState } from 'react';
import { TokenSelector } from './TokenSelector';
import { SlippageSettings } from './SlippageSettings';
import { PriceImpact } from './PriceImpact';
import { RouteDisplay } from './RouteDisplay';
import { GasEstimate } from './GasEstimate';
import { SwapButton } from './SwapButton';
import { cn } from '@/lib/utils/format';

const MOCK_TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', balance: '1.234', icon: '⟠', price: 3245.67 },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', balance: '0.05', icon: '₿', price: 67890.12 },
  { symbol: 'USDC', name: 'USD Coin', balance: '1500.00', icon: '$', price: 1.0 },
  { symbol: 'DAI', name: 'Dai', balance: '2000.00', icon: '◈', price: 1.0 },
  { symbol: 'UNI', name: 'Uniswap', balance: '100.00', icon: '🦄', price: 12.45 },
  { symbol: 'LINK', name: 'Chainlink', balance: '50.00', icon: '⬡', price: 18.90 },
  { symbol: 'AAVE', name: 'Aave', balance: '10.00', icon: '👻', price: 145.30 },
  { symbol: 'COMP', name: 'Compound', balance: '5.00', icon: '🔶', price: 78.50 },
];

export function SwapCard() {
  const [fromToken, setFromToken] = useState(MOCK_TOKENS[0]);
  const [toToken, setToToken] = useState(MOCK_TOKENS[2]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [slippage, setSlippage] = useState(0.5);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleAmountChange = (value: string) => {
    setFromAmount(value);
    if (value && !isNaN(Number(value))) {
      const rate = fromToken.price / toToken.price;
      setToAmount((Number(value) * rate).toFixed(6));
    } else {
      setToAmount('');
    }
  };

  return (
    <div className="glass rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Swap</h2>
        <button onClick={() => setShowSettings(!showSettings)} className="p-2 rounded-lg hover:bg-surface-elevated transition-colors">
          ⚙️
        </button>
      </div>

      {showSettings && <SlippageSettings slippage={slippage} onChange={setSlippage} />}

      {/* From Token */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">You Pay</label>
        <div className="bg-surface-elevated rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <input
              type="text"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="bg-transparent text-3xl font-bold outline-none w-full"
            />
            <TokenSelector tokens={MOCK_TOKENS} selected={fromToken} onSelect={setFromToken} exclude={toToken} />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Balance: {fromToken.balance} {fromToken.symbol}</span>
            <span>${fromAmount ? (Number(fromAmount) * fromToken.price).toFixed(2) : '0.00'}</span>
          </div>
        </div>
      </div>

      {/* Swap Direction */}
      <div className="flex justify-center -my-2">
        <button onClick={handleSwapTokens} className="p-2 rounded-xl bg-surface-elevated hover:bg-surface-card border border-surface-border transition-all hover:border-primary-400/30">
          ⇅
        </button>
      </div>

      {/* To Token */}
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">You Receive</label>
        <div className="bg-surface-elevated rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <input
              type="text"
              placeholder="0.0"
              value={toAmount}
              readOnly
              className="bg-transparent text-3xl font-bold outline-none w-full"
            />
            <TokenSelector tokens={MOCK_TOKENS} selected={toToken} onSelect={setToToken} exclude={fromToken} />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Balance: {toToken.balance} {toToken.symbol}</span>
            <span>${toAmount ? (Number(toAmount) * toToken.price).toFixed(2) : '0.00'}</span>
          </div>
        </div>
      </div>

      {/* Route Info */}
      {fromAmount && Number(fromAmount) > 0 && (
        <div className="space-y-2 animate-fade-in">
          <RouteDisplay from={fromToken.symbol} to={toToken.symbol} amount={fromAmount} />
          <PriceImpact impact={0.12} />
          <GasEstimate gasUsd={2.45} />
        </div>
      )}

      <SwapButton isLoading={isLoading} onClick={() => setIsLoading(true)} />
    </div>
  );
}
