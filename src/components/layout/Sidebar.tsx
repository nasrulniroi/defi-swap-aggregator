'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/format';
const items = [
  { href: '/', label: 'Swap', icon: '⇄' },
  { href: '/pools', label: 'Pools', icon: '💧' },
  { href: '/routes', label: 'Routes', icon: '🛤️' },
  { href: '/analytics', label: 'Analytics', icon: '📊' },
  { href: '/tokens', label: 'Tokens', icon: '🪙' },
  { href: '/history', label: 'History', icon: '📜' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];
export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-surface-border p-4">
      {items.map(item => (
        <Link key={item.href} href={item.href} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-sm font-medium transition-colors',
          pathname === item.href ? 'bg-primary-400/10 text-primary-400' : 'text-muted-foreground hover:text-foreground')}>
          <span>{item.icon}</span>{item.label}
        </Link>
      ))}
    </aside>
  );
}
