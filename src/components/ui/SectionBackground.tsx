import { cn } from "@/lib/utils";

export type SectionBackgroundVariant =
  | "hero"
  | "default"
  | "subtle"
  | "grid"
  | "glow"
  | "none";

interface SectionBackgroundProps {
  variant?: SectionBackgroundVariant;
  className?: string;
}

const gridClasses: Record<SectionBackgroundVariant, string | null> = {
  hero: "fine-grid fine-grid-strong",
  default: "fine-grid",
  subtle: "fine-grid fine-grid-soft",
  grid: "fine-grid fine-grid-strong",
  glow: "fine-grid fine-grid-soft",
  none: null,
};

/**
 * Shared ambient background layers for section wrappers.
 * Rendered behind content (z-0) and never inside cards.
 */
export function SectionBackground({ variant = "default", className }: SectionBackgroundProps) {
  if (variant === "none") return null;

  const gridClass = gridClasses[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      {gridClass && <div className={gridClass} />}

      {variant === "hero" && (
        <>
          <div className="surface-glow surface-glow-blue surface-glow-drift -left-24 -top-28 size-[22rem] blur-[70px] sm:left-[4%] sm:top-[4%] sm:size-[32rem] sm:blur-[90px]" />
          <div className="surface-glow surface-glow-indigo surface-glow-drift -right-20 top-[12%] hidden size-[24rem] blur-[80px] sm:block lg:size-[32rem]" />
          <div className="surface-glow surface-glow-sky bottom-[-28%] left-[22%] hidden size-[22rem] blur-[80px] sm:block lg:size-[28rem]" />
          <div className="absolute right-[12%] top-[22%] hidden size-24 rounded-full border border-accent/20 lg:block" />
        </>
      )}

      {variant === "default" && (
        <>
          <div className="surface-glow surface-glow-blue -left-28 -top-32 size-[20rem] blur-[70px] sm:size-[26rem] lg:size-[30rem]" />
          <div className="surface-glow surface-glow-indigo -right-24 bottom-[-35%] hidden size-[20rem] blur-[80px] sm:block lg:size-[26rem]" />
        </>
      )}

      {variant === "glow" && (
        <>
          <div className="surface-glow surface-glow-blue -right-24 -top-28 size-[20rem] blur-[70px] sm:size-[26rem] lg:size-[30rem]" />
          <div className="surface-glow surface-glow-sky -left-28 bottom-[-40%] size-[18rem] blur-[70px] sm:size-[24rem]" />
        </>
      )}
    </div>
  );
}
