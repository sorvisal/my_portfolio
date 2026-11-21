import { Reveal } from "@/components/animations/Reveal";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { CertificationsEmptyState } from "@/components/certifications/CertificationsEmptyState";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { getSectionNumber } from "@/data/navigation";

export function Certifications() {
  return (
    <Section id="certifications" labelledBy="certifications-heading" tone="surface">
      <Reveal>
        <SectionHeading
          id="certifications-heading"
          eyebrow={`${getSectionNumber("certifications")} — Certifications`}
          title="Certifications"
          description="Officially earned credentials, with verification details."
        />
      </Reveal>

      {certifications.length > 0 ? (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {certifications.map((certification, index) => (
            <li key={certification.id}>
              <Reveal delay={(index % 2) * 0.05} className="h-full">
                <CertificationCard certification={certification} />
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <CertificationsEmptyState />
      )}
    </Section>
  );
}
