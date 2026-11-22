import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSectionNumber } from "@/data/navigation";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" background="glow">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="projects-heading"
          eyebrow={`${getSectionNumber("projects")} — Projects`}
          title="Featured projects"
          description="Selected work across cloud, web, database and enterprise systems."
        />
        <Button href="/projects" variant="secondary">
          All projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={(index % 2) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}