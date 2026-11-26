import { OrganizationMark } from "@/components/ui/OrganizationMark";
import type { AcademicRecord } from "@/types";

export function AcademicBackground({ record }: { record: AcademicRecord }) {
  return (
    <article
      aria-labelledby={`academic-${record.id}-title`}
      className="grid h-full grid-cols-[3.5rem_1fr] items-start gap-4 rounded-card border border-border bg-background p-5 transition-[border-color,box-shadow] duration-200 hover:border-accent/30 hover:shadow-card-hover motion-reduce:transition-none"
    >
      <OrganizationMark
        name={record.institution}
        logo={record.institutionLogo}
        icon="academic"
        unstyled
        className="size-14 border-0 bg-transparent p-0 shadow-none"
      />

      <div className="grid min-w-0 gap-2">
        <div>
          <h4
            id={`academic-${record.id}-title`}
            className="break-words text-base font-semibold leading-snug tracking-tight"
          >
            {record.degree}
          </h4>
          <p className="mt-1 text-sm text-muted">{record.institution}</p>
        </div>

        {record.summary && <p className="text-sm leading-relaxed text-muted">{record.summary}</p>}

        <p className="font-mono text-xs not-italic leading-relaxed text-muted">
          {[record.period, record.status].filter(Boolean).join(" · ")}
        </p>
      </div>
    </article>
  );
}
