import type { NavItem } from "@/types";
import { experience } from "@/data/experience";

export const navItems: NavItem[] = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  ...(experience.length > 0
    ? [{ label: "Experience", href: "/#experience", sectionId: "experience" }]
    : []),
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];