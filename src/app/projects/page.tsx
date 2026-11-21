import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: "Selected projects by Sor Visal across cloud, web, database and enterprise systems.",
  path: "/projects",
  keywords: ["Backend projects", "DevOps projects", "Cloud", "Database", "Enterprise"],
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="All projects"
        description="Selected work across cloud, web, database and enterprise systems."
      />
      <Container className="py-16">
        <ProjectFilter projects={projects} />
      </Container>
    </>
  );
}
