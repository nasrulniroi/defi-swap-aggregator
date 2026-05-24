'use client';
import { cn } from '@/lib/utils/format';
import { useState } from 'react';
interface Tab { id: string; label: string; content: React.ReactNode; }
interface TabsProps { tabs: Tab[]; defaultTab?: string; className?: string; }
export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  return (
    <div className={className}>
      <div className="flex gap-1 p-1 bg-surface-elevated rounded-xl mb-4">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActive(tab.id)}
            className={cn('flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              active === tab.id ? 'bg-primary-500 text-white' : 'text-muted-foreground hover:text-foreground')}>
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.find(t => t.id === active)?.content}
    </div>
  );
}
