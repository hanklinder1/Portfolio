import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import { projects } from '@/data/projects';
import { books } from '@/data/books';
import { thinkers } from '@/data/thinkers';
import { skills } from '@/data/skills';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const bmw2026 = projects.find(p => p.id === 'bmw-2026');
  const stats = [
    { value: '2+', label: 'projects shipped' },
    { value: '3+', label: 'dashboards/models built' },
    { value: '1+', label: 'stakeholders supported' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hank Linder
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Economics • Data Analytics • AI & Product
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in quantitative analysis, Python-based economic modeling, and dashboard development—turning messy data into clear, decision-ready insights.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="/projects" variant="primary">View Projects</Button>
              <Button href="/contact" variant="outline">Contact</Button>
              <Button href="https://github.com/hanklinder1" external variant="secondary">GitHub</Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="font-bold text-gray-900">{stat.value}</span> {stat.label}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/images/headshot.jpg"
              alt="Hank Linder"
              fill
              className="rounded-lg object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* BMW Partnership Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Clemson University × BMW
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Academic–Industry Partnership
            </h2>
          </div>

          {/* 2025 Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">BMW Manufacturing Data Project – 2025</h3>
            <p className="text-gray-300 max-w-3xl leading-relaxed mb-4">
              Early phase of the collaboration: exploratory data analysis, learning the manufacturing context, and initial data exploration. This foundational work established the context needed for the 2026 decision framework.
            </p>
            <Button href="https://bmw-dashboard.vercel.app/" external variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 text-sm py-2 px-4">
              View 2025 Dashboard
            </Button>
          </div>

          {/* 2026 Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">BMW Manufacturing Data Valuation & Decision Modeling – 2026</h3>
            <p className="text-gray-300 max-w-3xl leading-relaxed mb-6">
              Built a risk-adjusted decision framework to evaluate whether manufacturing plants should adopt, delay, or reject third-party technologies. The project focuses on data readiness, operational and integration risk, organizational constraints, and expected economic value (risk-adjusted ROI). The goal is decision support for manufacturing technology adoption—not just dashboards or reporting.
            </p>
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Tech Stack</h4>
              <p className="text-gray-300">PostgreSQL (Supabase) · SQL (views, scoring logic, scenario parameters) · Tableau Public · GitHub · Vercel</p>
            </div>

            {/* SQL & Tableau Decision Dashboard */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold mb-3">SQL & Tableau Decision Dashboard</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                An interactive executive decision tool built in Tableau. Includes a plant × technology decision matrix, risk vs. value tradeoff visualization, and adoption blockers with remediation drivers. Full SQL logic and documentation are available on GitHub.
              </p>
              <div className="flex flex-wrap gap-3">
                {bmw2026?.tableauUrl && bmw2026.tableauUrl !== '#' && (
                  <Button href={bmw2026.tableauUrl} external variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 text-sm py-2 px-4">
                    Tableau Public Dashboard
                  </Button>
                )}
                <Button href="https://github.com/hanklinder1" external variant="outline" className="border-white text-white hover:bg-white/10 text-sm py-2 px-4">
                  GitHub (SQL & Docs)
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/projects#bmw-2026" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Projects" />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button href={project.liveUrl} variant="primary" className="text-sm py-2 px-4">
                      Live
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button href={project.githubUrl} variant="outline" external className="text-sm py-2 px-4">
                      GitHub
                    </Button>
                  )}
                  <Button href={`/projects#${project.id}`} variant="secondary" className="text-sm py-2 px-4">
                    View details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Skills" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category) => (
              <Card key={category.category}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Thinkers */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Books & Thinkers I Learn From"
            subtitle="I like comparing different frameworks and stress-testing ideas against real-world incentives."
          />
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Favorite Books</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book) => (
                <Card key={book.title}>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h4>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <p className="text-sm text-gray-700 italic">&quot;{book.whyItShaped}&quot;</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Economists & Thinkers I Follow</h3>
            <div className="flex flex-wrap gap-3">
              {thinkers.map((thinker) => (
                <Tag key={thinker} className="text-base py-2 px-4">{thinker}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I&apos;m an economics and data analytics professional with a passion for turning complex data into actionable insights. My work combines quantitative analysis, economic modeling, and product thinking to help organizations make better decisions.
            </p>
            <Button href="/about" variant="primary">More about me</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
