import { Container as ContainerIcon, Database, LayoutDashboard, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSectionNumber } from "@/data/navigation";
import { skillGroups } from "@/data/skills";
import type { SkillCategoryId } from "@/types";

const icons: Record<SkillCategoryId, LucideIcon> = {
  backend: Server,
  devops: ContainerIcon,
  database: Database,
  frontend: LayoutDashboard,
};

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading" tone="surface">
      <Reveal>
        <SectionHeading
          id="skills-heading"
          eyebrow={`${getSectionNumber("skills")} — Skills`}
          title="Technical skills"
          description="The technologies I work with, grouped by area."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.id];
          return (
            <Reveal key={group.id} delay={index * 0.05}>
              <div className="h-full rounded-card border border-border bg-background p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-control bg-accent-soft text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}