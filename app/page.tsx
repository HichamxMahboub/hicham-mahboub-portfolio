import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/config/siteConfig";
import { getProjects } from "@/lib/content";
import type { ProjectItem } from "@/types";

const techStackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Angular"],
  },
  {
    title: "Backend",
    items: [".NET 8", "ASP.NET Core", "Node.js", "Express", "Spring Boot", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "EF Core"],
  },
  {
    title: "Data and analytics",
    items: ["Python", "Recharts", "CSV/JSON analytics", "PDF reporting"],
  },
  {
    title: "DevOps and tools",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Swagger/OpenAPI"],
  },
];

const focusAreas = [
  "Full-stack development",
  "Backend APIs",
  "Dashboards and admin panels",
  "Data and analytics workflows",
  "Digital transformation tools",
];

const beyondCode = [
  "Building real portfolio projects with clear README, setup, and delivery notes",
  "Exploring UI/UX and product design for recruiter-readable interfaces",
  "Learning backend architecture, authentication, deployment, and cloud-ready practices",
  "Strengthening cybersecurity awareness, clean code habits, automation, and analytics thinking",
];

function getFeaturedProjects(projects: ProjectItem[], limit = 3) {
  const smartSim = projects.find((project) => project.slug === "smartsim-analytics");

  if (!smartSim) {
    return projects.slice(0, limit);
  }

  return [smartSim, ...projects.filter((project) => project.slug !== "smartsim-analytics")].slice(0, limit);
}

export default async function HomePage() {
  const projects = await getProjects();
  const featuredProjects = getFeaturedProjects(projects, 3);
  const projectCount = projects.length;

  const heroStats = [
    ["2nd year", "ESI engineering student"],
    [projectCount.toString(), projectCount === 1 ? "portfolio project" : "portfolio projects"],
    ["ISITD", "Information Systems and Digital Transformation"],
    ["Internship-ready", "Full-stack, data, and backend projects"],
  ];

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080a0f] to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-cyan-100">
                  2nd-year ESI engineering student - ISITD track
                </p>

                <div className="space-y-5">
                  <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                    Hicham Mahboub, junior full-stack internship candidate.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    I build practical web, backend, dashboard, desktop, and data projects around APIs, analytics, and digital transformation use cases. I am looking for a junior full-stack internship where I can contribute to real product work, learn from code review, and keep improving production habits.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/projects" size="lg">
                  View Projects
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Me
                </Button>
                {siteConfig.cvPath && (
                  <Button href={siteConfig.cvPath} variant="ghost" size="lg" download>
                    Download CV
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/My-pdp.png"
                  alt="Hicham Mahboub profile photo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/12 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-semibold text-white">Hicham Mahboub</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Focused on full-stack systems, backend APIs, analytics dashboards, and digital transformation projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="text-sm font-medium text-cyan-100">What I work with</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A practical stack for full-stack, backend, and analytics projects.
            </h2>
            <p className="text-base leading-7 text-slate-400">
              These tools come from the current portfolio projects and learning focus: front-end interfaces, REST APIs, databases, dashboards, automation, and deployment-ready documentation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {techStackGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium text-cyan-100">Internship focus</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Open to junior full-stack and software engineering internships.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-400">
              I am looking for practical engineering work where I can help ship useful features, write clearer documentation, learn from experienced developers, and connect software with business or operational needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((interest) => (
              <div key={interest} className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-slate-200">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium text-cyan-100">Beyond Code</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Personal focus areas that support better engineering work.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-400">
              I keep the personal side professional: project discipline, product thinking, backend depth, security awareness, and continuous learning.
            </p>
          </div>

          <div className="grid gap-3">
            {beyondCode.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-medium text-cyan-100">Internship-ready project work</p>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                Selected Projects
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-400">
                A focused sample of portfolio projects covering APIs, analytics, dashboards, and digital transformation workflows.
              </p>
            </div>
            <Button href="/projects" variant="outline" className="w-fit">
              View all projects
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-cyan-100">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-5xl">
            Looking for a junior profile who can connect code, data, and business workflows?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
            My strongest work is in full-stack features, REST APIs, dashboards, admin interfaces, analytics flows, and digital transformation projects where clear requirements matter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Contact Me
            </Button>
            <Button href={siteConfig.cvPath} variant="outline" size="lg" download>
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
