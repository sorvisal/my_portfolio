import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";

export async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-4">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}