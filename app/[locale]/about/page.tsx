import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import AboutPageContent from "@/components/AboutPageContent";
import { getEducation, getExperience, getProjects, getSkills } from "@/lib/content";
import { isRouteLocale, type RouteLocale } from "@/src/i18n/dictionaries";
import { breadcrumbSchema, createPageMetadata, getPageCopy } from "@/src/seo/metadata";

type LocalePageProps = { params: Promise<{ locale: string }> };
const getLocale = (value: string): RouteLocale => (isRouteLocale(value) ? value : "en");

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return createPageMetadata(locale, "/about", getPageCopy(locale, "about"));
}

export default async function AboutPage({ params }: LocalePageProps) {
  const locale = getLocale((await params).locale);
  const [projects] = await Promise.all([getProjects()]);

  return (
    <>
      <StructuredData data={breadcrumbSchema(locale, [{ name: "Home", path: "" }, { name: locale === "fr" ? "À propos" : "About", path: "/about" }])} />
      <AboutPageContent skills={getSkills()} experience={getExperience()} education={getEducation()} projects={projects} />
    </>
  );
}
