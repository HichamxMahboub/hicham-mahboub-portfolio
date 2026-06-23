"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectItem } from "@/types";
import { localizeProjectSummary, translateProjectCategory } from "@/lib/projectTranslations";
import { localizePath } from "@/src/i18n/dictionaries";
import ProjectCard from "@/components/ProjectCard";

type ProjectDetailContentProps = {
  project: ProjectItem;
  relatedProjects: ProjectItem[];
};

type StatusCard = {
  label: string;
  value: string;
  href?: string;
  detail?: string;
};

const copy = {
  en: {
    breadcrumbRoot: "Projects",
    projectSnapshot: "Project snapshot",
    caseStudySummary: "Case-study summary",
    category: "Category",
    primaryStack: "Primary stack",
    recruiterRelevance: "Recruiter relevance",
    statusCards: "Status cards",
    availability: "Availability",
    nextImprovements: "Next improvements",
    practicalNextSteps: "Practical next steps",
    fit: "Internship fit",
    fitTitle: "Open to practical engineering work",
    fitBody:
      "I am looking for internship work where I can contribute to full-stack features, dashboards, APIs, and internal tools while learning from an experienced team.",
    contactMe: "Contact me",
    problem: "Problem",
    problemTitle: "What needed to be solved",
    solution: "Solution",
    solutionTitle: "How the project approaches it",
    features: "Key features",
    featuresTitle: "What the project includes",
    decisions: "Architecture / Technical decisions",
    decisionsTitle: "Implementation choices worth reviewing",
    validation: "Validation / Quality",
    validationTitle: "How I made the work reviewable",
    learned: "What I learned",
    learnedTitle: "Technical takeaway",
    related: "Related work",
    relatedTitle: "More case studies",
    back: "Back to Projects",
  },
  fr: {
    breadcrumbRoot: "Projets",
    projectSnapshot: "Apercu du projet",
    caseStudySummary: "Resume de l'etude de cas",
    category: "Categorie",
    primaryStack: "Stack principale",
    recruiterRelevance: "Interet pour le recruteur",
    statusCards: "Cartes de statut",
    availability: "Disponibilite",
    nextImprovements: "Ameliorations a venir",
    practicalNextSteps: "Prochaines etapes pratiques",
    fit: "Adequation stage",
    fitTitle: "Ouvert a un travail d'ingenierie concret",
    fitBody:
      "Je cherche un stage ou je peux contribuer a des fonctionnalites full-stack, des tableaux de bord, des API et des outils internes tout en apprenant au sein d'une equipe experimentee.",
    contactMe: "Me contacter",
    problem: "Probleme",
    problemTitle: "Ce qu'il fallait resoudre",
    solution: "Solution",
    solutionTitle: "Comment le projet y repond",
    features: "Fonctionnalites clefs",
    featuresTitle: "Ce que le projet comprend",
    decisions: "Architecture / decisions techniques",
    decisionsTitle: "Choix d'implementation a examiner",
    validation: "Validation / qualite",
    validationTitle: "Comment j'ai rendu le travail evaluable",
    learned: "Ce que j'ai appris",
    learnedTitle: "Enseignement technique",
    related: "Travaux connexes",
    relatedTitle: "Plus d'etudes de cas",
    back: "Retour aux projets",
  },
  ar: {
    breadcrumbRoot: "المشاريع",
    projectSnapshot: "ملخص المشروع",
    caseStudySummary: "ملخص دراسة الحالة",
    category: "الفئة",
    primaryStack: "المجموعة الأساسية",
    recruiterRelevance: "أهمية للمجند",
    statusCards: "بطاقات الحالة",
    availability: "التوفر",
    nextImprovements: "التحسينات القادمة",
    practicalNextSteps: "الخطوات العملية القادمة",
    fit: "ملاءمة التدريب",
    fitTitle: "مفتوح للعمل الهندسي العملي",
    fitBody:
      "أبحث عن تدريب أستطيع فيه المساهمة في ميزات full-stack ولوحات التحكم وواجهات برمجة التطبيقات والأدوات الداخلية أثناء التعلم من فريق خبير.",
    contactMe: "تواصل معي",
    problem: "المشكلة",
    problemTitle: "ما الذي كان يجب حله",
    solution: "الحل",
    solutionTitle: "كيف يعالج المشروع ذلك",
    features: "الميزات الرئيسية",
    featuresTitle: "ما الذي يتضمنه المشروع",
    decisions: "القرارات المعمارية / التقنية",
    decisionsTitle: "اختيارات التنفيذ التي تستحق المراجعة",
    validation: "التحقق / الجودة",
    validationTitle: "كيف جعلت العمل قابلاً للمراجعة",
    learned: "ما تعلمته",
    learnedTitle: "الخلاصة التقنية",
    related: "أعمال ذات صلة",
    relatedTitle: "المزيد من دراسات الحالة",
    back: "العودة إلى المشاريع",
  },
} as const;

