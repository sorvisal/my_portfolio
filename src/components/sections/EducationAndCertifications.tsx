import { GraduationCap, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { CertificationsEmptyState } from "@/components/certifications/CertificationsEmptyState";
import { AcademicBackground } from "@/components/education/AcademicBackground";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { academicBackground } from "@/data/education";
import { getSectionNumber } from "@/data/navigation";

export function EducationAndCertifications() {
  return (
    <Section id="education" labelledBy="education-heading" tone="canvas" background="glow">
      <Reveal>
        <SectionHeading
          id="education-heading"
          eyebrow={`${getSectionNumber("education")} — Education & certifications`}
          title="Education and certifications"
          description="Academic background and officially earned credentials."
        />
      </Reveal>

      <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14">
        <section aria-labelledby="academic-background-heading">
          <Reveal>
            <h3
              id="academic-background-heading"
              className="flex items-center gap-3 text-xl font-semibold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-control bg-accent-soft text-accent"
              >
                <GraduationCap className="size-5" />
              </span>
              Academic background
            </h3>
          </Reveal>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academicBackground.map((record, index) => (
              <li key={record.id} className="h-full">
                <Reveal delay={index * 0.05} className="h-full">
                  <AcademicBackground record={record} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certifications-heading">
          <Reveal>
            <h3
              id="certifications-heading"
              className="flex items-center gap-3 text-xl font-semibold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-control bg-accent-soft text-accent"
              >
                <ShieldCheck className="size-5" />
              </span>
              Certifications
            </h3>
          </Reveal>

          {certifications.length > 0 ? (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((certification, index) => (
                <li key={certification.id} className="h-full">
                  <Reveal delay={(index % 4) * 0.05} className="h-full">
                    <CertificationCard certification={certification} />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <CertificationsEmptyState />
          )}
        </section>
      </div>
    </Section>
  );
}
