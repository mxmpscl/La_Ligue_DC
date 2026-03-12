import React from 'react';

export function Chip({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-ink/20 rounded-full text-ink/80 ${className}`}>
      {children}
    </span>
  );
}
