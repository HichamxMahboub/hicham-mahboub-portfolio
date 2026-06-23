"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { localizePath } from "@/src/i18n/dictionaries";
import type { ProjectItem } from "@/types";

type HomeContentProps = {
  featuredProjects: ProjectItem[];
  projectCount: number;
};

export default function HomeContent({ featuredProjects, projectCount }: HomeContentProps) {
  const { locale, messages } = useLocale();
  const copy = messages.home;
  const projectLabel = projectCount === 1 ? copy.stats.projectsSingular : copy.stats.projectsPlural;
  const heroStats = [
    [copy.stats.year, copy.stats.student],
    [projectCount.toString(), projectLabel],
    [copy.stats.program, copy.stats.programDescription],
    [copy.stats.internship, copy.stats.internshipDescription],
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
                  {copy.eyebrow}
                </p>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                    {copy.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{copy.description}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={localizePath(locale, "/projects")} size="lg">{messages.common.viewProjects}</Button>
                <Button href={localizePath(locale, "/contact")} variant="outline" size="lg">{messages.common.contactMe}</Button>
                <Button href={siteConfig.cvPath} variant="ghost" size="lg" download>{messages.common.downloadCv}</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image src="/images/My-pdp.png" alt="Hicham Mahboub profile photo" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/12 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="text-sm font-semibold text-white">Hicham Mahboub</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{copy.profileDescription}</p>
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
            <p className="text-sm font-medium text-cyan-100">{copy.stackEyebrow}</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.stackTitle}</h2>
            <p className="text-base leading-7 text-slate-400">{copy.stackDescription}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {copy.stackGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium text-cyan-100">{copy.focusEyebrow}</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.focusTitle}</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-400">{copy.focusDescription}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.focusAreas.map((interest) => <div key={interest} className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-medium text-slate-200">{interest}</div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-medium text-cyan-100">{copy.beyondEyebrow}</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{copy.beyondTitle}</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-400">{copy.beyondDescription}</p>
          </div>
          <div className="grid gap-3">
            {copy.beyondItems.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-medium text-cyan-100">{copy.projectsEyebrow}</p>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">{copy.projectsTitle}</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-400">{copy.projectsDescription}</p>
            </div>
            <Button href={localizePath(locale, "/projects")} variant="outline" className="w-fit">{copy.viewAllProjects}</Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-cyan-100">{copy.contactEyebrow}</p>
          <h2 className="text-3xl font-semibold text-white sm:text-5xl">{copy.contactTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">{copy.contactDescription}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={localizePath(locale, "/contact")} size="lg">{messages.common.contactMe}</Button>
            <Button href={siteConfig.cvPath} variant="outline" size="lg" download>{messages.common.downloadCv}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