function getInitials(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
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
    cards.push({ label: "Live demo", value: "Available", href: project.liveLink, detail: "Public deployment linked from project data" });
  }

  if (project.statusItems?.length) {
    project.statusItems.forEach((item) => cards.push({ label: item.label, value: item.value }));
  }

  if (!project.liveLink && !project.statusItems?.length) {
    cards.push({ label: "Live demo/API", value: "Not listed", detail: "No public deployment link is currently stored for this project" });
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
    <Card className="border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
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
        <div key={item} className="rounded-lg border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-slate-300">
          {item}
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetailContent({ project, relatedProjects }: ProjectDetailContentProps) {
  const { locale } = useLocale();
  const page = copy[locale];
  const localizedProject = localizeProjectSummary(project, locale);
  const availabilityCards = getAvailabilityCards(project);
  const initials = getInitials(project.title);
  const technicalDecisions = project.technicalDecisions?.length ? project.technicalDecisions : [project.solution];
  const validationItems = project.validation?.length ? project.validation : [project.result];

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
            <Link href={localizePath(locale, "/projects")} className="transition-colors hover:text-white">
              {page.breadcrumbRoot}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300">{project.slug ?? project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="space-y-7">
              <Badge variant="outline" className="rounded-md border-white/15 bg-white/[0.04] px-3 py-1.5 text-cyan-100">
                {translateProjectCategory(project.category, locale)}
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-7xl">{localizedProject.title}</h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{localizedProject.shortDescription}</p>
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
                    GitHub
                  </Button>
                )}
                {project.liveLink && (
                  <Button href={project.liveLink} target="_blank">
                    Live Demo
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
                <div className={`relative aspect-video overflow-hidden ${project.bgColor}`}>
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
                        <p className="mt-4 text-sm text-slate-400">{translateProjectCategory(project.category, locale)}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/62 via-transparent to-transparent" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {availabilityCards.slice(0, 4).map((card) => {
                  const content = (
                    <div className={`rounded-lg border border-white/10 bg-slate-950/55 p-4 transition-colors ${card.href ? "hover:bg-white/[0.07]" : ""}`}>
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
            <CaseStudySection eyebrow={page.problem} title={page.problemTitle}>
              <TextBlock>{project.problem}</TextBlock>
            </CaseStudySection>

            <CaseStudySection eyebrow={page.solution} title={page.solutionTitle}>
              <TextBlock>{project.solution}</TextBlock>
            </CaseStudySection>

            <CaseStudySection eyebrow={page.features} title={page.featuresTitle}>
              <ListGrid items={project.keyFeatures} />
            </CaseStudySection>

            <CaseStudySection eyebrow={page.decisions} title={page.decisionsTitle}>
              <ListGrid items={technicalDecisions} />
            </CaseStudySection>

            <CaseStudySection eyebrow={page.validation} title={page.validationTitle}>
              <ListGrid items={validationItems} />
            </CaseStudySection>

            <CaseStudySection eyebrow={page.learned} title={page.learnedTitle}>
              <TextBlock>{project.learned}</TextBlock>
            </CaseStudySection>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <Card className="border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
              <CardHeader>
                <CardDescription className="text-cyan-100">{page.projectSnapshot}</CardDescription>
                <CardTitle className="text-2xl text-white">{page.caseStudySummary}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs font-medium text-slate-500">{page.category}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">{translateProjectCategory(project.category, locale)}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs font-medium text-slate-500">{page.primaryStack}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge key={`snapshot-${tech}`} variant="outline" className="rounded-md border-white/10 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/55 p-4">
                  <p className="text-xs font-medium text-slate-500">{page.recruiterRelevance}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.result}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
              <CardHeader>
                <CardDescription className="text-cyan-100">{page.statusCards}</CardDescription>
                <CardTitle className="text-2xl text-white">{page.availability}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availabilityCards.map((card) => {
                  const cardBody = (
                    <div className={`rounded-lg border border-white/10 bg-slate-950/55 p-4 transition-colors ${card.href ? "hover:bg-white/[0.07]" : ""}`}>
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
              <Card className="border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                <CardHeader>
                  <CardDescription className="text-cyan-100">{page.nextImprovements}</CardDescription>
                  <CardTitle className="text-2xl text-white">{page.practicalNextSteps}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {project.nextImprovements.map((item) => (
                      <div key={item} className="rounded-lg border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border-cyan-300/20 bg-cyan-300/10 text-white">
              <CardHeader>
                <CardDescription className="text-cyan-100">{page.fit}</CardDescription>
                <CardTitle className="text-2xl text-white">{page.fitTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-300">{page.fitBody}</p>
                <div className="mt-5">
                  <Button href={localizePath(locale, "/contact")} variant="outline">
                    {page.contactMe}
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
              <p className="text-sm font-medium text-cyan-100">{page.related}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{page.relatedTitle}</h2>
            </div>
            <Button href={localizePath(locale, "/projects")} variant="outline" className="w-fit">
              {page.back}
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.id} project={relatedProject} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
