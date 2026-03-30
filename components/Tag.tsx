interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full ${className}`}>
      {children}
    </span>
  );
}
