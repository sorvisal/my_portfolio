import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { PageHeader } from "@/components/ui/PageHeader";
import { skillGroups } from "@/data/skills";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description: "Backend, DevOps, database and frontend technologies used by Sor Visal.",
  path: "/skills",
  keywords: skillGroups.flatMap((group) => group.skills),
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader eyebrow="Expertise" title="Skills" />
      <Skills />
    </>
  );
}
