import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import type { SkillCategoryId } from "@/types";

const heroSkillOrder: SkillCategoryId[] = ["backend", "database", "devops"];

const heroSkillIndexes: Partial<Record<SkillCategoryId, number[]>> = {
  backend: [0, 1],
  database: [0],
  devops: [0, 2, 3, 4, 5],
};

const heroSkills = heroSkillOrder.flatMap((id) => {
  const group = skillGroups.find((item) => item.id === id);
  if (!group) return [];

  return (heroSkillIndexes[id] ?? [])
    .map((index) => group.skills[index])
    .filter((skill): skill is string => typeof skill === "string");
});

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-hero-base"
    >
      <SectionBackground variant="hero" />

      <Container className="relative z-10 flex min-h-[100svh] max-w-7xl items-center pb-12 pt-24 sm:pb-14 sm:pt-24 lg:pb-14 lg:pt-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <Reveal className="w-full max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="accent"
                className="gap-2 border-accent/20 bg-surface/80 px-3 py-1"
              >
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.role}
              </Badge>
             
            </div>

            <h1
              id="hero-heading"
              className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
            >
              <span className="block">Building Reliable</span>
              <span className="hero-gradient-text block">Digital Systems.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#projects" size="lg" className="w-full sm:w-auto">
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              {profile.resumePath && (
                <Button
                  // href={profile.resumePath}
                  target="_blank"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View CV
                  <ExternalLink className="size-4" aria-hidden="true" />
                </Button>
              )}
            </div>

            <SocialLinks className="mt-8" />

            {/* <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
              {heroSkills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul> */}
          </Reveal>

          <Reveal delay={0.12} className="w-full">
            <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:max-w-[20rem] xl:max-w-[27rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-card bg-gradient-to-br from-accent/10 via-transparent to-accent-indigo/10 blur-2xl"
              />

              <div className="relative rounded-card border border-border bg-surface p-2.5 shadow-card">
                <div className="relative overflow-hidden rounded-control border border-border bg-surface-secondary">
                  {profile.photo && (
                    <Image
                      src={profile.photo.src}
                      alt={profile.photo.alt}
                      width={640}
                      height={800}
                      priority
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 90vw"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/90 to-transparent px-5 pb-5 pt-20">
                    <p className="text-lg font-semibold tracking-tight text-foreground">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{profile.role}</p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -right-4 top-8 hidden size-24 rounded-full border border-accent/20 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
