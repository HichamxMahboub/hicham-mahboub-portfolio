import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ContactPageContent from "@/components/ContactPageContent";
import { isRouteLocale, type RouteLocale } from "@/src/i18n/dictionaries";
import { breadcrumbSchema, createPageMetadata, getPageCopy } from "@/src/seo/metadata";

type LocalePageProps = { params: Promise<{ locale: string }> };
const getLocale = (value: string): RouteLocale => (isRouteLocale(value) ? value : "en");

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return createPageMetadata(locale, "/contact", getPageCopy(locale, "contact"));
}

export default async function ContactPage({ params }: LocalePageProps) {
  const locale = getLocale((await params).locale);
  return (
    <>
      <StructuredData data={breadcrumbSchema(locale, [{ name: "Home", path: "" }, { name: "Contact", path: "/contact" }])} />
      <ContactPageContent />
    </>
  );
}
