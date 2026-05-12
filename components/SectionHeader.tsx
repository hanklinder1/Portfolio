interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-950 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 text-base max-w-2xl leading-relaxed">{subtitle}</p>}
      <div className="mt-5 h-px w-12 bg-gray-400" />
    </div>
  );
}
