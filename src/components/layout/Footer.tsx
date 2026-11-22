import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navItems } from "@/data/navigation";
import { profile, socialLinks } from "@/data/profile";

export async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-semibold tracking-tight">{profile.brand}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {profile.name} — {profile.role}, based in {profile.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-muted transition-colors hover:text-foreground active:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {profile.resumePath && (
                <li>
                  <a
                    href={profile.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center text-muted transition-colors hover:text-foreground active:text-foreground"
                  >
                    View CV
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>

          {(socialLinks.length > 0 || profile.email) && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} profile (opens in a new tab)`}
                    className="inline-flex min-h-10 items-center transition-colors hover:text-accent active:text-accent"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
              {profile.email && (
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-10 items-center transition-colors hover:text-accent active:text-accent"
                  >
                    Email
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}