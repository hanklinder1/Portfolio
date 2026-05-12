import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover:border-gray-400 transition-colors duration-200' : '';
  return (
    <div className={`bg-white border border-gray-200 p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
