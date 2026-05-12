import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="pt-14">

      {/* ── Page header ── */}
      <section className="py-20 px-8 sm:px-14 lg:px-20 xl:px-28 bg-white border-b border-gray-200">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">Work &amp; Research</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-950 mb-5 leading-tight">
            Analytical frameworks,<br className="hidden md:block" /> risk models, and research.
          </h1>
          <div className="w-10 h-px bg-gray-400 mb-5" />
          <p className="text-gray-500 max-w-xl leading-relaxed">
            From concept through delivery — each project grounded in economic reasoning and data-driven analysis.
          </p>
        </div>
      </section>

      {/* ── Projects list ── */}
      <section className="px-8 sm:px-14 lg:px-20 xl:px-28 bg-[#F7F6F3]">
        <div className="max-w-4xl divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="py-16 scroll-mt-20">
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-950 mb-4 leading-snug">
                {project.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">{project.summary}</p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Problem</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Approach</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Outcome</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button href={project.liveUrl} variant="primary" external className="text-xs py-2 px-4">
                    View Live
                  </Button>
                )}
                {project.tableauUrl && project.tableauUrl !== '#' && (
                  <Button href={project.tableauUrl} variant="primary" external className="text-xs py-2 px-4">
                    Tableau Dashboard
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <Button href={project.githubUrl} variant="outline" external className="text-xs py-2 px-4">
                    GitHub
                  </Button>
                )}
                {(!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && !project.tableauUrl && (
                  <span className="text-xs text-gray-400 italic">In progress</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
