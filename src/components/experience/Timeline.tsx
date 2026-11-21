"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ExperienceItem } from "@/types";
import { ExperienceEntry } from "./ExperienceEntry";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 85%", "end 35%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative mt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-3 top-3 w-px bg-border sm:left-[11.25rem]"
      >
        <motion.div
          className="h-full w-full origin-top bg-accent"
          style={reduceMotion ? undefined : { scaleY: lineScale }}
        />
      </div>

      <ol ref={listRef} className="relative space-y-10 sm:space-y-12">
        {items.map((item, index) => (
          <ExperienceEntry key={item.id} item={item} index={index} />
        ))}
      </ol>
    </div>
  );
}
