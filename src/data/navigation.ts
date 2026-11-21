import type { NavItem } from "@/types";
import { experience } from "@/data/experience";

interface SectionConfig extends NavItem {
  visible: boolean;
}

const sections: SectionConfig[] = [
  { label: "About", href: "/#about", sectionId: "about", visible: true },
  { label: "Skills", href: "/#skills", sectionId: "skills", visible: true },
  { label: "Projects", href: "/#projects", sectionId: "projects", visible: true },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
    visible: experience.length > 0,
  },
  { label: "Education", href: "/#education", sectionId: "education", visible: true },
  {
    label: "Certifications",
    href: "/#certifications",
    sectionId: "certifications",
    visible: true,
  },
  { label: "Contact", href: "/#contact", sectionId: "contact", visible: true },
];

/** Navigation only contains sections that actually render. */
export const navItems: NavItem[] = sections
  .filter((section) => section.visible)
  .map(({ label, href, sectionId }) => ({ label, href, sectionId }));

/** Two-digit section number based on the visible section order. */
export function getSectionNumber(sectionId: string): string {
  const index = navItems.findIndex((item) => item.sectionId === sectionId);
  return index === -1 ? "" : String(index + 1).padStart(2, "0");
}
