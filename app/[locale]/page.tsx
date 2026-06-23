import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import HomeContent from "@/components/HomeContent";
import { getProjects } from "@/lib/content";
import { isRouteLocale, type RouteLocale } from "@/src/i18n/dictionaries";
import { createPageMetadata, getPageCopy, profileSchema } from "@/src/seo/metadata";
import type { ProjectItem } from "@/types";

type LocalePageProps = { params: Promise<{ locale: string }> };

function getFeaturedProjects(projects: ProjectItem[], limit = 3) {
  const smartSim = projects.find((project) => project.slug === "smartsim-analytics");
  return smartSim
    ? [smartSim, ...projects.filter((project) => project.slug !== "smartsim-analytics")].slice(0, limit)
    : projects.slice(0, limit);
}

function getLocale(value: string): RouteLocale {
  return isRouteLocale(value) ? value : "en";
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return createPageMetadata(locale, "", getPageCopy(locale, "home"));
}

export default async function HomePage({ params }: LocalePageProps) {
  const locale = getLocale((await params).locale);
  const projects = await getProjects();

  return (
    <>
      <StructuredData data={profileSchema(locale)} />
      <HomeContent featuredProjects={getFeaturedProjects(projects, 3)} projectCount={projects.length} />
    </>
  );
}
