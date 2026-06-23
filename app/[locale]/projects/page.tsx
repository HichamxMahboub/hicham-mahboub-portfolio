import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ProjectsContent from "@/components/ProjectsContent";
import { getProjects } from "@/lib/content";
import { isRouteLocale, type RouteLocale } from "@/src/i18n/dictionaries";
import { breadcrumbSchema, createPageMetadata, getPageCopy } from "@/src/seo/metadata";
import type { ProjectItem } from "@/types";

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ category?: string }>;
};
const getLocale = (value: string): RouteLocale => (isRouteLocale(value) ? value : "en");

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return createPageMetadata(locale, "/projects", getPageCopy(locale, "projects"));
}

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const locale = getLocale((await params).locale);
  const activeFilter = (searchParams ? await searchParams : undefined)?.category ?? "View All";
  const projects = await getProjects();

  return (
    <>
      <StructuredData data={breadcrumbSchema(locale, [{ name: "Home", path: "" }, { name: locale === "fr" ? "Projets" : "Projects", path: "/projects" }])} />
      <ProjectsContent projects={projects as ProjectItem[]} activeFilter={activeFilter} />
    </>
  );
}
