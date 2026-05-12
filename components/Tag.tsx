interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium text-gray-500 border border-gray-300 ${className}`}>
      {children}
    </span>
  );
}
