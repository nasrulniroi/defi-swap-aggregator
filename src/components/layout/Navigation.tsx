'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/format';
export function Navigation() {
  const pathname = usePathname();
  const items = [
    { href: '/', label: 'Swap' }, { href: '/pools', label: 'Pools' },
    { href: '/routes', label: 'Routes' }, { href: '/analytics', label: 'Analytics' },
  ];
  return (
    <nav className="flex gap-1">
      {items.map(item => (
        <Link key={item.href} href={item.href} className={cn('px-3 py-2 rounded-lg text-sm transition-colors',
          pathname === item.href ? 'text-primary-400' : 'text-muted-foreground hover:text-foreground')}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
