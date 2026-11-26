import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { EducationAndCertifications } from "@/components/sections/EducationAndCertifications";
import { PageHeader } from "@/components/ui/PageHeader";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: profile.summary,
  path: "/about",
  keywords: ["Backend Engineer", "DevOps Engineer", profile.location],
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title={profile.name}
        description={`${profile.role} based in ${profile.location}.`}
      />
      <About />
      <EducationAndCertifications />
    </>
  );
}
