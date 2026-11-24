import type { ExperienceItem } from "@/types";

/**
 * Only information supplied by the profile owner is included here.
 * Optional fields such as logos and exact dates can be added when available.
 */
export const experience: ExperienceItem[] = [
    {
    id: "assistant-software-database",
    organization: "Software Development and Database Management Office",
    period: "2025 – Present", // TODO: replace with your real dates, e.g. "2023 – Present"
    title: "Assistant – Software Development & Database Management",
    description:
      "Supported software development and database management, building and maintaining web, mobile and API-based systems for university operations.",
    responsibilities: [
      "Developed and maintained mobile applications and the University Management System (UMS) to support university operations.",
      "Improved and updated Employee Management System workflows and business processes.",
      "Developed and maintained RESTful APIs to support application integration and data exchange.",
      "Built and maintained web applications using C#, ASP.NET Web Forms, ASP.NET Web API, React.js, Next.js and PHP Laravel.",
      "Deployed and hosted applications in production environments using Ubuntu Server and Cloudflare Tunnel.",
      "Implemented CI/CD workflows with GitHub Actions to automate application build and deployment.",
      "Managed databases, troubleshot application issues, and provided ongoing system maintenance and production support.",
      "Researched and applied Docker and containerization principles to understand application packaging, environment consistency and deployment workflows.",
      "Researched and applied CI/CD principles, including automated build, testing and deployment practices, to improve software delivery.",
    ],
    technologies: [
      "C#",
      "ASP.NET Web Forms",
      "ASP.NET Web API",
      "REST APIs",
      "React.js",
      "Next.js",
      "React Native Expo",
      "PHP Laravel",
      "SQL Server",
      "Ubuntu Server",
      "Cloudflare Tunnel",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "JWT"
    ],
    kind: "employment",
  },
   {
    id: "devops-engineering-journey",
    organization: "Personal learning & projects",
    period: "2026 – Present",
    title: "DevOps Engineering Journey",
    description:
      "A self-directed learning path following a DevOps I & II curriculum, together with personal projects. This entry documents study and practice, not employment.",
    responsibilities: [
      "Studying DevOps fundamentals and principles, including the Software Development Life Cycle (SDLC) and Agile methodologies.",
      "Learning cloud computing concepts on AWS and Google Cloud Platform (GCP).",
      "Practising Linux administration and Bash scripting.",
      "Working with Docker, Docker Compose and Docker Swarm for containerization.",
      "Using Git, GitHub and GitLab for version control.",
      "Learning CI/CD automation with Jenkins.",
      "Studying microservices architecture.",
      "Learning web server administration with Apache, Nginx and Tomcat, and load balancing with HAProxy.",
      "Learning configuration management with Ansible.",
      "Studying Infrastructure as Code (IaC) with AWS CloudFormation, AWS CDK and Terraform.",
    ],
    technologies: [
      "Python",
      "Go",
      "AWS",
      "Google Cloud Platform",
      "Linux",
      "Bash",
      "Docker",
      "Docker Compose",
      "Docker Swarm",
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Apache",
      "Nginx",
      "Tomcat",
      "HAProxy",
      "Argo CD",
      "Ansible",
      "Prometheus",
      "Grafana",
      "AWS CDK",
      "Terraform",
    ],
    kind: "learning",
  },
];
