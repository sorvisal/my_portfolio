import { ArrowUpRight, Send } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { socialLinks } from "@/data/profile";
import { cn } from "@/lib/utils";

const platformIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  telegram: Send,
} as const;

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("w-full", className)}>
      <ul className="flex flex-wrap gap-2" aria-label="Social media profiles">
        {socialLinks.map((link) => {
          const Icon = platformIcons[link.platform];

          return (
            <li key={link.platform}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} profile (opens in a new tab)`}
                className={cn(
                  "group inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-surface/80 px-3 py-2 text-sm font-medium text-muted shadow-card",
                  "transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out",
                  "hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface hover:text-accent hover:shadow-card-hover active:translate-y-0",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  "motion-reduce:transform-none motion-reduce:transition-none",
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span>{link.name}</span>
                <ArrowUpRight
                  className="size-3.5 shrink-0 text-muted transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
