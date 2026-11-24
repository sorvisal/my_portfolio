"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navbarItems } from "@/data/navigation";
import { profile, socialLinks } from "@/data/profile";
import type { SocialLinkConfig } from "@/types";
import { cn } from "@/lib/utils";

const sectionIds = navbarItems.map((item) => item.sectionId);
const MENU_ID = "mobile-menu";
const brandInitials = profile.name
  .split(/\s+/)
  .map((word) => word[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

type NavbarSocialPlatform = "github" | "linkedin";
type NavbarSocialLink = SocialLinkConfig & { platform: NavbarSocialPlatform };

const navbarSocialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const;

const navbarSocialLinks = socialLinks.filter(
  (link): link is NavbarSocialLink =>
    link.platform === "github" || link.platform === "linkedin",
);

function SocialIconLink({ link, className }: { link: NavbarSocialLink; className?: string }) {
  const Icon = navbarSocialIcons[link.platform];
  const isPlaceholder = link.href.includes("YOUR-USERNAME");
  const label = isPlaceholder
    ? `${link.name} — placeholder URL, update src/data/profile.ts`
    : `${link.name} profile (opens in a new tab)`;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      data-placeholder={isPlaceholder ? "true" : undefined}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-secondary hover:text-foreground active:bg-surface-secondary",
        className,
      )}
    >
      <Icon className="size-[18px]" aria-hidden="true" />
    </a>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const pillTransition = reduceMotion
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 380, damping: 32 } as const);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border transition-all duration-500",
          scrolled || open
            ? "border-border bg-background/85 shadow-card-hover backdrop-blur-md"
            : "border-transparent bg-background/0",
        )}
      >
        <nav
          aria-label="Primary"
          className="flex h-14 items-center justify-between gap-4 pl-4 pr-2"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2.5 rounded-control font-semibold tracking-tight text-foreground transition-colors hover:text-accent active:text-accent-hover"
            aria-label={`${profile.brand} — home`}
          >
            {/* <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-indigo font-mono text-xs font-bold text-white shadow-card"
            >
              {brandInitials}
            </span> */}
            <span className="whitespace-nowrap text-sm sm:text-base">{profile.brand}</span>
          </Link>

          <ul className="hidden items-center rounded-full border border-border/70 bg-surface-secondary/60 p-1 lg:flex">
            {navbarItems.map((item) => {
              const isActive = isHome && activeSection === item.sectionId;
              return (
                <li key={item.sectionId} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-foreground/[0.08]"
                      transition={pillTransition}
                    />
                  )}
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      isActive ? "text-foreground" : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 md:flex">
              {navbarSocialLinks.map((link) => (
                <SocialIconLink key={link.platform} link={link} />
              ))}
            </div>

            <Button
              href="/#contact"
              className="ml-1.5 hidden h-9 gap-1 rounded-lg bg-gradient-to-r from-accent to-accent-indigo px-3.5 shadow-card transition-shadow hover:shadow-card-hover sm:inline-flex"
            >
              Contact
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={MENU_ID}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-secondary active:bg-surface-secondary lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={MENU_ID}
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }
              }
              className="overflow-hidden lg:hidden"
            >
              <nav aria-label="Mobile" className="border-t border-border px-2 py-2">
                <ul className="grid gap-0.5">
                  {navbarItems.map((item, index) => {
                    const isActive = isHome && activeSection === item.sectionId;
                    return (
                      <motion.li
                        key={item.sectionId}
                        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { delay: index * 0.03, duration: 0.2 }
                        }
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "location" : undefined}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-base transition-colors",
                            isActive
                              ? "bg-surface-secondary text-foreground"
                              : "text-muted hover:bg-surface-secondary/70 hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                {profile.resumePath && (
                  <Button
                    href={profile.resumePath}
                    target="_blank"
                    size="md"
                    className="mt-2 w-full"
                    onClick={closeMenu}
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    View CV
                  </Button>
                )}

                <div className="mt-2 flex items-center border-t border-border px-3 pb-1 pt-3 md:hidden">
                  <ul className="flex items-center gap-1" aria-label="Social media profiles">
                    {navbarSocialLinks.map((link) => (
                      <li key={link.platform}>
                        <SocialIconLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
