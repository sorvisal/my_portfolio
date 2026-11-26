import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { formatMonthYear } from "@/lib/utils";
import type { Certification } from "@/types";

export function CertificationCard({ certification }: { certification: Certification }) {
  const {
    id,
    name,
    issuer,
    credentialId,
    issueDate,
    expirationDate,
    certificateImage,
    verificationUrl,
  } = certification;

  const meta = [
    credentialId,
    expirationDate
      ? `valid through ${formatMonthYear(expirationDate)}`
      : issueDate
        ? `issued ${formatMonthYear(issueDate)}`
        : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      aria-labelledby={`certification-${id}-title`}
      className="flex h-full flex-col rounded-card border border-border bg-background p-5 transition-[border-color,box-shadow] duration-200 hover:border-accent/30 hover:shadow-card-hover motion-reduce:transition-none"
    >
      {certificateImage ? (
        <Image
          src={certificateImage.src}
          alt={certificateImage.alt ?? `${name} logo`}
          width={104}
          height={104}
          className="size-13 rounded-control border border-border bg-background object-contain p-1.5"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex size-13 items-center justify-center rounded-control border border-border bg-accent-soft text-accent"
        >
          <ShieldCheck className="size-6" />
        </span>
      )}

      <h4
        id={`certification-${id}-title`}
        className="mt-5 break-words text-base font-semibold leading-snug tracking-tight"
      >
        {name}
      </h4>
      <p className="mt-1 text-sm text-muted">{issuer}</p>

      {meta && <p className="mt-auto pt-4 font-mono text-xs leading-relaxed text-muted">{meta}</p>}

      {verificationUrl && (
        <a
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${name} credential (opens in a new tab)`}
          className="mt-3 inline-flex min-h-10 items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover hover:underline active:text-accent-hover"
        >
          Verify credential
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
