import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types";

export function CertificationCard({ certification }: { certification: Certification }) {
  const details = [
    certification.issueDate ? { label: "Issued", value: certification.issueDate } : null,
    certification.expirationDate
      ? { label: "Valid through", value: certification.expirationDate }
      : null,
    certification.credentialId
      ? { label: "Credential ID", value: certification.credentialId }
      : null,
  ].filter((detail): detail is { label: string; value: string } => detail !== null);

  return (
    <article className="group flex h-full flex-col rounded-card border border-border bg-background p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover motion-reduce:transform-none motion-reduce:transition-none">
      <div className="flex items-start justify-between gap-4">
        {certification.certificateImage ? (
          <Image
            src={certification.certificateImage.src}
            alt={certification.certificateImage.alt ?? `${certification.name} certificate`}
            width={48}
            height={48}
            className="size-12 rounded-control border border-border object-contain p-1.5"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-control border border-border bg-surface text-accent"
          >
            <Award className="size-5" />
          </span>
        )}
        <span className="font-mono text-xs uppercase tracking-wider text-muted">Credential</span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight">{certification.name}</h3>
      <p className="mt-1 text-muted">{certification.issuer}</p>

      {details.length > 0 && (
        <dl className="mt-5 grid gap-3 border-t border-border pt-4 text-sm">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-baseline justify-between gap-4">
              <dt className="text-muted">{detail.label}</dt>
              <dd className="text-right font-medium">{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {certification.verificationUrl && (
        <a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-10 items-center gap-1.5 self-start pt-6 text-sm font-medium text-accent transition-colors hover:text-accent-hover hover:underline active:text-accent-hover"
        >
          Verify credential
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
