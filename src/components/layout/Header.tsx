'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils/format';
const navItems = [
  { href: '/', label: 'Swap' },
  { href: '/pools', label: 'Pools' },
  { href: '/routes', label: 'Routes' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/tokens', label: 'Tokens' },
  { href: '/history', label: 'History' },
  { href: '/settings', label: 'Settings' },
];
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-surface-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center font-bold text-white">S</div>
          <span className="text-xl font-bold text-gradient">SwapAgg</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={cn('px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              pathname === item.href ? 'bg-primary-400/10 text-primary-400' : 'text-muted-foreground hover:text-foreground hover:bg-surface-elevated')}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors">
            Connect Wallet
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-surface-elevated">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border p-4 space-y-2">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
              className={cn('block px-3 py-2 rounded-lg text-sm font-medium', pathname === item.href ? 'bg-primary-400/10 text-primary-400' : 'text-muted-foreground')}>
              {item.label}
            </Link>
          ))}
          <button className="w-full px-4 py-2 rounded-lg bg-primary-500 text-white font-medium mt-2">Connect Wallet</button>
        </div>
      )}
    </header>
  );
}
