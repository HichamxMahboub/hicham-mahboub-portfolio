"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { useLocale } from "@/components/LocaleProvider";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container, PageHero, SectionBand, SectionHeader } from "@/components/PageSection";
import type { ProjectItem } from "@/types";
import { getProjectCategoryOptions, translateProjectCategory } from "@/lib/projectTranslations";
import { localizePath } from "@/src/i18n/dictionaries";

type ProjectsContentProps = {
  projects: ProjectItem[];
  activeFilter: string;
};

const copy = {
  en: {
    eyebrow: "Project work",
    title: "Projects for internship recruiters",
    description:
      "A practical set of academic and portfolio projects showing full-stack development, backend APIs, dashboards, analytics workflows, and digital transformation thinking.",
    metrics: ["portfolio projects", "Full-stack", "web, backend, desktop, and analytics", "Honest status", "no invented live links or deployment claims"],
    filterEyebrow: "Filtered case studies",
    filterTitle: "All projects",
    filterDescription:
      "Each card links to a case-study page with the problem, solution, technical decisions, validation notes, and current availability.",
    empty: "No projects found in this category.",
    showing: "Showing",
  },
  fr: {
    eyebrow: "Travail de projet",
    title: "Projets pour les recruteurs de stage",
    description:
      "Un ensemble pratique de projets academiques et portfolio montrant le developpement full-stack, les API backend, les tableaux de bord, les workflows d'analyse et la logique de transformation digitale.",
    metrics: ["projets portfolio", "Full-stack", "web, backend, desktop et analytics", "Statut honnete", "aucun faux lien live ni fausse promesse de deploiement"],
    filterEyebrow: "Etudes de cas filtrees",
    filterTitle: "Tous les projets",
    filterDescription:
      "Chaque carte renvoie vers une page d'etude de cas avec le probleme, la solution, les choix techniques, les notes de validation et la disponibilite actuelle.",
    empty: "Aucun projet trouve dans cette categorie.",
    showing: "Affichage de",
  },
  ar: {
    eyebrow: "العمل على المشاريع",
    title: "مشاريع موجّهة لموظفي التدريب",
    description:
      "مجموعة عملية من المشاريع الأكاديمية ومشاريع portfolio تعرض التطوير الكامل، وواجهات برمجة التطبيقات الخلفية، ولوحات التحكم، وسير عمل التحليلات، والتفكير في التحول الرقمي.",
    metrics: ["مشاريع portfolio", "Full-stack", "الويب والخلفية وسطح المكتب والتحليلات", "حالة صادقة", "لا روابط حية مخترعة ولا ادعاءات نشر"],
    filterEyebrow: "دراسات حالة مفلترة",
    filterTitle: "جميع المشاريع",
    filterDescription:
      "كل بطاقة تقود إلى صفحة دراسة حالة تتضمن المشكلة والحل والقرارات التقنية وملاحظات التحقق والتوفر الحالي.",
    empty: "لم يتم العثور على مشاريع في هذه الفئة.",
    showing: "يتم عرض",
  },
} as const;

export default function ProjectsContent({ projects, activeFilter }: ProjectsContentProps) {
  const { locale } = useLocale();
  const page = copy[locale];
  const options = getProjectCategoryOptions(locale);
  const filteredProjects = activeFilter === "View All" ? projects : projects.filter((project) => project.category === activeFilter);
  const activeTitle = activeFilter === "View All" ? page.filterTitle : translateProjectCategory(activeFilter as ProjectItem["category"], locale);

  return (
    <main className="dark min-h-screen bg-[#080a0f] text-white">
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description}>
        <div className="grid gap-3 sm:grid-cols-3">
          {page.metrics.map((value, index) => (
            <div key={value} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <p className="text-2xl font-semibold text-white">{index === 0 ? projects.length : value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{index === 0 ? page.metrics[0] : value}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <SectionBand className="pt-0" withBorder={false}>
        <Container>
          <Card className="p-4">
            <div className="flex flex-wrap gap-3">
              {options.map((category) => {
                const href = category.key === "View All" ? localizePath(locale, "/projects") : `${localizePath(locale, "/projects")}?category=${encodeURIComponent(category.key)}`;
                const isActive = activeFilter === category.key;

                return (
                  <Link key={category.key} href={href}>
                    <Badge variant={isActive ? "default" : "outline"} className="cursor-pointer px-4 py-2 text-sm transition-colors hover:border-cyan-100/40 hover:text-white">
                      {category.label}
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </Card>
        </Container>
      </SectionBand>

      <SectionBand>
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow={page.filterEyebrow} title={activeTitle} description={page.filterDescription} />
            <p className="text-sm text-slate-500">
              {page.showing} {filteredProjects.length} {locale === "fr" ? "sur" : "of"} {projects.length}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="mt-10 p-8 text-center">
              <p className="text-lg text-slate-400">{page.empty}</p>
            </Card>
          )}
        </Container>
      </SectionBand>
    </main>
  );
}
