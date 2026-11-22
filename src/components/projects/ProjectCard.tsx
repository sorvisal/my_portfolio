import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none">
      <Badge variant="accent" className="self-start">
        {project.category}
      </Badge>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {/* Stretched link: the whole card is clickable, with one accessible link name. */}
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-control after:absolute after:inset-0 after:rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {project.name}
        </Link>
      </h3>

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

      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
        View details
        <ArrowUpRight
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}