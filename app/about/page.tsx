import Image from 'next/image';
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
    <div className="pt-14">

      {/* ── Profile hero: photo left, text right ── */}
      <section className="flex flex-col lg:flex-row border-b border-gray-200 min-h-[70vh]">
        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto">
          <Image
            src="/images/headshot.png"
            alt="Hank Linder"
            fill
            className="object-cover object-[center_15%]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 bg-white w-full lg:w-1/2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">About</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-950 mb-5 leading-tight">
            Hank Linder
          </h1>
          <div className="w-10 h-px bg-gray-400 mb-7" />
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm max-w-md">
            <p>
              Economics graduate from Clemson University currently working as a
              Credit Analyst at Consolidated Electrical Distributors (CED) in
              Greenville, SC. I apply financial analysis and risk assessment to
              support credit decisions across a national distribution portfolio.
            </p>
            <p>
              Prior to CED, I led AI optimization research with BMW Manufacturing,
              developing analytical frameworks that translated complex operational
              data into actionable strategy — including Monte Carlo simulations,
              risk-scoring models, and executive dashboards for evaluating
              third-party AI integration decisions.
            </p>
            <p>
              My approach is grounded in economic reasoning: careful attention to
              incentives, tradeoffs, and the downstream consequences of decisions.
              Fluent in Spanish.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/resume" variant="primary">Download Resume</Button>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-[#F7F6F3]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-10">Timeline</p>
          <div className="space-y-0 border-l border-gray-300 pl-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-gray-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">{item.period}</p>
                <h3 className="text-lg font-bold font-serif text-gray-950 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I Bring ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-white border-t border-gray-200">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">What I Bring</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-950 mb-5 leading-snug">
            A rigorous, economics-first<br className="hidden md:block" /> approach to financial analysis.
          </h2>
          <div className="w-10 h-px bg-gray-400 mb-8" />
          <ul className="space-y-4 text-gray-600 mb-10">
            {[
              'Credit risk assessment and financial statement analysis',
              'Quantitative modeling and Monte Carlo simulation',
              'Data-driven decision frameworks and executive reporting',
              'Economic reasoning applied to strategic business problems',
              'Cross-functional communication and stakeholder collaboration',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-sm leading-relaxed">
                <span className="mt-1.5 block w-4 h-px bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
      </section>

    </div>
  );
}
