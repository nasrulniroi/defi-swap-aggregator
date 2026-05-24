'use client';
import { useState } from 'react';
interface TooltipProps { content: string; children: React.ReactNode; }
export function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-flex" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-surface-elevated border border-surface-border rounded-lg text-xs whitespace-nowrap animate-fade-in z-50">{content}</div>}
    </div>
  );
}
