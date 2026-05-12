import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function AboutPage() {
  const timeline = [
    {
      period: '2022 – 2026',
      title: 'Clemson University',
      description: 'B.A. Economics, Minor in Spanish Studies. GPA: 3.50. Built a foundation in quantitative analysis, economic modeling, and data-driven decision making.',
    },
    {
      period: '2025 – 2026',
      title: 'BMW Manufacturing Research Partnership',
      description: 'Selected for a competitive, interdisciplinary research initiative. Developed AI-driven analytical frameworks, Monte Carlo simulations, risk-scoring models, and executive dashboards to support manufacturing data strategy at BMW.',
    },
    {
      period: 'May 2026 – Present',
      title: 'Credit Analyst — Consolidated Electrical Distributors (CED)',
      description: 'Full-time role in Greenville, SC. Applying financial analysis and credit risk assessment to support credit decisions across a national distribution portfolio.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
      <SectionHeader title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="relative w-full aspect-square max-w-md">
          <div className="absolute -inset-1 bg-gradient-to-br from-navy-800 to-gold-400 rounded opacity-15 blur-lg" />
          <Image
            src="/images/headshot.png"
            alt="Hank Linder"
            fill
            className="rounded object-cover object-top relative"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-serif text-navy-900 mb-4">Hank Linder</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>
              Economics graduate from Clemson University currently working as a Credit Analyst at Consolidated Electrical Distributors (CED) in Greenville, SC. I apply financial analysis and risk assessment to support credit decisions across a national distribution portfolio.
            </p>
            <p>
              Prior to CED, I led AI optimization research with BMW Manufacturing, developing analytical frameworks that translated complex operational data into actionable strategy — including Monte Carlo simulations, risk-scoring models, and executive dashboards for evaluating third-party AI integration decisions.
            </p>
            <p>
              My approach is grounded in economic reasoning: I think carefully about incentives, tradeoffs, and the downstream consequences of decisions, then build the analytical tools that make those insights actionable.
            </p>
            <p>
              Fluent in Spanish with study abroad experience in Spain.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/resume" variant="primary">Download Resume</Button>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold font-serif text-navy-900 mb-8">Timeline</h2>
        <div className="space-y-6 border-l border-gray-200 pl-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500" />
              <p className="text-gold-600 text-sm font-medium mb-1">{item.period}</p>
              <h3 className="text-lg font-semibold font-serif text-navy-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Card hover={false}>
        <h2 className="text-2xl font-bold font-serif text-navy-900 mb-4">What I Bring</h2>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>A rigorous, economics-first approach to financial analysis and risk assessment:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-gold-500 mt-0.5">&#x25B8;</span>Credit risk assessment and financial statement analysis</li>
            <li className="flex items-start gap-2"><span className="text-gold-500 mt-0.5">&#x25B8;</span>Quantitative modeling and Monte Carlo simulation</li>
            <li className="flex items-start gap-2"><span className="text-gold-500 mt-0.5">&#x25B8;</span>Data-driven decision frameworks and executive reporting</li>
            <li className="flex items-start gap-2"><span className="text-gold-500 mt-0.5">&#x25B8;</span>Economic reasoning applied to strategic business problems</li>
            <li className="flex items-start gap-2"><span className="text-gold-500 mt-0.5">&#x25B8;</span>Cross-functional communication and stakeholder collaboration</li>
          </ul>
        </div>
        <div className="mt-6">
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
      </Card>
    </div>
  );
}
