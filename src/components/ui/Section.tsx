import { Container } from "@/components/layout/Container";
import {
  SectionBackground,
  type SectionBackgroundVariant,
} from "@/components/ui/SectionBackground";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  labelledBy: string;
  tone?: "default" | "surface" | "canvas";
  background?: SectionBackgroundVariant;
  children: React.ReactNode;
}

export function Section({
  id,
  labelledBy,
  tone = "default",
  background = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative isolate overflow-hidden border-t border-border",
        tone === "default" && "bg-surface",
        tone === "surface" && "bg-surface-secondary",
        tone === "canvas" && "bg-background",
      )}
    >
      <SectionBackground variant={background} />
      <Container className="relative z-10 py-20 sm:py-24">{children}</Container>
    </section>
  );
}
