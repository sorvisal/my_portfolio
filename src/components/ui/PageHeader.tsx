import { Container } from "@/components/layout/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <p className="font-mono text-sm font-medium text-accent">{eyebrow}</p>
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
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