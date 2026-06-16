#!/usr/bin/env node

import { neon } from "@neondatabase/serverless";

const databaseUrl =
    process.env.DATABASE_URL?.trim() || process.env.NEON_DATABASE_URL?.trim();

if (!databaseUrl) {
    console.error("Missing DATABASE_URL or NEON_DATABASE_URL");
    process.exit(1);
}

const sql = neon(databaseUrl);

const projects = [
  {
    id: 1,
    title: "Smart Match - Internship & Freelance Matching Platform",
    slug: "smart-match-internship-freelance-platform",
    shortDescription:
      "A full-stack matching platform for candidates, recruiters, companies, offers, applications, notifications, and AI-assisted matching results.",
    category: "Full-Stack Platforms",
    themeKey: "slate",
    bgColor: "bg-slate-950",
    imageSrc: "/images/projects/smart-match.png",
    imageAlt: "Smart Match recruitment analytics dashboard",
    description:
      "Smart Match is an academic full-stack platform designed around internship and freelance matching. It shows how I think through roles, data models, API boundaries, and recruiter/candidate workflows.",
    problem:
      "Internship and freelance matching involves many connected steps: candidate profiles, company pages, recruiter offers, applications, saved opportunities, notifications, and admin validation. Managing those flows in separate tools makes the process hard to follow.",
    solution:
      "I structured the project as a Spring Boot and MongoDB backend with REST endpoints for users, profiles, companies, offers, applications, subscriptions, payments, notifications, and AI matching results. The front-office and back-office flows were planned for Angular and Expo/React Native interfaces with role-based navigation.",
    result:
      "This project demonstrates junior full-stack skills across API design, database modelling, authentication flows, admin dashboards, mobile screens, Docker setup, Swagger documentation, and delivery planning.",
    keyFeatures: [
      "Candidate and recruiter profile flows",
      "Offer, application, favorite, and notification modules",
      "Role-based admin and back-office planning",
      "API documentation and delivery checklist",
    ],
    learned:
      "I learned how important it is to define roles, entities, and API contracts before building screens, especially in a platform with several connected user journeys.",
    techStack: [
      "Spring Boot",
      "MongoDB",
      "Angular",
      "React Native",
      "Expo",
      "Docker",
      "Firebase Auth",
      "Swagger",
    ],
    screenshots: ["/images/projects/smart-match.png"],
    nextImprovements: [
      "Add a live deployment for the main web interface",
      "Improve README with screenshots and setup flow",
      "Add demo credentials or a guided walkthrough",
      "Add automated API tests for core matching flows",
    ],
    githubLink: "https://github.com/HichamxMahboub/Smart-Internship---Freelance-Matching-Platform",
  },
  {
    id: 2,
    title: "MarketHub",
    slug: "markethub",
    shortDescription:
      "A professional .NET 8 marketplace backend API with role-based access, marketplace workflows, PostgreSQL persistence, Swagger, Docker, tests, and CI.",
    category: "Backend API / Marketplace Platform",
    themeKey: "neutral",
    bgColor: "bg-neutral-950",
    imageAlt: "MarketHub backend API project",
    description:
      "MarketHub is a professional marketplace backend API built with .NET 8, ASP.NET Core, Entity Framework Core, PostgreSQL, JWT authentication, Swagger, Docker, unit tests, and GitHub Actions CI.",
    problem:
      "The project is now a backend-first marketplace platform, so the main challenge was organizing real API boundaries for roles, products, carts, orders, reviews, authentication, persistence, and documentation.",
    solution:
      "I structured MarketHub as a layered ASP.NET Core API with EF Core data access, PostgreSQL persistence, JWT-secured role flows for Admin, Vendor, and Customer users, Swagger API documentation, Dockerized development, unit tests, and a GitHub Actions CI workflow.",
    result:
      "This project demonstrates backend API development with .NET 8, relational data modelling, role-based authorization, marketplace domain workflows, automated verification, containerized setup, and clear delivery documentation.",
    keyFeatures: [
      "Clean layered architecture",
      "Admin, Vendor, and Customer roles",
      "Product, category, cart, order, and review management",
      "PostgreSQL persistence with EF Core",
      "JWT authentication",
      "Swagger API documentation",
      "Dockerized development environment",
      "Unit tests and CI workflow",
    ],
    learned:
      "I learned to approach marketplace work from the API contract first: clear layers, explicit roles, predictable persistence, and repeatable verification make the platform easier to test and extend.",
    techStack: [
      ".NET 8",
      "ASP.NET Core",
      "EF Core",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Docker",
      "GitHub Actions",
    ],
    screenshots: [],
    nextImprovements: [
      "Publish the live API when deployment is ready",
      "Publish the hosted Swagger documentation when deployment is ready",
      "Expand integration tests for cart, order, and review workflows",
      "Add deployment notes for the production database and API environment",
    ],
    statusItems: [
      { label: "Live API", value: "Coming soon" },
      { label: "Swagger", value: "Coming soon" },
    ],
    githubLink: "https://github.com/HichamxMahboub/marketplace-hub",
  },
  {
    id: 3,
    title: "Competency Analytics Assistant",
    slug: "competency-analytics-assistant",
    shortDescription:
      "A desktop and web assistant for importing competency Excel sheets, analyzing student results, and preparing printable reports.",
    category: "Dashboards & Analytics",
    themeKey: "blue",
    bgColor: "bg-blue-950",
    imageSrc: "/images/projects/competency-analytics-assistant.png",
    imageAlt: "Competency analytics dashboard",
    description:
      "Competency Analytics Assistant is a bilingual FR/AR analytics tool for teachers who work with structured Excel files and need faster evaluation summaries.",
    problem:
      "Teachers often manage competency data inside complex spreadsheets. Reading the file structure manually, calculating averages, identifying weak competencies, and preparing printable summaries can take time and introduce errors.",
    solution:
      "I built the project around Excel import, local project storage, competency detection, student score parsing, dashboard statistics, bilingual UI support, and printable reporting views. The desktop version uses Electron while the web version keeps the same React interface model.",
    result:
      "This project demonstrates data parsing, local persistence, dashboard thinking, reporting interfaces, desktop packaging concerns, and empathy for non-technical users who need reliable internal tools.",
    keyFeatures: [
      "Excel import and competency detection",
      "Student score parsing and statistics",
      "Bilingual FR/AR interface planning",
      "Printable reporting pages for classroom use",
    ],
    learned:
      "I learned to design around messy input data and to keep analytics interfaces simple enough for users who mainly need decisions, not technical details.",
    techStack: [
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "Excel Parsing",
      "Charts",
      "i18n",
      "Local Storage",
    ],
    screenshots: ["/images/projects/competency-analytics-assistant.png"],
    nextImprovements: [
      "Add sample anonymized competency sheets for recruiters to test",
      "Improve README with screenshots and report examples",
      "Add validation tests for Excel parsing edge cases",
      "Prepare a short video demo of the analysis flow",
    ],
    githubLink: "https://github.com/HichamxMahboub/Assistant-Analyse-Competences-v1.0.0",
    liveLink: "https://project-seven-liard-45.vercel.app",
  },
  {
    id: 4,
    title: "Social Media Command Center",
    slug: "social-media-command-center",
    shortDescription:
      "A dashboard concept for planning posts, reviewing channel activity, tracking content status, and organizing social media workflows.",
    category: "Dashboards & Analytics",
    themeKey: "slate",
    bgColor: "bg-gray-950",
    imageSrc: "/images/projects/social-media-command-center.png",
    imageAlt: "Social media command centre dashboard",
    description:
      "Social Media Command Center is a dashboard-focused project for organizing content operations across multiple channels and campaign states.",
    problem:
      "Social media work can become scattered across calendars, spreadsheets, approvals, content drafts, and performance notes. Teams need one place to see what is planned, published, waiting for review, or needing action.",
    solution:
      "I designed the application around a command-center dashboard with post planning, channel filters, content status tracking, task-style views, campaign summaries, and metrics cards that make the workflow easier to scan.",
    result:
      "This project highlights UI organization, dashboard layout, state-based workflows, data visualization patterns, and the kind of internal tooling often used in digital transformation and marketing operations.",
    keyFeatures: [
      "Content planning and campaign status views",
      "Channel filters and post review workflow",
      "Dashboard cards for activity and priorities",
      "Responsive layout for scanning operational data",
    ],
    learned:
      "I learned how dashboard screens need clear hierarchy, concise labels, and consistent states so users can understand what needs attention quickly.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dashboard UI",
      "Charts",
      "Workflow Design",
    ],
    screenshots: ["/images/projects/social-media-command-center.png"],
    nextImprovements: [
      "Add a live demo with safe mock social data",
      "Improve API documentation for auth and analytics endpoints",
      "Add dashboard screenshots to the README",
      "Add tests for authentication and scheduled-post flows",
    ],
    githubLink: "https://github.com/HichamxMahboub/social_media_tool",
  },
  {
    id: 5,
    title: "Freelance Manager",
    slug: "freelance-manager",
    shortDescription:
      "A management tool concept for tracking clients, missions, invoices, tasks, deadlines, and project status in one workspace.",
    category: "Digital Tools",
    themeKey: "neutral",
    bgColor: "bg-zinc-950",
    imageSrc: "/images/projects/freelance-manager.png",
    imageAlt: "Freelance management dashboard",
    description:
      "Freelance Manager is a practical management tool for independent work, built around the daily needs of tracking missions, clients, deliverables, and payments.",
    problem:
      "Freelancers often manage clients, tasks, deadlines, quotes, invoices, and project notes across separate tools. That makes it easy to lose context and hard to see the status of active work.",
    solution:
      "I planned the product around client records, mission boards, task tracking, invoice states, due dates, status filters, and dashboard summaries. The goal is a simple internal system rather than an overcomplicated SaaS product.",
    result:
      "This project shows how I translate an operational problem into data entities, user flows, reusable components, and dashboard screens suitable for a business support tool.",
    keyFeatures: [
      "Client and mission records",
      "Task, deadline, and invoice status tracking",
      "Workspace dashboard for active work",
      "Simple CRUD-oriented project structure",
    ],
    learned:
      "I learned to prioritize everyday workflow clarity over unnecessary features, especially for tools that should reduce administrative friction.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "CRUD",
      "Dashboard Design",
    ],
    screenshots: ["/images/projects/freelance-manager.png"],
    nextImprovements: [
      "Add packaged release instructions for desktop users",
      "Improve README with screenshots of client and KPI screens",
      "Add sample CSV exports for review",
      "Add tests for task, budget, and reporting logic",
    ],
    githubLink: "https://github.com/HichamxMahboub/freelance_manager",
  },
  {
    id: 6,
    title: "Nova AI Landing Page",
    slug: "nova-ai-landing-page",
    shortDescription:
      "A clean responsive landing page concept for an AI product, focused on visual hierarchy, messaging, and conversion-oriented sections.",
    category: "Web Interfaces",
    themeKey: "blue",
    bgColor: "bg-indigo-950",
    imageSrc: "/images/projects/nova-ai-landing-page.png",
    imageAlt: "Nova AI assistant landing page",
    description:
      "Nova AI Landing Page is a front-end project focused on building a polished, responsive product page for an AI-themed software offer.",
    problem:
      "Early product pages often explain the product poorly, bury the main call to action, and become difficult to read on mobile screens. A landing page needs clear hierarchy before it needs visual effects.",
    solution:
      "I structured the page around a direct hero section, feature blocks, proof-oriented sections, pricing or CTA areas, responsive spacing, and accessible text contrast. The emphasis is on clean implementation and recruiter-readable front-end decisions.",
    result:
      "This project demonstrates responsive UI execution, component composition, Tailwind styling, marketing-page structure, and attention to clean presentation without claiming production metrics.",
    keyFeatures: [
      "Responsive hero and CTA sections",
      "Feature and value proposition blocks",
      "Clean component composition",
      "Accessible contrast and mobile spacing",
    ],
    learned:
      "I learned that front-end polish depends on spacing, hierarchy, copy clarity, and responsive constraints as much as it depends on visual style.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI Components",
    ],
    screenshots: ["/images/projects/nova-ai-landing-page.png"],
    nextImprovements: [
      "Add more real content sections instead of generic landing-page copy",
      "Improve accessibility checks for interactive sections",
      "Add before-and-after responsive screenshots to the README",
      "Add a small component test suite for key UI sections",
    ],
    githubLink: "https://github.com/HichamxMahboub/nova-ai-landing",
    liveLink: "https://nova-ai-landing-ten.vercel.app",
  },
];


