'use client';
import { PoolList } from '@/components/pools/PoolList';
import { TVLChart } from '@/components/charts/TVLChart';
export default function PoolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Liquidity Pools</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2"><PoolList /></div>
        <div className="space-y-6"><TVLChart /></div>
      </div>
    </div>
  );
}
