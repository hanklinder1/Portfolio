interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-navy-900 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 text-lg max-w-2xl">{subtitle}</p>}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
    </div>
  );
}
