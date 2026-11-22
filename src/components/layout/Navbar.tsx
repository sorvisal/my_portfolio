"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((item) => item.sectionId);
const MENU_ID = "mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md transition-[border-color,box-shadow]",
        scrolled ? "border-border shadow-card" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="inline-flex min-h-10 items-center gap-2.5 rounded-control font-semibold tracking-tight transition-colors hover:text-accent active:text-accent-hover"
          aria-label={`${profile.brand} — home`}
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-control bg-accent font-mono text-sm text-white"
          >
            V
          </span>
          <span>{profile.brand}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "inline-flex h-10 items-center rounded-control px-3 text-sm font-medium transition-colors active:bg-surface-secondary",
                      isActive
                        ? "bg-accent-soft text-accent active:bg-accent-soft"
                        : "text-muted hover:bg-surface-secondary hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#contact" variant="secondary" className="hidden md:inline-flex">
            <MessageCircle className="size-4" aria-hidden="true" />
            Contact
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-control text-foreground transition-colors hover:bg-surface-secondary active:bg-surface-secondary md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id={MENU_ID}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="absolute inset-x-0 top-full border-b border-border bg-background shadow-card-hover md:hidden"
          >
            <Container>
              <nav aria-label="Mobile" className="py-4">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = isHome && activeSection === item.sectionId;
                    return (
                      <li key={item.sectionId}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "location" : undefined}
                          className={cn(
                            "flex min-h-12 items-center rounded-control px-3 text-base font-medium transition-colors active:bg-surface-secondary",
                            isActive
                              ? "bg-accent-soft text-accent active:bg-accent-soft"
                              : "text-foreground hover:bg-surface-secondary",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {profile.resumePath && (
                  <Button
                    href={profile.resumePath}
                    target="_blank"
                    size="lg"
                    className="mt-4 w-full"
                    onClick={closeMenu}
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    View CV
                  </Button>
                )}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}