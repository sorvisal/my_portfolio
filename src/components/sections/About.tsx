import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSectionNumber } from "@/data/navigation";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <Reveal>
        <SectionHeading
          id="about-heading"
          eyebrow={`${getSectionNumber("about")} — About`}
          title="About me"
        />
      </Reveal>

      <Reveal delay={0.05} className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-muted">
          {profile.name} is a {profile.role} based in {profile.location}. {profile.summary}
        </p>

        <dl className="divide-y divide-border rounded-card border border-border bg-background shadow-card">
          {[
            { label: "Role", value: profile.role },
            { label: "Location", value: profile.location },
          ].map((item) => (
            <div key={item.label} className="px-5 py-4">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-1 font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}