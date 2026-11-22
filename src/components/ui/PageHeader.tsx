import { Container } from "@/components/layout/Container";
import { SectionBackground } from "@/components/ui/SectionBackground";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden border-b border-border bg-background">
      <SectionBackground variant="default" />

      <Container className="relative z-10 py-16 sm:py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}
