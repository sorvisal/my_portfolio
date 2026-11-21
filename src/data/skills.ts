import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    skills: ["C#", "ASP.NET Core", "EF Core", "REST APIs"],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: ["Linux", "Ubuntu Server", "Docker", "GitHub Actions", "CI/CD", "Cloudflare Tunnel"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["SQL Server", "MySQL", "RDBMS"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];