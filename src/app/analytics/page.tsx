'use client';
import { PriceChart } from '@/components/charts/PriceChart';
import { VolumeChart } from '@/components/charts/VolumeChart';
import { TVLChart } from '@/components/charts/TVLChart';
import { GasChart } from '@/components/charts/GasChart';
import { StatsCard } from '@/components/common/Card';
export default function AnalyticsPage() {
  const stats = [
    { label: 'Total Volume', value: '$2.4B', change: '+12.5%', positive: true },
    { label: 'Unique Traders', value: '45.2K', change: '+8.3%', positive: true },
    { label: 'Avg Trade Size', value: '$1,250', change: '-2.1%', positive: false },
    { label: 'Total Pools', value: '2,847', change: '+156', positive: true },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(s => <StatsCard key={s.label} {...s} />)}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <PriceChart />
        <VolumeChart />
        <TVLChart />
        <GasChart />
      </div>
    </div>
  );
}
