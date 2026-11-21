import Image from "next/image";
import { BookOpen, Building2, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface OrganizationMarkProps {
  name: string;
  logo?: ImageAsset;
  icon?: "building" | "book" | "academic";
  className?: string;
}

export function OrganizationMark({ name, logo, icon = "building", className }: OrganizationMarkProps) {
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt ?? `${name} logo`}
        width={48}
        height={48}
        className={cn(
          "size-12 shrink-0 rounded-control border border-border bg-background object-contain p-1.5",
          className,
        )}
      />
    );
  }

  const Icon = icon === "book" ? BookOpen : icon === "academic" ? GraduationCap : Building2;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-control border border-border bg-surface text-accent",
        className,
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}
