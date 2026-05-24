'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export function GasChart() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const data = {
    labels,
    datasets: [{
      label: 'Gas Price (Gwei)',
      data: labels.map(() => Math.random() * 50 + 10),
      borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)',
      fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2,
    }],
  };
  const options = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { grid: { color: 'rgba(45,45,94,0.3)' }, ticks: { color: '#64748b' } },
    },
  };
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">Gas Prices</h3>
      <div className="h-48"><Line data={data} options={options} /></div>
    </div>
  );
}
