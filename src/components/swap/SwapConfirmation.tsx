'use client';
import { useState } from 'react';
interface SwapConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount: string;
  priceImpact: number;
  slippage: number;
  gasEstimate: string;
}
export function SwapConfirmation({ isOpen, onClose, onConfirm, fromToken, toToken, fromAmount, toAmount, priceImpact, slippage, gasEstimate }: SwapConfirmationProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="glass rounded-2xl p-6 w-full max-w-md animate-slide-up">
        <h3 className="text-xl font-bold mb-4">Confirm Swap</h3>
        <div className="space-y-3">
          <div className="flex justify-between"><span className="text-muted-foreground">From</span><span>{fromAmount} {fromToken}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">To</span><span>{toAmount} {toToken}</span></div>
          <div className="border-t border-surface-border pt-3 space-y-2">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Price Impact</span><span>{priceImpact}%</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Slippage</span><span>{slippage}%</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Gas Est.</span><span>{gasEstimate}</span></div>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-surface-elevated font-medium">Cancel</button>
          <button onClick={onConfirm} className="flex-1 py-3 rounded-xl bg-primary-500 font-bold">Confirm</button>
        </div>
      </div>
    </div>
  );
}
