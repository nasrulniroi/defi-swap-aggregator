'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function VolumeChart() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = {
    labels,
    datasets: [{
      label: 'Volume (USD)',
      data: labels.map(() => Math.random() * 1000000 + 200000),
      backgroundColor: 'rgba(129, 140, 248, 0.6)',
      borderRadius: 4,
    }],
  };
  const options = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#64748b', maxTicksLimit: 8 } },
      y: { grid: { color: 'rgba(45,45,94,0.3)' }, ticks: { color: '#64748b', callback: (v: any) => `$${(v/1000).toFixed(0)}k` } },
    },
  };
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">24h Volume</h3>
      <div className="h-48"><Bar data={data} options={options} /></div>
    </div>
  );
}
