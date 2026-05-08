import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  key?: React.Key;
}

export function Card({ className, padding = 'md', children, ...props }: CardProps) {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow',
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
