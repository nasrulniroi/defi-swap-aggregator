interface RouteDisplayProps { from: string; to: string; amount: string; }
export function RouteDisplay({ from, to, amount }: RouteDisplayProps) {
  const routes = [
    { dex: 'Uniswap V3', percentage: 60, output: (Number(amount) * 0.6 * 3245.67).toFixed(4) },
    { dex: 'SushiSwap', percentage: 25, output: (Number(amount) * 0.25 * 3240).toFixed(4) },
    { dex: 'Curve', percentage: 15, output: (Number(amount) * 0.15 * 3248).toFixed(4) },
  ];
  return (
    <div className="bg-surface-elevated rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Best Route</span>
        <span className="text-xs text-success">Optimal</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 rounded bg-surface-card text-xs font-bold">{from}</span>
        <span className="text-muted-foreground">→</span>
        {routes.map((r, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="px-2 py-1 rounded bg-primary-400/10 text-xs text-primary-400">{r.dex} ({r.percentage}%)</span>
            {i < routes.length - 1 && <span className="text-muted-foreground">→</span>}
          </span>
        ))}
        <span className="text-muted-foreground">→</span>
        <span className="px-2 py-1 rounded bg-surface-card text-xs font-bold">{to}</span>
      </div>
    </div>
  );
}
