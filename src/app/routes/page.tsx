'use client';
import { RouteComparison } from '@/components/routes/RouteComparison';
import { MultiHopRoute } from '@/components/routes/MultiHopRoute';
import { GasChart } from '@/components/charts/GasChart';
export default function RoutesPage() {
  const hops = [
    { from: 'ETH', to: 'DAI', dex: 'Uniswap V3', amount: '0.6 ETH' },
    { from: 'DAI', to: 'USDC', dex: 'Curve', amount: '1,947 DAI' },
    { from: 'USDC', to: 'LINK', dex: 'SushiSwap', amount: '600 USDC' },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Route Finder</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <MultiHopRoute hops={hops} />
          <RouteComparison />
        </div>
        <GasChart />
      </div>
    </div>
  );
}
