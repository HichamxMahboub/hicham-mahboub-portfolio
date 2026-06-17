import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProjectById, getProjects } from "@/lib/content";
import type { ProjectItem } from "@/types";

const caseStudyCard =
  "border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]";
const mutedPanel = "rounded-lg border border-white/10 bg-slate-950/55";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type StatusCard = {
  label: string;
  value: string;
  href?: string;
  detail?: string;
};

function getInitials(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function getCaseStudySlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getCiStatus(project: ProjectItem) {
  if (project.ciStatus) {
    return project.ciStatus;
  }

  const knownSignals = [...project.techStack, ...project.keyFeatures]
    .join(" ")
    .toLowerCase();

  if (knownSignals.includes("github actions") || knownSignals.includes("ci workflow") || knownSignals.includes(" ci")) {
    return "CI/build workflow referenced in project data";
  }

  return null;
}

function getAvailabilityCards(project: ProjectItem): StatusCard[] {
  const cards: StatusCard[] = [
    {
      label: "GitHub",
      value: project.githubLink ? "Repository available" : "Not provided",
      href: project.githubLink,
      detail: project.githubLink ? "Source code and project documentation" : undefined,
    },
  ];

  if (project.liveLink) {
    cards.push({
      label: "Live demo",
      value: "Available",
      href: project.liveLink,
      detail: "Public deployment linked from project data",
    });
  }

  if (project.statusItems?.length) {
    project.statusItems.forEach((item) => {
      cards.push({
        label: item.label,
        value: item.value,
      });
    });
  }

  if (!project.liveLink && !project.statusItems?.length) {
    cards.push({
      label: "Live demo/API",
      value: "Not listed",
      detail: "No public deployment link is currently stored for this project",
    });
  }

  const ciStatus = getCiStatus(project);
  if (ciStatus) {
    cards.push({
      label: "CI / build",
      value: ciStatus,
    });
  }

  return cards;
}

function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className={caseStudyCard}>
      <CardHeader>
        <CardDescription className="text-cyan-100">{eyebrow}</CardDescription>
        <CardTitle className="text-2xl text-white sm:text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function TextBlock({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-8 text-slate-300 sm:text-lg">{children}</p>;
}

function ListGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className={`${mutedPanel} p-4 text-sm leading-6 text-slate-300`}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isFinite(projectId)) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects = (await getProjects())
    .filter((item) => item.id !== project.id)
    .slice(0, 3);
  const initials = getInitials(project.title);
  const availabilityCards = getAvailabilityCards(project);
  const caseStudySlug = project.slug ?? getCaseStudySlug(project.title);
  const technicalDecisions = project.technicalDecisions?.length
    ? project.technicalDecisions
    : [project.solution];
  const validationItems = project.validation?.length
    ? project.validation
    : [project.result];

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080a0f] to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <Link href="/projects" className="transition-colors hover:text-white">
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300">{caseStudySlug}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="space-y-7">
              <Badge variant="outline" className="rounded-md border-white/15 bg-white/[0.04] px-3 py-1.5 text-cyan-100">
                {project.category}
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-7xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 9).map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.githubLink && (
                  <Button href={project.githubLink} variant="outline" target="_blank">
                    View GitHub
                  </Button>
                )}
                {project.liveLink && (
                  <Button href={project.liveLink} target="_blank">
                    Open Live Demo
                  </Button>
                )}
                {project.statusItems?.map((item) => (
                  <span key={item.label} className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-slate-300">
                    {item.label}: {item.value}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div className={`relative aspect-video overflow-hidden rounded-lg ${project.bgColor}`}>
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 48vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-neutral-900">
                      <div className="text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-3xl font-semibold text-white">
                          {initials}
                        </div>
                        <p className="mt-4 text-sm text-slate-400">{project.category}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/62 via-transparent to-transparent" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {availabilityCards.slice(0, 4).map((card) => {
                  const content = (
                    <div className={`${mutedPanel} h-full p-4 transition-colors ${card.href ? "hover:bg-white/[0.07]" : ""}`}>
                      <p className="text-xs font-medium text-slate-500">{card.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{card.value}</p>
                      {card.detail && <p className="mt-2 text-xs leading-5 text-slate-500">{card.detail}</p>}
                    </div>
                  );

                  if (card.href) {
                    return (
                      <a key={`${card.label}-${card.value}`} href={card.href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    );
                  }

                  return <div key={`${card.label}-${card.value}`}>{content}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-6">
            <CaseStudySection eyebrow="Problem" title="What needed to be solved">
              <TextBlock>{project.problem}</TextBlock>
            </CaseStudySection>

            <CaseStudySection eyebrow="Solution" title="How the project approaches it">
              <TextBlock>{project.solution}</TextBlock>
            </CaseStudySection>

            <CaseStudySection eyebrow="Key features" title="What the project includes">
              <ListGrid items={project.keyFeatures} />
            </CaseStudySection>

            <CaseStudySection eyebrow="Architecture / Technical decisions" title="Implementation choices worth reviewing">
              <ListGrid items={technicalDecisions} />
            </CaseStudySection>

            <CaseStudySection eyebrow="Validation / Quality" title="How I made the work reviewable">
              <ListGrid items={validationItems} />
            </CaseStudySection>

            <CaseStudySection eyebrow="What I learned" title="Technical takeaway">
              <TextBlock>{project.learned}</TextBlock>
            </CaseStudySection>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <Card className={caseStudyCard}>
              <CardHeader>
                <CardDescription className="text-cyan-100">Project snapshot</CardDescription>
                <CardTitle className="text-2xl text-white">Case-study summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`${mutedPanel} p-4`}>
                  <p className="text-xs font-medium text-slate-500">Category</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">{project.category}</p>
                </div>
                <div className={`${mutedPanel} p-4`}>
                  <p className="text-xs font-medium text-slate-500">Primary stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge key={`snapshot-${tech}`} variant="outline" className="rounded-md border-white/10 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className={`${mutedPanel} p-4`}>
                  <p className="text-xs font-medium text-slate-500">Recruiter relevance</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.result}</p>
                </div>
              </CardContent>
            </Card>

            <Card className={caseStudyCard}>
              <CardHeader>
                <CardDescription className="text-cyan-100">Status cards</CardDescription>
                <CardTitle className="text-2xl text-white">Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availabilityCards.map((card) => {
                  const cardBody = (
                    <div className={`${mutedPanel} p-4 transition-colors ${card.href ? "hover:bg-white/[0.07]" : ""}`}>
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-medium text-slate-300">{card.label}</p>
                        <span className="max-w-[12rem] rounded-md border border-white/10 px-2.5 py-1 text-right text-xs font-medium leading-5 text-slate-300">
                          {card.value}
                        </span>
                      </div>
                      {card.detail && <p className="mt-3 text-xs leading-5 text-slate-500">{card.detail}</p>}
                    </div>
                  );

                  if (card.href) {
                    return (
                      <a key={`${card.label}-${card.value}`} href={card.href} target="_blank" rel="noopener noreferrer">
                        {cardBody}
                      </a>
                    );
                  }

                  return <div key={`${card.label}-${card.value}`}>{cardBody}</div>;
                })}
              </CardContent>
            </Card>

            {project.nextImprovements && project.nextImprovements.length > 0 && (
              <Card className={caseStudyCard}>
                <CardHeader>
                  <CardDescription className="text-cyan-100">Next improvements</CardDescription>
                  <CardTitle className="text-2xl text-white">Practical next steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {project.nextImprovements.map((item) => (
                      <div key={item} className={`${mutedPanel} p-4 text-sm leading-6 text-slate-300`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border-cyan-300/20 bg-cyan-300/10 text-white">
              <CardHeader>
                <CardDescription className="text-cyan-100">Internship fit</CardDescription>
                <CardTitle className="text-2xl text-white">Open to practical engineering work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-300">
                  I am looking for internship work where I can contribute to full-stack features, dashboards, APIs, and internal tools while learning from an experienced team.
                </p>
                <div className="mt-5">
                  <Button href="/contact" variant="outline">
                    Contact me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-100">Related work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">More case studies</h2>
            </div>
            <Button href="/projects" variant="outline" className="w-fit">
              Back to Projects
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id} className="group overflow-hidden border-white/10 bg-white/[0.04] text-white">
                <Link href={`/projects/${relatedProject.id}`} className="block">
                  <div className={`relative aspect-video overflow-hidden ${relatedProject.bgColor}`}>
                    {relatedProject.imageSrc ? (
                      <Image
                        src={relatedProject.imageSrc}
                        alt={relatedProject.imageAlt ?? relatedProject.title}
                        fill
                        className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-slate-950 text-3xl font-semibold text-white">
                        {getInitials(relatedProject.title)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardDescription className="text-cyan-100">{relatedProject.category}</CardDescription>
                    <CardTitle className="text-xl text-white">{relatedProject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-400">{relatedProject.shortDescription}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
