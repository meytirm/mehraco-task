import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
}

export function Button({
  children,
  variant = 'solid',
  className = '',
  ...props
}: Readonly<ButtonProps>) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-4 py-2.5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border';

  const variantClasses = {
    solid: 'bg-foreground text-white hover:bg-foreground/85 border-transparent',
    outline:
      ' border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-white',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
