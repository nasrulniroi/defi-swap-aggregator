import { cn } from '@/lib/utils/format';
interface PriceImpactProps { impact: number; }
export function PriceImpact({ impact }: PriceImpactProps) {
  const level = impact < 0.5 ? 'low' : impact < 3 ? 'medium' : 'high';
  const colors = { low: 'text-success', medium: 'text-warning', high: 'text-error' };
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-surface-elevated rounded-xl">
      <span className="text-sm text-muted-foreground">Price Impact</span>
      <span className={cn("text-sm font-medium", colors[level])}>{impact.toFixed(2)}%</span>
    </div>
  );
}
