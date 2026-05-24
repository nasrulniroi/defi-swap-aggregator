'use client';
import { useState } from 'react';
import Link from 'next/link';
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Swap' }, { href: '/pools', label: 'Pools' },
    { href: '/routes', label: 'Routes' }, { href: '/analytics', label: 'Analytics' },
  ];
  return (
    <>
      <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-surface-elevated md:hidden">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-surface-card border-b border-surface-border p-4 md:hidden">
          {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">{l.label}</Link>)}
        </div>
      )}
    </>
  );
}
