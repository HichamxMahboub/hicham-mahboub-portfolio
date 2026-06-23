import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { getProjectById, getProjectBySlug, getProjects } from "@/lib/content";
import { localizeProjectSummary } from "@/lib/projectTranslations";
import { isRouteLocale, routeLocales, type RouteLocale } from "@/src/i18n/dictionaries";
import { breadcrumbSchema, createPageMetadata } from "@/src/seo/metadata";

type ProjectDetailPageProps = { params: Promise<{ locale: string; id: string }> };
const getLocale = (value: string): RouteLocale => (isRouteLocale(value) ? value : "en");

export async function generateStaticParams() {
  const projects = await getProjects();
  return routeLocales.flatMap((locale) => projects.map((project) => ({ locale, id: project.slug })));
}

async function resolveProject(identifier: string) {
  const numericProjectId = Number(identifier);
  return Number.isInteger(numericProjectId)
    ? getProjectById(numericProjectId)
    : getProjectBySlug(identifier);
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { locale: localeParam, id } = await params;
  const locale = getLocale(localeParam);
  const project = await resolveProject(id);

  if (!project) notFound();

  const localizedProject = localizeProjectSummary(project, locale);
  return createPageMetadata(locale, `/projects/${project.slug}`, {
    title: `${localizedProject.title} | Hicham Mahboub`,
    description: localizedProject.shortDescription,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale: localeParam, id } = await params;
  const locale = getLocale(localeParam);
  const project = await resolveProject(id);

  if (!project) notFound();

  if (String(project.id) === id) {
    permanentRedirect(`/${locale}/projects/${project.slug}`);
  }

  const relatedProjects = (await getProjects()).filter((item) => item.id !== project.id).slice(0, 3);
  const localizedProject = localizeProjectSummary(project, locale);

  return (
    <>
      <StructuredData data={breadcrumbSchema(locale, [
        { name: "Home", path: "" },
        { name: locale === "fr" ? "Projets" : "Projects", path: "/projects" },
        { name: localizedProject.title, path: `/projects/${project.slug}` },
      ])} />
      <ProjectDetailContent project={project} relatedProjects={relatedProjects} />
    </>
  );
}
