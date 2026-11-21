import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

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
                  <Link href={item.href} className="text-muted transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumePath}
                  download
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>

          {(profile.socials.length > 0 || profile.email) && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              {profile.email && (
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="transition-colors hover:text-foreground"
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