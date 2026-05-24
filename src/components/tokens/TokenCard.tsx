import { cn } from '@/lib/utils/format';
interface TokenCardProps { symbol: string; name: string; price: number; change24h: number; marketCap: string; volume24h: string; icon: string; }
export function TokenCard({ symbol, name, price, change24h, marketCap, volume24h, icon }: TokenCardProps) {
  return (
    <div className="glass glass-hover rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center text-xl">{icon}</div>
        <div><div className="font-bold">{symbol}</div><div className="text-sm text-muted-foreground">{name}</div></div>
      </div>
      <div className="text-right">
        <div className="font-bold">${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div className={cn('text-sm', change24h >= 0 ? 'text-success' : 'text-error')}>{change24h >= 0 ? '+' : ''}{change24h}%</div>
      </div>
      <div className="hidden md:block text-right">
        <div className="text-sm text-muted-foreground">MCap</div><div className="text-sm font-medium">${marketCap}</div>
      </div>
      <div className="hidden md:block text-right">
        <div className="text-sm text-muted-foreground">Vol 24h</div><div className="text-sm font-medium">${volume24h}</div>
      </div>
    </div>
  );
}
