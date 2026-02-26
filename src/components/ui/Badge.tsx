import type { ReactNode } from 'react';

export function Badge({ variant = 'default', children }: Readonly<Props>) {
  const variants = {
    default: 'bg-surface text-foreground',
    success: 'bg-green-100 text-green-600',
    danger: 'bg-red-100 text-red-600',
  };
  return (
    <div
      className={`md:px-4 px-2 py-1 rounded-xl inline-block md:text-base text-xs ${variants[variant]}`}
    >
      <span>{children}</span>
    </div>
  );
}

interface Props {
  children: ReactNode;
  variant?: 'default' | 'success' | 'danger';
}
