import { cn } from '@/lib/utils/format';
import { ButtonHTMLAttributes, forwardRef } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white',
      secondary: 'bg-surface-elevated hover:bg-surface-card text-foreground border border-surface-border',
      ghost: 'hover:bg-surface-elevated text-muted-foreground hover:text-foreground',
      danger: 'bg-error/10 hover:bg-error/20 text-error',
    };
    const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
    return (
      <button ref={ref} className={cn('rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2',
        variants[variant], sizes[size], (disabled || loading) && 'opacity-50 cursor-not-allowed', className)}
        disabled={disabled || loading} {...props}>
        {loading && <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
