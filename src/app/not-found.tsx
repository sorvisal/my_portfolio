import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container as="section" className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/projects" variant="secondary" size="lg">
          View projects
        </Button>
      </div>
    </Container>
  );
}
