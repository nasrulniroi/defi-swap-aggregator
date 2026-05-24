'use client';
import { PoolCard } from './PoolCard';
const MOCK_POOLS = [
  { id: '1', name: 'ETH/USDC', dex: 'Uniswap V3', tvl: '$245M', apr: '12.5%', volume24h: '$45M', fee: '0.3%' },
  { id: '2', name: 'WBTC/ETH', dex: 'Uniswap V3', tvl: '$180M', apr: '8.2%', volume24h: '$32M', fee: '0.3%' },
  { id: '3', name: 'USDC/DAI', dex: 'Curve', tvl: '$520M', apr: '4.1%', volume24h: '$120M', fee: '0.04%' },
  { id: '4', name: 'ETH/stETH', dex: 'Curve', tvl: '$890M', apr: '3.8%', volume24h: '$67M', fee: '0.04%' },
  { id: '5', name: 'LINK/ETH', dex: 'SushiSwap', tvl: '$45M', apr: '18.5%', volume24h: '$8M', fee: '0.25%' },
  { id: '6', name: 'UNI/ETH', dex: 'Uniswap V2', tvl: '$92M', apr: '15.2%', volume24h: '$12M', fee: '0.3%' },
  { id: '7', name: 'AAVE/ETH', dex: 'SushiSwap', tvl: '$28M', apr: '22.1%', volume24h: '$5M', fee: '0.25%' },
  { id: '8', name: 'DAI/USDT', dex: 'Curve', tvl: '$340M', apr: '3.5%', volume24h: '$89M', fee: '0.04%' },
];
export function PoolList() {
  return (
    <div className="grid gap-4">
      {MOCK_POOLS.map(pool => <PoolCard key={pool.id} {...pool} />)}
    </div>
  );
}
