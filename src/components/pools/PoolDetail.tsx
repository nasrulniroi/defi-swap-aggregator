interface PoolDetailProps { poolId: string; }
export function PoolDetail({ poolId }: PoolDetailProps) {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h3 className="text-xl font-bold">Pool Details #{poolId}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-elevated rounded-lg p-4"><div className="text-sm text-muted-foreground">Total Value Locked</div><div className="text-xl font-bold">$245.8M</div></div>
        <div className="bg-surface-elevated rounded-lg p-4"><div className="text-sm text-muted-foreground">24h Volume</div><div className="text-xl font-bold">$45.2M</div></div>
        <div className="bg-surface-elevated rounded-lg p-4"><div className="text-sm text-muted-foreground">APR</div><div className="text-xl font-bold text-success">12.5%</div></div>
        <div className="bg-surface-elevated rounded-lg p-4"><div className="text-sm text-muted-foreground">Fee Tier</div><div className="text-xl font-bold">0.3%</div></div>
      </div>
    </div>
  );
}
