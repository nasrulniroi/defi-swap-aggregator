import { cn } from '@/lib/utils/format';
interface BadgeProps { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' | 'info'; className?: string; }
export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface-elevated text-foreground', success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning', error: 'bg-error/10 text-error', info: 'bg-primary-400/10 text-primary-400',
  };
  return <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>{children}</span>;
}
