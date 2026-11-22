import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/sections/TerminalCard";
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
        <p className="text-pretty text-lg leading-relaxed text-muted">
          {profile.name} is a {profile.role} based in {profile.location}. {profile.summary}
        </p>
        <TerminalCard
          prompt={`${profile.brand.toLowerCase()}@portfolio:~`}
          lines={[
            { command: "whoami", output: profile.name },
            { command: "echo $ROLE", output: profile.role },
            { command: "echo $LOCATION", output: profile.location },
          ]}
        />
      </Reveal>
    </Section>
  );
}