'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

export function TVLChart() {
  const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  let tvl = 2000000000;
  const data = {
    labels,
    datasets: [{
      label: 'TVL (USD)',
      data: labels.map(() => { tvl += (Math.random() - 0.45) * 50000000; return tvl; }),
      borderColor: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2,
    }],
  };
  const options = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { grid: { color: 'rgba(45,45,94,0.3)' }, ticks: { color: '#64748b', callback: (v: any) => `$${(v/1e9).toFixed(1)}B` } },
    },
  };
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">Total Value Locked</h3>
      <div className="h-48"><Line data={data} options={options} /></div>
    </div>
  );
}
