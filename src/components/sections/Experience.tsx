import { Reveal } from "@/components/animations/Reveal";
import { Timeline } from "@/components/experience/Timeline";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { getSectionNumber } from "@/data/navigation";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section id="experience" labelledBy="experience-heading" tone="surface" background="subtle">
      <Reveal>
        <SectionHeading
          id="experience-heading"
          eyebrow={`${getSectionNumber("experience")} — Experience`}
          title="Professional experience"
          description="A chronological view of roles, responsibilities and the technologies behind the work."
        />
      </Reveal>

      <Timeline items={experience} />
    </Section>
  );
}
