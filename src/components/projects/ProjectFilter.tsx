"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

const LIST_ID = "project-list";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");

  const categories: Filter[] = ["All", ...new Set(projects.map((p) => p.category))];
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <h2 className="sr-only">Project list</h2>

      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              aria-controls={LIST_ID}
              className={cn(
                "inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                isActive
                  ? "border-accent bg-accent text-white hover:bg-accent-hover active:bg-accent-hover"
                  : "border-border bg-surface text-muted hover:border-border-hover hover:bg-surface-secondary hover:text-foreground active:bg-surface-secondary",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {active === "All"
          ? `Showing all ${visible.length} ${visible.length === 1 ? "project" : "projects"}`
          : `Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"} in ${active}`}
      </p>

      <ul id={LIST_ID} className="mt-8 grid gap-5 sm:grid-cols-2">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
