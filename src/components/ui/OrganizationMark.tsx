import Image from "next/image";
import { BookOpen, Building2, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface OrganizationMarkProps {
  name: string;
  logo?: ImageAsset;
  icon?: "building" | "book" | "academic";
  className?: string;
  /** Removes the default box (border, surface background, padding and shadow). */
  unstyled?: boolean;
}

export function OrganizationMark({
  name,
  logo,
  icon = "building",
  className,
  unstyled = false,
}: OrganizationMarkProps) {
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt ?? `${name} logo`}
        width={96}
        height={96}
        className={cn(
          "size-16 shrink-0 rounded-control object-contain",
          !unstyled && "border border-border bg-surface p-1.5 shadow-card",
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
        "flex size-12 shrink-0 items-center justify-center rounded-control text-accent",
        !unstyled && "border border-border bg-surface-secondary",
        className,
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}
