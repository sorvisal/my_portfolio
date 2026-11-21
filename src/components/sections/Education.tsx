import { Reveal } from "@/components/animations/Reveal";
import { AcademicBackground } from "@/components/education/AcademicBackground";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { academicBackground } from "@/data/education";
import { getSectionNumber } from "@/data/navigation";

export function Education() {
  return (
    <Section id="education" labelledBy="education-heading">
      <Reveal>
        <SectionHeading
          id="education-heading"
          eyebrow={`${getSectionNumber("education")} — Education`}
          title="Education"
          description="Academic background and current course of study."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <h3 className="mt-10 text-lg font-semibold tracking-tight">Academic background</h3>
      </Reveal>

      {academicBackground.map((record) => (
        <AcademicBackground key={record.id} record={record} />
      ))}
    </Section>
  );
}
