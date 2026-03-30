interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100 rounded-full ${className}`}>
      {children}
    </span>
  );
}
