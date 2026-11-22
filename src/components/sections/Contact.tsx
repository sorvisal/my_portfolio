import { Mail } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { getSectionNumber } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading" tone="canvas" background="glow">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow={`${getSectionNumber("contact")} — Contact`}
            title="Let's talk"
            description="Open to backend and DevOps opportunities."
          />

          {(profile.email || profile.socials.length > 0) && (
            <ul className="mt-8 space-y-3">
              {profile.email && (
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-10 items-center gap-2 font-medium text-accent transition-colors hover:text-accent-hover hover:underline active:text-accent-hover"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    {profile.email}
                  </a>
                </li>
              )}
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center font-medium text-accent transition-colors hover:text-accent-hover hover:underline active:text-accent-hover"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <ContactForm recipient={profile.email} />
        </Reveal>
      </div>
    </Section>
  );
}