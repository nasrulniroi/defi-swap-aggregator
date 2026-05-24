'use client';
import { Badge } from '@/components/common/Badge';
const HISTORY = [
  { id: '1', from: 'ETH', to: 'USDC', amount: '1.5 ETH', received: '4,868.50 USDC', route: 'Uniswap V3', time: '2 min ago', status: 'success', hash: '0xabc...def' },
  { id: '2', from: 'USDC', to: 'DAI', amount: '10,000 USDC', received: '9,998.50 DAI', route: 'Curve', time: '1 hour ago', status: 'success', hash: '0x123...456' },
  { id: '3', from: 'WBTC', to: 'ETH', amount: '0.1 WBTC', received: '2.09 ETH', route: 'SushiSwap', time: '3 hours ago', status: 'success', hash: '0x789...012' },
  { id: '4', from: 'UNI', to: 'ETH', amount: '500 UNI', received: '1.92 ETH', route: 'Uniswap V2', time: 'Yesterday', status: 'failed', hash: '0xdef...345' },
];
export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Swap History</h1>
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">Time</th>
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">From</th>
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">To</th>
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">Route</th>
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">Status</th>
                <th className="text-left px-4 py-3 text-sm text-muted-foreground font-medium">Tx</th>
              </tr>
            </thead>
            <tbody>
              {HISTORY.map(tx => (
                <tr key={tx.id} className="border-b border-surface-border hover:bg-surface-elevated/50 transition-colors">
                  <td className="px-4 py-3 text-sm">{tx.time}</td>
                  <td className="px-4 py-3 text-sm">{tx.amount}</td>
                  <td className="px-4 py-3 text-sm">{tx.received}</td>
                  <td className="px-4 py-3 text-sm"><Badge variant="info">{tx.route}</Badge></td>
                  <td className="px-4 py-3 text-sm"><Badge variant={tx.status === 'success' ? 'success' : 'error'}>{tx.status}</Badge></td>
                  <td className="px-4 py-3 text-sm text-primary-400 hover:underline cursor-pointer">{tx.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
