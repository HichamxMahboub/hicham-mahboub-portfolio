import type { ProjectItem } from "@/types";

export const projectCategories = [
  "View All",
  "Backend API / Marketplace Platform",
  "Full-Stack Platforms",
  "Simulation Analytics / Full-Stack Data Platform",
  "Education Analytics / Desktop App",
  "Dashboards & Analytics",
  "Digital Tools",
  "Web Interfaces",
] as const;

export const projects: ProjectItem[] = [
  {
    id: 7,
    title: "SmartSim Analytics",
    slug: "smartsim-analytics",
    shortDescription:
      "A full-stack simulation analytics platform for CSV/JSON exports, deterministic Python analysis, KPIs, anomaly detection, trend and stability checks, and PDF reporting.",
    category: "Simulation Analytics / Full-Stack Data Platform",
    themeKey: "cyan",
    bgColor: "bg-cyan-950",
    imageSrc: "/images/projects/smartsim-analytics.svg",
    imageAlt: "SmartSim Analytics simulation analytics preview showing CSV/JSON input, Python analysis, dashboard output, and reporting",
    description:
      "SmartSim Analytics is a full-stack simulation analytics platform built with React, Node/Express, MongoDB, and Python. It ingests CSV/JSON simulation exports, runs deterministic Python analysis for KPIs, anomaly detection, trend and stability checks, and presents results through a dashboard with charts and PDF reporting.",
    problem:
      "Simulation exports can be difficult to review manually because the data is spread across rows, signals, and multiple derived measures. Teams need a clear way to validate the input, identify anomalies, understand stability, and present findings in a format that is easy to review.",
    solution:
      "I structured SmartSim Analytics around a React frontend, a Node/Express API, MongoDB persistence, and a deterministic Python analyzer. The backend validates uploads, confines analysis to uploaded files, and runs a bounded Python script that calculates KPIs, detects anomalies, evaluates trend and stability, and returns versioned JSON for the dashboard.",
    result:
      "This project demonstrates end-to-end simulation analytics, safer execution boundaries, recruiter-facing documentation, and a full-stack workflow that turns raw CSV/JSON exports into a readable dashboard and PDF report.",
    keyFeatures: [
      "CSV/JSON simulation data ingestion",
      "Python-powered deterministic analytics",
      "KPI extraction and anomaly detection",
      "Trend and stability analysis",
      "React dashboard with charts",
      "PDF reporting workflow",
      "Node/Express API with validation",
      "MongoDB-backed project storage",
      "Bounded Python execution for safer analysis",
      "Sample data and recruiter-facing documentation",
      "GitHub Actions CI",
    ],
    technicalDecisions: [
      "Separated the React dashboard, Node/Express API, MongoDB persistence, and Python analyzer so upload, storage, and analytics responsibilities stay explicit.",
      "Kept the Python analysis deterministic and bounded to uploaded CSV/JSON files instead of relying on generated or external data.",
      "Returned structured JSON from the analyzer so dashboard rendering, KPI review, anomaly checks, and PDF reporting share the same contract.",
    ],
    validation: [
      "Upload validation before analysis",
      "Deterministic KPI, anomaly, trend, and stability outputs",
      "Sample data and recruiter-facing documentation",
      "GitHub Actions CI listed in the project scope",
    ],
    ciStatus: "GitHub Actions CI configured",
    learned:
      "I learned how important it is to define stable input/output contracts, keep analytics deterministic, and treat execution boundaries as part of the product rather than an afterthought.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Vite",
      "Charts",
      "PDF reporting",
      "GitHub Actions",
    ],
    screenshots: [],
    nextImprovements: [
      "Add a live deployment when hosting is finalized",
      "Expand the dataset library with more simulation scenarios",
      "Add automated integration tests for upload and analysis flows",
      "Introduce a stored API demo once deployment is available",
    ],
    statusItems: [
      { label: "Live Demo", value: "Coming soon" },
      { label: "API Demo", value: "Coming soon" },
    ],
    githubLink: "https://github.com/HichamxMahboub/SmartSim-Analytics",
  },
  {
    id: 1,
    title: "Smart Match - Internship & Freelance Matching Platform",
    slug: "smart-match-internship-freelance-platform",
    shortDescription:
      "A full-stack matching platform for candidates, recruiters, companies, offers, applications, notifications, and AI-assisted matching results.",
    category: "Full-Stack Platforms",
    themeKey: "slate",
    bgColor: "bg-slate-950",
    imageSrc: "/images/projects/smart-match.webp",
    imageAlt: "Smart Match recruitment platform screenshot showing candidate and recruiter dashboard screens",
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
    technicalDecisions: [
      "Defined roles, entities, and API boundaries before committing to screens because the platform has candidate, recruiter, company, offer, and admin flows.",
      "Planned the Spring Boot and MongoDB backend around REST endpoints for profiles, companies, offers, applications, notifications, subscriptions, payments, and matching results.",
      "Separated front-office, back-office, and mobile interface planning so each role can keep a clear navigation model.",
    ],
    validation: [
      "API documentation and delivery checklist included in project scope",
      "Docker setup listed for repeatable development",
      "Next improvements include automated API tests for core matching flows",
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
    screenshots: ["/images/projects/smart-match.webp"],
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
    imageSrc: "/images/projects/markethub-backend-preview.svg",
    imageAlt: "MarketHub backend architecture preview for ASP.NET Core, Swagger, PostgreSQL, JWT, Docker, and CI",
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
    technicalDecisions: [
      "Designed a layered ASP.NET Core API around marketplace workflows, EF Core persistence, and PostgreSQL-backed entities.",
      "Modelled role-based authorization for Admin, Vendor, and Customer flows with JWT authentication.",
      "Kept Swagger, Docker, unit tests, and CI in the delivery scope so the backend can be reviewed beyond source code.",
    ],
    validation: [
      "Unit tests and CI workflow included in project scope",
      "Swagger/OpenAPI documentation for endpoint review",
      "Dockerized development environment",
      "Clear role, persistence, and marketplace workflow boundaries",
    ],
    ciStatus: "Unit tests and GitHub Actions CI workflow",
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
    title: "Assistant d'Analyse des Compétences",
    slug: "competency-analytics-assistant",
    shortDescription:
      "A local-first analytics assistant for teachers to import Excel competency reports, analyze class and student performance, identify strongest and weakest competencies, and generate printable reports with French/Arabic support.",
    category: "Education Analytics / Desktop App",
    themeKey: "blue",
    bgColor: "bg-blue-950",
    imageSrc: "/images/projects/competency-analytics-assistant.webp",
    imageAlt: "Assistant d'Analyse des Competences analytics dashboard screenshot with Excel import and class competency reporting",
    description:
      "Assistant d'Analyse des Compétences is a local-first React, TypeScript, Vite, and Electron analytics assistant for teachers. It imports Excel competency reports, validates scores, calculates class, student, and competency statistics, visualizes performance with Recharts, supports French/Arabic i18n, and generates printable reports while keeping student data local.",
    problem:
      "Teachers often receive competency results in Excel reports, but manually checking scores, calculating averages, comparing students, and finding competencies that need intervention can be slow and error-prone.",
    solution:
      "I rebuilt the project as a local-first desktop analytics assistant with Excel competency report import, score validation, class and student statistics, competency-level analysis, strongest and weakest competency detection, support priority indicators, Recharts dashboards, French/Arabic internationalization, printable report views, localStorage persistence, Electron packaging, and GitHub Actions CI.",
    result:
      "This project demonstrates validated analytics workflows, local-first student data handling, desktop app delivery, internationalized teacher-facing interfaces, chart-based reporting, and practical education analytics for classroom decision support.",
    keyFeatures: [
      "Excel competency report import",
      "Student, class, and competency statistics",
      "Strongest and weakest competency detection",
      "Support priority and intervention indicators",
      "Recharts-based dashboards",
      "Printable reports",
      "French/Arabic internationalization",
      "Local-first student data storage",
      "Electron desktop packaging",
      "GitHub Actions CI",
    ],
    technicalDecisions: [
      "Kept student data local by using an Electron desktop workflow and localStorage persistence instead of a remote backend.",
      "Built the analytics flow around Excel import validation, class/student/competency statistics, and Recharts visualizations.",
      "Added French/Arabic i18n and printable reports so the tool fits teacher review and reporting workflows.",
    ],
    validation: [
      "Excel import validation and score checks",
      "Local-first data handling for student records",
      "Printable reports for manual review",
      "GitHub Actions CI listed in the project scope",
    ],
    ciStatus: "GitHub Actions CI configured",
    learned:
      "I learned to turn spreadsheet-based classroom data into reliable local analytics, with validation, clear indicators, bilingual UI support, and printable outputs that help teachers act on results without exposing student data to a remote service.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Electron",
      "Recharts",
      "Excel import",
      "i18n",
      "localStorage",
      "GitHub Actions",
    ],
    screenshots: ["/images/projects/competency-analytics-assistant.webp"],
    nextImprovements: [
      "Publish the live demo when the public preview is ready",
      "Prepare the downloadable desktop release when packaging is ready",
      "Add anonymized sample competency reports for reviewers",
      "Expand automated checks around Excel edge cases",
    ],
    statusItems: [
      { label: "Live Demo", value: "Coming soon" },
      { label: "Desktop Release", value: "Coming soon" },
    ],
    githubLink: "https://github.com/HichamxMahboub/Assistant-Analyse-Competences-v1.0.0",
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
    imageSrc: "/images/projects/social-media-command-center.webp",
    imageAlt: "Social Media Command Center dashboard screenshot with content planning and channel status panels",
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
    technicalDecisions: [
      "Organized the interface around channel filters, post states, campaign summaries, and task-style views for faster scanning.",
      "Used dashboard cards and status-driven sections to make operational priorities visible without heavy navigation.",
      "Kept the project focused on safe mock operational data instead of claiming live social platform integrations.",
    ],
    validation: [
      "Responsive dashboard layout for scanning operational data",
      "Clear status labels for planned, published, and review states",
      "Next improvements include safe mock live demo data and README screenshots",
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
    screenshots: ["/images/projects/social-media-command-center.webp"],
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
    imageSrc: "/images/projects/freelance-manager.webp",
    imageAlt: "Freelance Manager dashboard screenshot with clients, missions, invoices, and task status",
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
    technicalDecisions: [
      "Structured the product around clients, missions, invoices, tasks, deadlines, and status filters instead of broad SaaS scope.",
      "Kept the system CRUD-oriented so the data entities and dashboard screens remain easy to review.",
      "Used dashboard summaries to make active work, deadlines, and payment states easier to scan.",
    ],
    validation: [
      "Entity-driven workflow for clients, missions, tasks, and invoices",
      "Next improvements include packaged release instructions and sample CSV exports",
      "Dashboard-focused layout intended for repeated operational review",
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
    screenshots: ["/images/projects/freelance-manager.webp"],
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
    imageSrc: "/images/projects/nova-ai-landing-page.webp",
    imageAlt: "Nova AI Landing Page screenshot with hero, product messaging, and responsive sections",
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
    technicalDecisions: [
      "Built the page around a direct hero, feature sections, proof-oriented blocks, and CTA areas to keep the offer readable.",
      "Prioritized responsive spacing, accessible contrast, and reusable component composition over decorative complexity.",
      "Kept the project scoped as a front-end landing page concept without claiming production metrics.",
    ],
    validation: [
      "Responsive hero and CTA sections",
      "Accessible contrast and mobile spacing listed in project scope",
      "Next improvements include accessibility checks and component tests",
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
    screenshots: ["/images/projects/nova-ai-landing-page.webp"],
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
