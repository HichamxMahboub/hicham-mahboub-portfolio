import type { EducationItem, ExperienceItem, Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"],
  },
  {
    category: "Backend & APIs",
    items: ["Spring Boot", "Node.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Dashboards & Tools",
    items: ["Admin Panels", "Charts", "Excel Parsing", "Electron", "Reporting UI"],
  },
  {
    category: "Delivery",
    items: ["Docker", "GitHub", "Vercel", "Swagger", "Documentation"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack Project Builder",
    company: "Academic & Portfolio Projects",
    duration: "2025 - Present",
    description:
      "Building full-stack academic and portfolio projects from requirements to implementation, including APIs, dashboards, database models, mobile screens, documentation, and presentation material.",
  },
  {
    id: 2,
    role: "Summer Intern",
    company: "Stage d'ete",
    duration: "2025",
    description:
      "Completed a summer internship focused on observing professional workflows, understanding company organization, and documenting practical experience in a structured report.",
  },
  {
    id: 3,
    role: "Frontend & Dashboard Developer",
    company: "Personal Learning Projects",
    duration: "2024 - Present",
    description:
      "Designing responsive user interfaces, reusable components, dashboard screens, and CRUD-oriented layouts for web applications and internal tool concepts.",
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Cycle Ingenieur",
    institution: "Ecole des Sciences de l'Information - ESI",
    year: "Present",
    field: "Information Systems Engineering and Digital Transformation",
  },
  {
    id: 2,
    degree: "Technical & Mathematical Background",
    institution: "Academic training",
    year: "Ongoing",
    field: "Software engineering, mathematics, modelling, and digital systems",
  },
];
