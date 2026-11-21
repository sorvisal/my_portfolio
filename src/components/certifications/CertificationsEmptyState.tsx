import { Award } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function CertificationsEmptyState() {
  return (
    <Reveal className="mt-10">
      <div className="rounded-card border border-dashed border-border bg-background p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-control bg-accent-soft text-accent"
          >
            <Award className="size-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">No credentials published yet</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              Officially earned certifications will appear here with the issuer, issue date,
              validity, credential ID and a verification link.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Courses and self-study activities are intentionally kept separate and are not
              presented as certifications.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
