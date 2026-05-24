interface GasEstimateProps { gasUsd: number; }
export function GasEstimate({ gasUsd }: GasEstimateProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-surface-elevated rounded-xl">
      <span className="text-sm text-muted-foreground">Estimated Gas</span>
      <span className="text-sm font-medium">${gasUsd.toFixed(2)}</span>
    </div>
  );
}
