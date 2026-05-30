import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { siteConfig } from "@/config/siteConfig";
import { getFeaturedProjects } from "@/lib/content";

const internshipInterests = [
  "Full-stack development",
  "Backend APIs",
  "Dashboards and admin panels",
  "Mobile apps",
  "Digital transformation projects",
];

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects(3);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                  Information Systems & Digital Transformation Engineering Student
                </p>

                <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                  Hicham Mahboub.
                  <span className="block text-gray-500">Junior full-stack developer seeking an internship.</span>
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
                  I build practical web, mobile, desktop, and dashboard projects around APIs, data workflows, and digital transformation use cases. I am looking for an internship where I can contribute, learn from an engineering team, and turn academic systems knowledge into production habits.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="/projects"
                  size="lg"
                  className="bg-white !text-black hover:bg-gray-200 hover:!text-black"
                >
                  Review Projects
                </Button>
                <Button
                  href={siteConfig.cvPath}
                  variant="outline"
                  size="lg"
                  download
                  className="border-gray-600 text-white hover:bg-gray-900"
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] shadow-2xl sm:min-h-[520px]">
                <Image
                  src="/images/Hero.png"
                  alt="Digital dashboard visual for Hicham Mahboub portfolio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.22),transparent_28%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.48)_48%,rgba(0,0,0,0.86))]" />

                <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] gap-5 p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                      Internship portfolio
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100 backdrop-blur">
                      HM
                    </div>
                  </div>

                  <div className="grid content-center gap-4">
                    <div className="max-w-sm rounded-2xl border border-white/10 bg-black/45 p-5 shadow-2xl backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                        Developer workspace
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Full-stack systems, dashboards, and APIs.
                      </h2>
                      <div className="mt-5 grid gap-3">
                        <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-sm text-white/80">
                          <span>Backend APIs</span>
                          <span className="text-cyan-200">REST</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-sm text-white/80">
                          <span>Dashboards</span>
                          <span className="text-emerald-200">Analytics</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-sm text-white/80">
                          <span>Digital transformation</span>
                          <span className="text-indigo-200">Workflows</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      ["6", "Projects"],
                      ["API", "Backend"],
                      ["UI", "Dashboards"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 backdrop-blur">
                        <p className="text-lg font-semibold text-white">{value}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500">
              Availability
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Open to junior full-stack and software engineering internships.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-gray-400">
              I am looking for a practical internship where I can help build useful features, improve through code review, and contribute to engineering work connected to real business or operational needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {internshipInterests.map((interest) => (
              <div key={interest} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-gray-200">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-900 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500">
                Internship-ready project work
              </p>
              <h2 className="text-4xl font-bold sm:text-5xl">
                Selected Projects
              </h2>
            </div>
            <Button
              href="/projects"
              variant="outline"
              className="w-fit border-gray-700 text-white hover:bg-gray-900"
            >
              View all
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-900 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-gray-500">
            Internship focus
          </p>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Looking for a junior profile who can connect code, data, and business workflows?
          </h2>
          <p className="mb-10 text-lg text-gray-400">
            My strongest work is in full-stack features, dashboards, REST APIs, admin interfaces, and digital transformation projects where clear requirements and reliable delivery matter.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white !text-black hover:bg-gray-200 hover:!text-black"
            >
              Contact Me
            </Button>
            <Button
              href={siteConfig.cvPath}
              variant="outline"
              size="lg"
              download
              className="border-gray-600 text-white hover:bg-gray-900"
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
