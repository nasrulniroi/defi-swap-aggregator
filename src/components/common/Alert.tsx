import { cn } from '@/lib/utils/format';
interface AlertProps { children: React.ReactNode; variant?: 'info' | 'success' | 'warning' | 'error'; className?: string; }
export function Alert({ children, variant = 'info', className }: AlertProps) {
  const variants = {
    info: 'bg-primary-400/10 border-primary-400/30 text-primary-400', success: 'bg-success/10 border-success/30 text-success',
    warning: 'bg-warning/10 border-warning/30 text-warning', error: 'bg-error/10 border-error/30 text-error',
  };
  return <div className={cn('px-4 py-3 rounded-xl border text-sm', variants[variant], className)}>{children}</div>;
}
