import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28">
      <SectionHeader
        title="Projects"
        subtitle="Decision systems, marketplaces, and AI tools — from concept to production."
      />

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} id={project.id} className="scroll-mt-24">
            <Card hover={false}>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-500">{project.summary}</p>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-600 text-sm uppercase tracking-wide mb-1">Problem</h3>
                  <p className="text-gray-500 text-sm">{project.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 text-sm uppercase tracking-wide mb-1">Solution</h3>
                  <p className="text-gray-500 text-sm">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 text-sm uppercase tracking-wide mb-1">Impact</h3>
                  <p className="text-gray-500 text-sm">{project.impact}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {project.id === 'bmw' && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-2">SQL & Tableau Decision Dashboard</h3>
                  <p className="text-gray-500 text-sm mb-3">
                    Interactive executive decision tool. Plant x technology decision matrix, risk vs. value tradeoffs, and adoption blockers with remediation drivers.
                  </p>
                  {project.tableauUrl && project.tableauUrl !== '#' && (
                    <Button href={project.tableauUrl} variant="primary" external className="text-sm py-2 px-4">
                      View Tableau Dashboard
                    </Button>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <Button href={project.liveUrl} variant="primary" external>
                    View Live
                  </Button>
                )}
                {project.tableauUrl && project.tableauUrl !== '#' && (
                  <Button href={project.tableauUrl} variant="primary" external>
                    Tableau Dashboard
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <Button href={project.githubUrl} variant="outline" external>
                    View on GitHub
                  </Button>
                )}
                {(!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && !project.tableauUrl && (
                  <span className="text-sm text-gray-400 italic">Links coming soon</span>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
