import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-hero-base"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-blue hero-glow-drift -left-24 -top-20 size-[22rem] blur-[80px] sm:left-[6%] sm:top-[8%] sm:size-[34rem] sm:blur-[120px]" />
        <div className="hero-glow hero-glow-indigo hero-glow-drift -right-20 top-[18%] hidden size-[28rem] blur-[110px] sm:block lg:size-[36rem] lg:blur-[130px]" />
        <div className="hero-glow hero-glow-sky bottom-[-18%] left-[30%] size-[20rem] blur-[80px] sm:size-[30rem] sm:blur-[120px]" />

        <div className="absolute right-[12%] top-[22%] hidden size-24 rounded-full border border-accent/15 lg:block" />
        <div className="absolute bottom-[18%] left-[10%] hidden size-3 rotate-45 border border-indigo-500/20 lg:block" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-4rem)] max-w-7xl items-center py-12 sm:py-14 lg:py-14">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <Reveal className="w-full max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="accent"
                className="gap-2 border-accent/20 bg-white/70 px-3 py-1 backdrop-blur-sm"
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

            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {profile.location}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#projects" size="lg" className="w-full sm:w-auto">
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Me
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={profile.resumePath}
                download
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
              >
                Download CV
                <Download className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="w-full">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/10 via-transparent to-indigo-500/10 blur-2xl"
              />

              <div className="relative rounded-[2rem] border border-border/80 bg-white/60 p-3 shadow-card backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface">
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent px-5 pb-5 pt-20">
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
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-4 hidden size-16 rotate-45 rounded-lg border border-indigo-500/20 lg:block"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
