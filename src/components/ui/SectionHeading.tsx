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
      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}