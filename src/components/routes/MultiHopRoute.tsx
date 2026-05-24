interface Hop { from: string; to: string; dex: string; amount: string; }
interface MultiHopRouteProps { hops: Hop[]; }
export function MultiHopRoute({ hops }: MultiHopRouteProps) {
  return (
    <div className="glass rounded-xl p-4">
      <h4 className="font-medium mb-3">Route Path</h4>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {hops.map((hop, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-2 rounded-lg bg-surface-elevated">
              <span className="font-bold text-sm">{hop.from}</span>
              <span className="text-xs text-muted-foreground block">{hop.dex}</span>
              <span className="text-xs text-primary-400">{hop.amount}</span>
            </span>
            {i < hops.length - 1 && <span className="text-lg text-muted-foreground">→</span>}
          </span>
        ))}
        <span className="text-lg text-muted-foreground">→</span>
        <span className="px-3 py-2 rounded-lg bg-primary-400/10 font-bold text-sm">{hops[hops.length - 1]?.to}</span>
      </div>
    </div>
  );
}
