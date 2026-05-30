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
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800 to-gray-950 shadow-2xl sm:aspect-square">
                <Image
                  src="/images/Hero.png"
                  alt="Digital dashboard visual for Hicham Mahboub portfolio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                      Portfolio
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                      Full-stack, dashboards, APIs, and digital transformation projects.
                    </p>
                  </div>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-black/45 text-2xl font-semibold tracking-tight text-white shadow-2xl backdrop-blur sm:h-24 sm:w-24 sm:text-3xl">
                    HM
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
