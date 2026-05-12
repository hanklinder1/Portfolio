interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium bg-navy-50 text-navy-800 border border-navy-100 rounded ${className}`}>
      {children}
    </span>
  );
}
