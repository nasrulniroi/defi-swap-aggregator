import { cn } from '@/lib/utils/format';
interface SwapButtonProps { isLoading: boolean; onClick: () => void; }
export function SwapButton({ isLoading, onClick }: SwapButtonProps) {
  return (
    <button onClick={onClick} disabled={isLoading}
      className={cn("w-full py-4 rounded-xl font-bold text-lg transition-all",
        isLoading ? "bg-primary-500/50 cursor-wait animate-pulse" : "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 shadow-glow hover:shadow-glow-lg active:scale-[0.98]")}>
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          Finding Best Route...
        </span>
      ) : 'Swap'}
    </button>
  );
}
