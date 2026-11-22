import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";
import { OrganizationMark } from "@/components/ui/OrganizationMark";
import type { AcademicRecord } from "@/types";

export function AcademicBackground({ record }: { record: AcademicRecord }) {
  return (
    <Reveal className="mt-6">
      <article
        aria-labelledby={`academic-${record.id}-title`}
        className="rounded-card border border-border bg-surface shadow-card"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex items-start gap-5">
            <OrganizationMark
              name={record.institution}
              logo={record.institutionLogo}
              icon="academic"
            />
            <div>
              <p className="font-mono text-sm font-medium text-accent">Current programme</p>
              <h3
                id={`academic-${record.id}-title`}
                className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {record.degree}
              </h3>
              <p className="mt-1 text-lg text-foreground">{record.institution}</p>
              {record.summary && (
                <p className="mt-4 max-w-xl leading-relaxed text-muted">{record.summary}</p>
              )}
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-5 lg:min-w-64 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">Period</dt>
              <dd className="mt-1.5 font-medium">{record.period}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">Status</dt>
              <dd className="mt-1.5">
                <Badge variant="accent">{record.status}</Badge>
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </Reveal>
  );
}
