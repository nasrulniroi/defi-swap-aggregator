import { cn } from '@/lib/utils/format';
interface CardProps { children: React.ReactNode; className?: string; hover?: boolean; }
export function Card({ children, className, hover }: CardProps) {
  return <div className={cn('glass rounded-xl p-4', hover && 'glass-hover', className)}>{children}</div>;
}
interface StatsCardProps { label: string; value: string; change: string; positive: boolean; }
export function StatsCard({ label, value, change, positive }: StatsCardProps) {
  return (
    <Card className="text-center">
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className={cn('text-sm mt-1', positive ? 'text-success' : 'text-error')}>{change}</div>
    </Card>
  );
}
