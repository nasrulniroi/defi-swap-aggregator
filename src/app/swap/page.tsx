'use client';
import { SwapCard } from '@/components/swap/SwapCard';
export default function SwapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Swap Tokens</h1>
      <SwapCard />
    </div>
  );
}
