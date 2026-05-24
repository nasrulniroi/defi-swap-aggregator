import { cn } from '@/lib/utils/format';
interface SelectOption { value: string; label: string; }
interface SelectProps { options: SelectOption[]; value: string; onChange: (v: string) => void; label?: string; className?: string; }
export function Select({ options, value, onChange, label, className }: SelectProps) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium text-muted-foreground">{label}</label>}
      <select value={value} onChange={e => onChange(e.target.value)}
        className={cn('w-full px-4 py-3 bg-surface-elevated rounded-xl text-foreground outline-none border border-surface-border focus:border-primary-400', className)}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
