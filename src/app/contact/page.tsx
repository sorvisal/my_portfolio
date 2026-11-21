import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/ui/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Sor Visal about backend and DevOps opportunities.",
  path: "/contact",
  keywords: ["Backend Engineer", "DevOps Engineer", "Contact"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Let's connect" title="Get in touch" />
      <Contact />
    </>
  );
}
