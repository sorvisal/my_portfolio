export interface SocialLink {
  label: string;
  href: string;
}

/** Local path, or a remote URL covered by next.config.ts image patterns. */
export interface ImageAsset {
  src: string;
  alt: string;
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
  photo?: ImageAsset;
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

export type ExperienceKind = "employment" | "learning";

export interface ExperienceItem {
  id: string;
  organization: string;
  organizationLogo?: ImageAsset;
  period: string;
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  kind: ExperienceKind;
  location?: string;
}

export interface AcademicRecord {
  id: string;
  institution: string;
  institutionLogo?: ImageAsset;
  degree: string;
  period: string;
  status: string;
  summary?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  certificateImage?: ImageAsset;
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}