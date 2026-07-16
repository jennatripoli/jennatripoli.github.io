import { ProjectCard, SectionTitle } from "@/components/ui";
import type { SiteContent } from "@/content/types";

type ProjectsSectionProps = {
  content: SiteContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-6 lg:px-16 py-16 lg:py-24 max-w-5xl">
      <SectionTitle title="Projects" />
      <div className="space-y-6">
        {content.projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
