import { cn } from '@/lib/utils/format';
interface TokenPriceProps { symbol: string; price: number; change: number; }
export function TokenPrice({ symbol, price, change }: TokenPriceProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-medium">{symbol}</span>
      <div className="text-right">
        <span className="font-bold">${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <span className={cn('ml-2 text-sm', change >= 0 ? 'text-success' : 'text-error')}>{change >= 0 ? '+' : ''}{change}%</span>
      </div>
    </div>
  );
}
