import type { Metadata } from "next";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { PageHeader } from "@/components/ui/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Experience & Education",
  description: "Professional experience and academic background of Sor Visal.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Background"
        title="Experience & education"
        description="Professional experience and academic background."
      />
      <Experience />
      <Education />
      <Certifications />
    </>
  );
}
