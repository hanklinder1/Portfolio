import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  external = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950';

  const variantClasses = {
    primary: 'bg-cyan-500 text-gray-950 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 focus:ring-cyan-500',
    secondary: 'bg-white/10 text-gray-100 hover:bg-white/20 hover:shadow-md hover:-translate-y-0.5 focus:ring-gray-500 border border-white/10',
    outline: 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 focus:ring-cyan-500',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
