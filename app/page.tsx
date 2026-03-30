import Image from 'next/image';
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

  return (
    <div className="w-full">
      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/50 to-gray-950" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Headshot */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-8 animate-fade-in-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-lg" />
              <Image
                src="/images/headshot.jpg"
                alt="Hank Linder"
                fill
                className="rounded-full object-cover relative"
                priority
              />
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in-up animate-delay-200">
              Hank Linder
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-3 font-mono tracking-wide animate-fade-in-up animate-delay-400">
              Economics &middot; AI Systems &middot; Full-Stack Development
            </p>
            <p className="text-gray-500 max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-400">
              Building decision systems, marketplaces, and AI tools from concept to production.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-600">
              <Button href="/projects" variant="primary">View Projects</Button>
              <Button href="/contact" variant="outline">Contact</Button>
              <Button href="https://github.com/hanklinder1" external variant="secondary">GitHub</Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button href={project.liveUrl} variant="primary" external className="text-sm py-2 px-4">
                      Live
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button href={project.githubUrl} variant="outline" external className="text-sm py-2 px-4">
                      GitHub
                    </Button>
                  )}
                  <Button href={`/projects#${project.id}`} variant="secondary" className="text-sm py-2 px-4">
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Skills" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category) => (
              <Card key={category.category}>
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">&#x25B8;</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Thinkers */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Books & Thinkers"
            subtitle="Frameworks I stress-test against real-world incentives."
          />

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book) => (
                <Card key={book.title}>
                  <h4 className="text-lg font-bold text-white mb-1">{book.title}</h4>
                  <p className="text-cyan-400 text-sm mb-2">{book.author}</p>
                  <p className="text-sm text-gray-400 italic">&quot;{book.whyItShaped}&quot;</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Economists & Thinkers</h3>
            <div className="flex flex-wrap gap-3">
              {thinkers.map((thinker) => (
                <Tag key={thinker} className="text-base py-2 px-4">{thinker}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
