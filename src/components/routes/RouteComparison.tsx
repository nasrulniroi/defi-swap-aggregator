import { RouteCard } from './RouteCard';
const MOCK_ROUTES = [
  { id: '1', steps: [{ dex: 'Uniswap V3', pair: 'ETH/USDC', percentage: 60 }, { dex: 'SushiSwap', pair: 'ETH/USDC', percentage: 25 }, { dex: 'Curve', pair: 'ETH/USDC', percentage: 15 }], outputAmount: '3,245.67 USDC', gasEstimate: '$2.45', priceImpact: '0.12%', savings: '$12.30', optimal: true },
  { id: '2', steps: [{ dex: 'Uniswap V3', pair: 'ETH/USDC', percentage: 100 }], outputAmount: '3,233.37 USDC', gasEstimate: '$1.80', priceImpact: '0.08%', savings: '$0', optimal: false },
  { id: '3', steps: [{ dex: 'Curve', pair: 'ETH/USDC', percentage: 70 }, { dex: '1inch', pair: 'ETH/USDC', percentage: 30 }], outputAmount: '3,240.12 USDC', gasEstimate: '$3.10', priceImpact: '0.15%', savings: '$6.75', optimal: false },
];
export function RouteComparison() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">Route Comparison</h3>
      <div className="space-y-4">{MOCK_ROUTES.map(r => <RouteCard key={r.id} {...r} />)}</div>
    </div>
  );
}
