import { cn } from '@/lib/utils/format';
import { InputHTMLAttributes, forwardRef } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; error?: string; }
export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, ...props }, ref) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium text-muted-foreground">{label}</label>}
    <input ref={ref} className={cn('w-full px-4 py-3 bg-surface-elevated rounded-xl text-foreground outline-none border border-surface-border focus:border-primary-400 transition-colors',
      error && 'border-error', className)} {...props} />
    {error && <p className="text-xs text-error">{error}</p>}
  </div>
));
Input.displayName = 'Input';
