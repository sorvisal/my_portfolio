import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <article>
      <header className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground active:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
          <Badge variant="accent" className="mt-6">
            {project.category}
          </Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.tagline}</p>
        </Container>
      </header>

      <Container className="max-w-3xl py-16">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight">
            Overview
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
        </section>

        {project.technologies.length > 0 && (
          <section aria-labelledby="tech-heading" className="mt-12">
            <h2 id="tech-heading" className="text-2xl font-semibold tracking-tight">
              Technologies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.links.length > 0 && (
          <section aria-labelledby="links-heading" className="mt-12">
            <h2 id="links-heading" className="text-2xl font-semibold tracking-tight">
              Links
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Button key={link.href} href={link.href} variant="secondary">
                  {link.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}