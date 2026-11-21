import type { ExperienceItem } from "@/types";

/**
 * Only information supplied by the profile owner is included here.
 * Optional fields such as logos and exact dates can be added when available.
 */
export const experience: ExperienceItem[] = [
  {
    id: "assistant-software-database",
    organization: "Software Development and Database Management",
    period: "Not specified",
    title: "Assistant",
    description:
      "Supported software development and database management across C# and ASP.NET Core applications.",
    responsibilities: [
      "Developed and maintained C# and ASP.NET Core applications.",
      "Developed and maintained REST APIs.",
      "Managed SQL Server and relational databases.",
      "Assisted with application deployment and troubleshooting.",
    ],
    technologies: ["C#", "ASP.NET Core", "REST APIs", "SQL Server", "Relational databases"],
    kind: "employment",
  },
  {
    id: "devops-engineering-journey",
    organization: "Personal learning & projects",
    period: "Ongoing",
    title: "DevOps Engineering Journey",
    description:
      "A self-directed learning path and personal projects. This entry documents practice, not employment.",
    responsibilities: [
      "Practising Linux server administration.",
      "Working with Docker for local development and deployment practice.",
      "Exploring CI/CD automation through personal projects.",
    ],
    technologies: ["Linux", "Docker", "CI/CD"],
    kind: "learning",
  },
];
