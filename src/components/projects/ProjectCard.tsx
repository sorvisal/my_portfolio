import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/GithubIcon";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none">
      <Badge variant="accent" className="self-start">
        {project.category}
      </Badge>

      {project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} repository on GitHub (opens in a new tab)`}
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-control border border-border bg-surface-secondary text-muted transition-[color,background-color,border-color] duration-200 hover:border-border-hover hover:bg-surface hover:text-accent active:bg-surface active:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <GithubIcon className="size-5 shrink-0" aria-hidden="true" />
        </a>
      )}

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>

      <p className="mt-2 flex-1 leading-relaxed text-muted">{project.tagline}</p>

      {project.technologies.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
