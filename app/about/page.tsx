import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function AboutPage() {
  const timeline = [
    {
      period: '2022 – 2026',
      title: 'Clemson University',
      description: 'B.A. Economics, Minor in Spanish Studies. GPA: 3.50. Focus on quantitative analysis, AI systems, and economic modeling.',
    },
    {
      period: 'Fall 2025 – Present',
      title: 'BMW Research Partnership',
      description: 'Built risk-adjusted decision frameworks and Monte Carlo simulations for manufacturing AI integration.',
    },
    {
      period: '2025',
      title: 'Carteroo & BarFlow',
      description: 'Launched two full-stack products independently — a nationwide golf cart marketplace and a real-time nightlife coordination app.',
    },
    {
      period: 'Summer 2025',
      title: 'Study Abroad — Spain',
      description: 'Completed upper-level Spanish coursework, strengthening professional fluency and cross-cultural communication.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
      <SectionHeader title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="relative w-full aspect-square max-w-md">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-20 blur-lg" />
          <Image
            src="/images/headshot.jpg"
            alt="Hank Linder"
            fill
            className="rounded-lg object-cover relative"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hank Linder</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
            <p>
              Economics student at Clemson specializing in AI-driven decision systems, economic modeling, and applied simulation. I build things — from Monte Carlo models and risk frameworks to full-stack marketplaces and real-time apps.
            </p>
            <p>
              My approach combines economic reasoning with hands-on engineering. I think about incentives, trade-offs, and unintended consequences, then build the systems that operationalize those insights.
            </p>
            <p>
              I&apos;ve shipped production applications with real payment infrastructure, built research tools for BMW&apos;s manufacturing operations, and designed AI-powered retrieval systems — all independently, using AI-assisted development.
            </p>
            <p>
              Fluent in Spanish with study abroad experience in Spain. Interested in opportunities at the intersection of economics, data, and product.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/resume" variant="primary">Download Resume</Button>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Timeline</h2>
        <div className="space-y-6 border-l border-gray-200 pl-6">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
              <p className="text-blue-600 text-sm font-mono mb-1">{item.period}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Card hover={false}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What I&apos;m Looking For</h2>
        <div className="space-y-3 text-gray-500 text-sm">
          <p>Roles where I can apply economics, data, and product thinking to meaningful problems:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span>Quantitative analysis and economic modeling</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span>Data-driven product development</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span>AI system design and deployment</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span>Strategic decision-making with data</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#x25B8;</span>Cross-functional collaboration</li>
          </ul>
        </div>
        <div className="mt-6">
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
      </Card>
    </div>
  );
}
