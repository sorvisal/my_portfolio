import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
    {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML","CSS","JavaScript","React", "Next.js", "TypeScript", "Tailwind CSS","Android Application"],
  },
    {
    id: "devops",
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "Helm", "Jenkins", "Argo CD", "Ansible", "GitHub Actions", "CI/CD", "Prometheus & Grafana", "Nginx","AWS", "Terraform", "Cloudflare Tunnel"],
  },
  {
    id: "backend",
    title: "Backend & Database",
    skills: ["ASP.NET Core","C#","SQL Server","EF Core", "RDBMS", "Laravel","REST APIs","JWT"],
  },
  {
    id: "database",
    title: "Tools & Operating System",
    skills: ["Git","Github","Linux","Ubuntu Server","Network Security"],
  }
  
];