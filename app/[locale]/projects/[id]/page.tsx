import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { getProjectById, getProjects } from "@/lib/content";
import { localizeProjectSummary } from "@/lib/projectTranslations";
import { isRouteLocale, type RouteLocale } from "@/src/i18n/dictionaries";
import { breadcrumbSchema, createPageMetadata } from "@/src/seo/metadata";

type ProjectDetailPageProps = { params: Promise<{ locale: string; id: string }> };
const getLocale = (value: string): RouteLocale => (isRouteLocale(value) ? value : "en");

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { locale: localeParam, id } = await params;
  const locale = getLocale(localeParam);
  const project = await getProjectById(Number(id));

  if (!project) {
    return { robots: { index: false, follow: false } };
  }

  const localizedProject = localizeProjectSummary(project, locale);
  return createPageMetadata(locale, `/projects/${project.id}`, {
    title: `${localizedProject.title} | Hicham Mahboub`,
    description: localizedProject.shortDescription,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale: localeParam, id } = await params;
  const locale = getLocale(localeParam);
  const projectId = Number(id);

  if (!Number.isFinite(projectId)) notFound();

  const project = await getProjectById(projectId);
  if (!project) notFound();

  const relatedProjects = (await getProjects()).filter((item) => item.id !== project.id).slice(0, 3);
  const localizedProject = localizeProjectSummary(project, locale);

  return (
    <>
      <StructuredData data={breadcrumbSchema(locale, [
        { name: "Home", path: "" },
        { name: locale === "fr" ? "Projets" : "Projects", path: "/projects" },
        { name: localizedProject.title, path: `/projects/${project.id}` },
      ])} />
      <ProjectDetailContent project={project} relatedProjects={relatedProjects} />
    </>
  );
}
