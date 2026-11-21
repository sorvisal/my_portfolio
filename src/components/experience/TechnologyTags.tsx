"use client";

import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/Badge";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export function TechnologyTags({ technologies }: { technologies: string[] }) {
  const reduceMotion = useReducedMotion();

  if (technologies.length === 0) return null;

  return (
    <div className="mt-5">
      <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Technologies</h4>
      <motion.ul
        className="mt-2 flex flex-wrap gap-2"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-40px" }}
        variants={reduceMotion ? undefined : listVariants}
      >
        {technologies.map((technology) => (
          <motion.li
            key={technology}
            variants={reduceMotion ? undefined : itemVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Badge>{technology}</Badge>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
