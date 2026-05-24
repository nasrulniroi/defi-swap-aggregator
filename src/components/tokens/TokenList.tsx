'use client';
import { TokenCard } from './TokenCard';
const MOCK_TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', price: 3245.67, change24h: 2.4, marketCap: '390B', volume24h: '15B', icon: '⟠' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', price: 67890.12, change24h: 1.8, marketCap: '10.5B', volume24h: '2.1B', icon: '₿' },
  { symbol: 'USDC', name: 'USD Coin', price: 1.0, change24h: 0.01, marketCap: '32B', volume24h: '8B', icon: '$' },
  { symbol: 'DAI', name: 'Dai', price: 1.0, change24h: -0.01, marketCap: '5.3B', volume24h: '800M', icon: '◈' },
  { symbol: 'UNI', name: 'Uniswap', price: 12.45, change24h: 5.6, marketCap: '7.4B', volume24h: '450M', icon: '🦄' },
  { symbol: 'LINK', name: 'Chainlink', price: 18.9, change24h: 3.2, marketCap: '11B', volume24h: '600M', icon: '⬡' },
  { symbol: 'AAVE', name: 'Aave', price: 145.3, change24h: -1.2, marketCap: '2.1B', volume24h: '180M', icon: '👻' },
  { symbol: 'COMP', name: 'Compound', price: 78.5, change24h: 4.1, marketCap: '600M', volume24h: '90M', icon: '🔶' },
];
export function TokenList() {
  return <div className="grid gap-3">{MOCK_TOKENS.map(t => <TokenCard key={t.symbol} {...t} />)}</div>;
}
