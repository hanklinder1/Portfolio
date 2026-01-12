import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function AboutPage() {
  const timeline = [
    {
      period: 'Clemson University',
      title: 'Economics & Data Analytics',
      description: 'Studied economics with a focus on quantitative analysis and data-driven decision making.',
    },
    {
      period: 'AI & Data Work',
      title: 'Economic Modeling & Analytics',
      description: 'Developed expertise in Python-based economic modeling, cost-benefit analysis, and dashboard development.',
    },
    {
      period: 'BarFlow',
      title: 'Product Development',
      description: 'Built location-based social app combining technical skills with product thinking.',
    },
    {
      period: 'Next Steps',
      title: 'Looking Forward',
      description: 'Seeking opportunities to apply economic analysis and data skills to impactful product decisions.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader title="About Me" />
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative w-full aspect-square max-w-md">
          <Image
            src="/images/headshot.jpg"
            alt="Hank Linder"
            fill
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hank Linder</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I&apos;m an economics and data analytics professional with a passion for turning complex data into actionable insights. My work combines quantitative analysis, economic modeling, and product thinking to help organizations make better decisions.
            </p>
            <p>
              I specialize in Python-based economic modeling, dashboard development, and quantitative analysis. Whether it&apos;s building cost-benefit models, creating interactive dashboards, or analyzing market trends, I focus on turning messy data into clear, decision-ready insights.
            </p>
            <p>
              My approach is grounded in economic principles—thinking systematically about incentives, trade-offs, and unintended consequences. I believe the best solutions come from combining rigorous analysis with practical product thinking.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/resume" variant="primary">Download Resume</Button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Timeline</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500 pt-1">
                {item.period}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What I&apos;m Looking For</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            I&apos;m seeking opportunities where I can apply my skills in economics, data analytics, and product thinking to solve meaningful problems. I&apos;m particularly interested in roles that involve:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Quantitative analysis and economic modeling</li>
            <li>Data-driven product development</li>
            <li>Building dashboards and analytical tools</li>
            <li>Strategic decision-making with data</li>
            <li>Cross-functional collaboration with engineering and product teams</li>
          </ul>
          <p className="mt-4">
            If you&apos;re working on interesting problems at the intersection of economics, data, and product, I&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-6">
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
      </Card>
    </div>
  );
}
