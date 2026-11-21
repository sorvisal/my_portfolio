import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  labelledBy: string;
  tone?: "default" | "surface";
  children: React.ReactNode;
}

export function Section({ id, labelledBy, tone = "default", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("border-t border-border", tone === "surface" && "bg-surface")}
    >
      <Container className="py-20 sm:py-24">{children}</Container>
    </section>
  );
}