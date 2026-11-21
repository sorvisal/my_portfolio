import type { Project } from "@/types";

/** Only facts you provided. TODO: add technologies and real links yourself. */
export const projects: Project[] = [
  {
    slug: "autonomous-a8s",
    name: "Autonomous (A8S)",
    category: "Cloud & DevOps",
    tagline: "Cloud-native deployment platform.",
    description: "Autonomous (A8S) is a cloud-native deployment platform.",
    technologies: [],
    links: [],
  },
  {
    slug: "zestream",
    name: "ZeStream",
    category: "Web Platform",
    tagline: "Livestream and donation platform.",
    description: "ZeStream is a livestream and donation platform.",
    technologies: [],
    links: [],
  },
  {
    slug: "dbm-system",
    name: "DBM System",
    category: "Database",
    tagline: "Database management system.",
    description: "DBM System is a database management system.",
    technologies: [],
    links: [],
  },
  {
    slug: "aeu-employee-update-system",
    name: "AEU Employee Update System",
    category: "Enterprise",
    tagline: "Employee management application.",
    description: "The AEU Employee Update System is an employee management application.",
    technologies: [],
    links: [],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);