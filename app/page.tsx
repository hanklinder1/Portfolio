import Image from 'next/image';
import Button from '@/components/Button';
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

      {/* ── Hero: split-screen ── */}
      <section className="flex min-h-screen overflow-hidden">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-16 w-full lg:w-1/2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-8 animate-fade-in-up">
            Credit Analyst &nbsp;·&nbsp; Consolidated Electrical Distributors
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-serif text-gray-950 leading-[0.88] mb-8 animate-fade-in-up animate-delay-200">
            Hank<br />Linder
          </h1>
          <div className="w-10 h-px bg-gray-400 mb-8 animate-fade-in-up animate-delay-200" />
          <p className="text-base text-gray-600 leading-relaxed max-w-sm mb-10 animate-fade-in-up animate-delay-400">
            Economics graduate from Clemson University. I apply financial analysis,
            credit risk assessment, and quantitative modeling to support strategic
            decisions across a national distribution portfolio.
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-10 animate-fade-in-up animate-delay-400">
            Economics &nbsp;·&nbsp; Financial Analytics &nbsp;·&nbsp; Risk Assessment
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-600">
            <Button href="/projects" variant="primary">View Work</Button>
            <Button href="/contact" variant="outline">Get in Touch</Button>
          </div>
        </div>

        {/* Right: full photo */}
        <div className="hidden lg:block relative w-1/2">
          <Image
            src="/images/headshot.png"
            alt="Hank Linder"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* ── Profile section: photo left, text right ── */}
      <section className="flex flex-col lg:flex-row border-t border-gray-200">
        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
          <Image
            src="/images/100_0569.png"
            alt="Hank Linder"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 lg:py-20 w-full lg:w-1/2 bg-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">The Profile</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-950 mb-5 leading-snug">
            An economics-first approach<br className="hidden xl:block" /> to credit and risk.
          </h2>
          <div className="w-10 h-px bg-gray-400 mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4 max-w-md">
            Economics graduate from Clemson University currently working as a
            Credit Analyst at Consolidated Electrical Distributors (CED) in
            Greenville, SC. I apply financial analysis and risk assessment to
            support credit decisions across a national distribution portfolio.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
            Prior to CED, I led AI optimization research with BMW Manufacturing —
            building analytical frameworks that translated complex operational data
            into executive strategy. Fluent in Spanish.
          </p>
          <Button href="/about" variant="outline" className="self-start">Full Profile</Button>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-[#F7F6F3] border-t border-gray-200">
        <div className="max-w-4xl">
          <SectionHeader
            title="Featured Work"
            subtitle="Analytical frameworks, risk models, and data-driven research."
          />
          <div className="divide-y divide-gray-200">
            {featuredProjects.map((project) => (
              <div key={project.id} className="py-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-gray-950 mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">{project.summary}</p>
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button href={project.liveUrl} variant="primary" external className="text-xs py-2 px-4">
                      View Live
                    </Button>
                  )}
                  {project.tableauUrl && project.tableauUrl !== '#' && (
                    <Button href={project.tableauUrl} variant="primary" external className="text-xs py-2 px-4">
                      Dashboard
                    </Button>
                  )}
                  <Button href={`/projects#${project.id}`} variant="outline" className="text-xs py-2 px-4">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competencies ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-white border-t border-gray-200">
        <div className="max-w-4xl">
          <SectionHeader title="Competencies" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-700 leading-snug">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Books & Thinkers ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-[#F7F6F3] border-t border-gray-200">
        <div className="max-w-4xl">
          <SectionHeader
            title="Books & Thinkers"
            subtitle="Frameworks I stress-test against real-world incentives."
          />
          <div className="divide-y divide-gray-200 mb-14">
            {books.map((book) => (
              <div key={book.title} className="py-8">
                <h4 className="text-xl font-bold font-serif text-gray-950 mb-1">{book.title}</h4>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-3">{book.author}</p>
                <p className="text-gray-600 italic leading-relaxed max-w-xl">{book.whyItShaped}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Economists &amp; Thinkers</p>
            <div className="flex flex-wrap gap-2">
              {thinkers.map((thinker) => (
                <Tag key={thinker} className="py-1.5 px-3 text-xs">{thinker}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-24 px-8 sm:px-14 lg:px-20 xl:px-28 bg-white border-t border-gray-200">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-950 mb-5">Let&apos;s Connect</h2>
          <div className="w-10 h-px bg-gray-400 mb-6" />
          <p className="text-gray-500 mb-8 leading-relaxed">
            Interested in discussing credit, financial analytics, or professional opportunities?
          </p>
          <Button href="/contact" variant="primary">Get in Touch</Button>
        </div>
      </section>

    </div>
  );
}
