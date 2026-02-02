import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader 
        title="Projects"
        subtitle="A collection of my work in data analytics, economic modeling, and product development."
      />
      
      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} id={project.id} className="scroll-mt-20">
            <Card>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-lg text-gray-600">{project.summary}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Problem</h3>
                <p className="text-gray-600 mb-4">{project.problem}</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600 mb-4">{project.solution}</p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600 mb-4">{project.impact}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {project.id === 'bmw-2026' && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">SQL & Tableau Decision Dashboard</h3>
                  <p className="text-gray-600 mb-3">
                    Interactive executive decision tool built in Tableau. Includes plant × technology decision matrix, risk vs. value tradeoff visualization, and adoption blockers with remediation drivers. Full SQL logic and documentation are available on GitHub.
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
                  <span className="text-sm text-gray-500 italic">Links coming soon</span>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
