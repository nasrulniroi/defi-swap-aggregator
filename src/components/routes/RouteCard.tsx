import { Badge } from '@/components/common/Badge';
interface RouteStep { dex: string; pair: string; percentage: number; }
interface RouteCardProps { id: string; steps: RouteStep[]; outputAmount: string; gasEstimate: string; priceImpact: string; savings: string; optimal: boolean; }
export function RouteCard({ steps, outputAmount, gasEstimate, priceImpact, savings, optimal }: RouteCardProps) {
  return (
    <div className={`glass rounded-xl p-4 ${optimal ? 'border-primary-400/50 shadow-glow' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {optimal && <Badge variant="success">Best Route</Badge>}
          <Badge variant="info">Multi-hop</Badge>
        </div>
        <span className="text-sm text-success">Save {savings}</span>
      </div>
      <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar">
        {steps.map((step, i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-surface-elevated text-sm">
              <span className="text-primary-400 font-medium">{step.dex}</span>
              <span className="text-muted-foreground ml-1">({step.percentage}%)</span>
            </span>
            {i < steps.length - 1 && <span className="text-muted-foreground">→</span>}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div><span className="text-muted-foreground">Output:</span><br /><span className="font-bold">{outputAmount}</span></div>
        <div><span className="text-muted-foreground">Gas:</span><br /><span className="font-medium">{gasEstimate}</span></div>
        <div><span className="text-muted-foreground">Impact:</span><br /><span className="font-medium">{priceImpact}</span></div>
      </div>
    </div>
  );
}
