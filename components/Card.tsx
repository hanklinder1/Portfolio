import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover:border-cyan-500/30 hover:glow-sm hover:-translate-y-1 transition-all duration-300' : '';
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
