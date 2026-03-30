import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300' : '';
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
