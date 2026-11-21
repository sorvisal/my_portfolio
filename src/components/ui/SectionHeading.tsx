import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-sm font-medium text-accent">{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}