"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";
import { OrganizationMark } from "@/components/ui/OrganizationMark";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types";
import { TechnologyTags } from "./TechnologyTags";

interface ExperienceEntryProps {
  item: ExperienceItem;
  index: number;
}

export function ExperienceEntry({ item, index }: ExperienceEntryProps) {
  const entryRef = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const isVisible = useInView(entryRef, {
    once: true,
    amount: 0.2,
    margin: "-60px",
  });
  const isActive = Boolean(reduceMotion) || isVisible;

  return (
    <li ref={entryRef} className="relative grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-x-10">
      <motion.span
        aria-hidden="true"
        className={cn(
          "absolute left-[6px] top-2 size-3 rounded-full border sm:left-[10.875rem]",
          isActive ? "border-accent bg-accent" : "border-border bg-surface",
        )}
        initial={reduceMotion ? false : { scale: 0.85 }}
        animate={reduceMotion ? undefined : { scale: isActive ? 1.15 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <div className="pl-10 sm:pl-0">
        <p className="font-mono text-sm text-muted sm:text-right">{item.period}</p>
        {item.kind === "learning" && (
          <p className="mt-1 text-xs font-medium text-accent sm:text-right">Self-directed</p>
        )}
      </div>

      <Reveal delay={index * 0.05} className="pl-10 sm:pl-0">
        <article
          aria-labelledby={`experience-${item.id}-title`}
          className="rounded-card border border-border bg-surface p-6 shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
        >
          <div className="flex items-start gap-4">
            <OrganizationMark
              name={item.organization}
              logo={item.organizationLogo}
              icon={item.kind === "learning" ? "book" : "building"}
            />
            <div>
              <p className="text-sm font-medium text-accent">{item.organization}</p>
              {item.location && <p className="mt-0.5 text-sm text-muted">{item.location}</p>}
              {item.kind === "learning" && (
                <p className="mt-0.5 text-sm text-muted">Not an employment role</p>
              )}
            </div>
          </div>

          <h3 id={`experience-${item.id}-title`} className="mt-5 text-xl font-semibold tracking-tight">
            {item.title}
          </h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.description}</p>

          <div className="mt-5 border-t border-border pt-5">
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Responsibilities</h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <TechnologyTags technologies={item.technologies} />
        </article>
      </Reveal>
    </li>
  );
}
