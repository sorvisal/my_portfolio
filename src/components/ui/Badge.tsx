import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent";
}

export function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wide",
        variant === "accent"
          ? "border-accent/20 bg-accent-soft text-accent"
          : "border-border bg-surface-secondary text-muted",
        className,
      )}
      {...props}
    />
  );
}