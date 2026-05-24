'use client';
import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip as ChartTooltip, Legend, Filler,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartTooltip, Legend, Filler);

const generateData = (points: number) => {
  const labels = [];
  const data = [];
  let price = 3200;
  const now = new Date();
  for (let i = points; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 3600000);
    labels.push(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    price += (Math.random() - 0.48) * 30;
    data.push(price);
  }
  return { labels, data };
};

export function PriceChart() {
  const [timeframe, setTimeframe] = useState('24H');
  const { labels, data } = generateData(timeframe === '1H' ? 12 : timeframe === '24H' ? 24 : 168);
  
  const chartData = {
    labels,
    datasets: [{
      label: 'ETH/USDC',
      data,
      borderColor: '#818cf8',
      backgroundColor: 'rgba(129, 140, 248, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 4,
      borderWidth: 2,
    }],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a1a3e',
        borderColor: '#2d2d5e',
        borderWidth: 1,
        titleColor: '#e2e8f0',
        bodyColor: '#818cf8',
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      x: { display: true, grid: { color: 'rgba(45,45,94,0.3)' }, ticks: { color: '#64748b', maxTicksLimit: 8, font: { size: 11 } } },
      y: { display: true, grid: { color: 'rgba(45,45,94,0.3)' }, ticks: { color: '#64748b', font: { size: 11 } } },
    },
    interaction: { mode: 'index' as const, intersect: false },
  };

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">ETH/USDC Price</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">${data[data.length - 1]?.toFixed(2)}</span>
            <span className="text-success text-sm">+2.4%</span>
          </div>
        </div>
        <div className="flex gap-1 p-1 bg-surface-elevated rounded-lg">
          {['1H', '24H', '7D'].map(tf => (
            <button key={tf} onClick={() => setTimeframe(tf)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${timeframe === tf ? 'bg-primary-500 text-white' : 'text-muted-foreground hover:text-foreground'}`}>
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
