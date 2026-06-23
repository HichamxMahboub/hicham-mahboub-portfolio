import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import LocalizedFooter from "@/components/LocalizedFooter";
import { LocaleProvider } from "@/components/LocaleProvider";
import { isRouteLocale, routeLocales } from "@/src/i18n/dictionaries";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const isFrench = locale === "fr";

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", fr: "/fr" },
    },
    openGraph: { locale: isFrench ? "fr_FR" : "en_US" },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isRouteLocale(locale)) notFound();

  return (
    <LocaleProvider locale={locale}>
      <Navbar />
      {children}
      <LocalizedFooter />
    </LocaleProvider>
  );
}
