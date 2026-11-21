import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Sor Visal",
  brand: "VisalSOR",
  role: "Backend & DevOps Engineer",
  location: "Cambodia",
  headline: "Backend & DevOps Engineer",
  summary:
    "A software developer transitioning toward DevOps Engineering, with experience in C#, ASP.NET Core, SQL Server, backend development, Linux server administration, Docker, and CI/CD automation.",
  education: {
    school: "Asia Euro University (AEU)",
    degree: "Bachelor's Degree", // TODO: confirm your degree level
    field: "Computer Science",
  },
  // TODO: add your real contact details.
  email: undefined,
  photo: {
    src: "/images/visalsor.png",
    alt: "Portrait of Sor Visal",
  },
  socials: [
    // { label: "GitHub", href: "https://github.com/your-username" },
  ],
  // TODO: add the CV at public/resume/sor-visal-cv.pdf (or update this path).
  resumePath: "/resume/sor-visal-cv.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};