async function seed() {
    await sql`create table if not exists projects (
    id serial primary key,
    slug text unique,
    title text not null,
    short_description text not null,
    category text not null,
    theme_key text,
    bg_color text not null default 'bg-gray-900',
    image_src text not null,
    image_alt text not null,
    description text not null,
    problem text not null,
    solution text not null,
    result text not null,
    key_features text[] not null default '{}',
    learned text not null default '',
    tech_stack text[] not null default '{}',
    screenshots text[] not null default '{}',
    next_improvements text[] not null default '{}',
    status_items jsonb not null default '[]'::jsonb,
    live_link text,
    github_link text
  )`;

    await sql`alter table projects add column if not exists key_features text[] not null default '{}'`;
    await sql`alter table projects add column if not exists learned text not null default ''`;
    await sql`alter table projects add column if not exists next_improvements text[] not null default '{}'`;
    await sql`alter table projects add column if not exists status_items jsonb not null default '[]'::jsonb`;

    for (const project of projects) {
        await sql`
      insert into projects (
        id,
        slug,
        title,
        short_description,
        category,
        theme_key,
        bg_color,
        image_src,
        image_alt,
        description,
        problem,
        solution,
        result,
        key_features,
        learned,
        tech_stack,
        screenshots,
        next_improvements,
        status_items,
        live_link,
        github_link
      ) values (
        ${project.id},
        ${project.slug},
        ${project.title},
        ${project.shortDescription},
        ${project.category},
        ${project.themeKey ?? null},
        ${project.bgColor},
        ${project.imageSrc ?? ""},
        ${project.imageAlt ?? project.title},
        ${project.description},
        ${project.problem},
        ${project.solution},
        ${project.result},
        ${project.keyFeatures},
        ${project.learned},
        ${project.techStack},
        ${project.screenshots},
        ${project.nextImprovements ?? []},
        ${JSON.stringify(project.statusItems ?? [])}::jsonb,
        ${project.liveLink ?? null},
        ${project.githubLink ?? null}
      )
      on conflict (id) do update set
        slug = excluded.slug,
        title = excluded.title,
        short_description = excluded.short_description,
        category = excluded.category,
        theme_key = excluded.theme_key,
        bg_color = excluded.bg_color,
        image_src = excluded.image_src,
        image_alt = excluded.image_alt,
        description = excluded.description,
        problem = excluded.problem,
        solution = excluded.solution,
        result = excluded.result,
        key_features = excluded.key_features,
        learned = excluded.learned,
        tech_stack = excluded.tech_stack,
        screenshots = excluded.screenshots,
        next_improvements = excluded.next_improvements,
        status_items = excluded.status_items,
        live_link = excluded.live_link,
        github_link = excluded.github_link
    `;
    }

    console.log(`Seeded ${projects.length} projects into Neon.`);
}

seed().catch((error) => {
    console.error("Failed to seed Neon:", error);
    process.exit(1);
});
