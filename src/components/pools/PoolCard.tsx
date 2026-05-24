import { Badge } from '@/components/common/Badge';
interface PoolCardProps { id: string; name: string; dex: string; tvl: string; apr: string; volume24h: string; fee: string; }
export function PoolCard({ name, dex, tvl, apr, volume24h, fee }: PoolCardProps) {
  return (
    <div className="glass glass-hover rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-400/10 flex items-center justify-center text-primary-400 font-bold">💧</div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="flex items-center gap-2">
            <Badge variant="info">{dex}</Badge>
            <span className="text-xs text-muted-foreground">Fee: {fee}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-6 text-sm">
        <div><div className="text-muted-foreground">TVL</div><div className="font-bold">{tvl}</div></div>
        <div><div className="text-muted-foreground">APR</div><div className="font-bold text-success">{apr}</div></div>
        <div><div className="text-muted-foreground">24h Vol</div><div className="font-bold">{volume24h}</div></div>
      </div>
      <button className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 font-medium hover:bg-primary-500/20 transition-colors">Add Liquidity</button>
    </div>
  );
}
