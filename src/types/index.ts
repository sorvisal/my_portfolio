export interface SocialLink {
  label: string;
  href: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
}

export interface Profile {
  name: string;
  brand: string;
  role: string;
  location: string;
  headline: string;
  summary: string;
  education: Education;
  email?: string;
  socials: SocialLink[];
  resumePath: string;
  siteUrl: string;
}

export type SkillCategoryId = "backend" | "devops" | "database" | "frontend";

export interface SkillGroup {
  id: SkillCategoryId;
  title: string;
  skills: string[];
}

export type ProjectCategory = "Cloud & DevOps" | "Web Platform" | "Database" | "Enterprise";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}