'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/format';
import { SwapCard } from '@/components/swap/SwapCard';
import { PriceChart } from '@/components/charts/PriceChart';
import { RouteComparison } from '@/components/routes/RouteComparison';
import { StatsCard } from '@/components/common/Card';

const stats = [
  { label: 'Total Volume', value: '$2.4B', change: '+12.5%', positive: true },
  { label: 'Total Swaps', value: '1.2M', change: '+8.3%', positive: true },
  { label: 'Avg Savings', value: '$47.20', change: '+3.1%', positive: true },
  { label: 'Active Pools', value: '2,847', change: '+156', positive: true },
];

const featuredTokens = [
  { symbol: 'ETH', name: 'Ethereum', price: '$3,245.67', change: '+2.4%', icon: '⟠' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', price: '$67,890.12', change: '+1.8%', icon: '₿' },
  { symbol: 'USDC', name: 'USD Coin', price: '$1.00', change: '+0.01%', icon: '$' },
  { symbol: 'DAI', name: 'Dai', price: '$1.00', change: '-0.01%', icon: '◈' },
  { symbol: 'UNI', name: 'Uniswap', price: '$12.45', change: '+5.6%', icon: '🦄' },
  { symbol: 'LINK', name: 'Chainlink', price: '$18.90', change: '+3.2%', icon: '⬡' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gradient">Best Swap Rates</span>
          <br />
          <span className="text-foreground">Across All DEXes</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find optimal routes across Uniswap, SushiSwap, Curve, and 1inch. Save on gas, minimize slippage, and get the best prices.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </section>

      {/* Main Content */}
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Swap Interface */}
        <div className="lg:col-span-2">
          <SwapCard />
        </div>

        {/* Charts & Routes */}
        <div className="lg:col-span-3 space-y-8">
          <PriceChart />
          <RouteComparison />
        </div>
      </div>

      {/* Featured Tokens */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredTokens.map((token) => (
            <Link
              key={token.symbol}
              href={`/tokens/${token.symbol.toLowerCase()}`}
              className="glass glass-hover rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{token.icon}</div>
              <div className="font-semibold">{token.symbol}</div>
              <div className="text-sm text-muted-foreground">{token.name}</div>
              <div className="text-lg font-bold mt-2">{token.price}</div>
              <div
                className={cn(
                  'text-sm',
                  token.change.startsWith('+') ? 'text-success' : 'text-error'
                )}
              >
                {token.change}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Supported DEXes */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Supported DEX Protocols</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['Uniswap', 'SushiSwap', 'Curve', '1inch', 'Balancer'].map((dex) => (
            <div key={dex} className="glass rounded-xl px-6 py-4">
              <div className="text-xl font-bold">{dex}</div>
              <div className="text-sm text-muted-foreground">Integrated</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
