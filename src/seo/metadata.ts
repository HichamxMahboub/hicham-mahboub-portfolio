import type { Metadata } from "next";
import type { RouteLocale } from "@/src/i18n/dictionaries";

export const siteUrl = "https://www.hichammahboub.live";
export const profileImage = "/images/My-pdp.png";

type PageCopy = { title: string; description: string };
export type MainPage = "home" | "about" | "projects" | "contact";

const pageCopy: Record<RouteLocale, Record<MainPage, PageCopy>> = {
  en: {
    home: {
      title: "Hicham Mahboub | Full-Stack Developer Portfolio",
      description: "Hicham Mahboub is an ESI Rabat engineering student specializing in Information Systems and Digital Transformation, building full-stack web platforms with React, Next.js, Spring Boot, .NET, Node.js, PostgreSQL, MongoDB and Docker.",
    },
    about: {
      title: "About Hicham Mahboub | Full-Stack Developer Intern",
      description: "Learn about Hicham Mahboub, an ESI Rabat engineering student focused on full-stack development, backend APIs, data platforms, dashboards, and digital transformation.",
    },
    projects: {
      title: "Projects | Hicham Mahboub Full-Stack Portfolio",
      description: "Explore Hicham Mahboub's full-stack, backend API, dashboard, analytics, and digital transformation projects built with modern web technologies.",
    },
    contact: {
      title: "Contact Hicham Mahboub | Full-Stack Developer Intern",
      description: "Contact Hicham Mahboub for junior full-stack development and software engineering internship opportunities.",
    },
  },
  fr: {
    home: {
      title: "Hicham Mahboub | Portfolio Développeur Full-Stack",
      description: "Hicham Mahboub est élève ingénieur à l’ESI Rabat en Systèmes d’Information et Transformation Digitale, spécialisé en développement full-stack, React, Next.js, Spring Boot, .NET, Node.js, PostgreSQL, MongoDB et Docker.",
    },
    about: {
      title: "À propos de Hicham Mahboub | Développeur Full-Stack",
      description: "Découvrez Hicham Mahboub, élève ingénieur à l'ESI Rabat, orienté développement full-stack, API backend, plateformes de données, tableaux de bord et transformation digitale.",
    },
    projects: {
      title: "Projets | Portfolio Full-Stack de Hicham Mahboub",
      description: "Découvrez les projets full-stack, API backend, tableaux de bord, analytics et transformation digitale de Hicham Mahboub.",
    },
    contact: {
      title: "Contacter Hicham Mahboub | Développeur Full-Stack",
      description: "Contactez Hicham Mahboub pour des opportunités de stage junior en développement full-stack et ingénierie logicielle.",
    },
  },
};

export function getPageCopy(locale: RouteLocale, page: MainPage): PageCopy {
  return pageCopy[locale][page];
}

export function localePath(locale: RouteLocale, path = ""): string {
  return `/${locale}${path}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export function localizedAlternates(locale: RouteLocale, path = ""): Metadata["alternates"] {
  return {
    canonical: absoluteUrl(localePath(locale, path)),
    languages: {
      en: absoluteUrl(localePath("en", path)),
      fr: absoluteUrl(localePath("fr", path)),
      "x-default": absoluteUrl(localePath("en", path)),
    },
  };
}

export function createPageMetadata(locale: RouteLocale, path: string, copy: PageCopy): Metadata {
  const url = absoluteUrl(localePath(locale, path));
  const alternateLocale = locale === "en" ? "fr_FR" : "en_US";

  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: localizedAlternates(locale, path),
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: { absolute: copy.title },
      description: copy.description,
      siteName: "Hicham Mahboub",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale,
      images: [{ url: profileImage, alt: "Hicham Mahboub" }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: copy.title },
      description: copy.description,
      images: [profileImage],
    },
  };
}

export function profileSchema(locale: RouteLocale) {
  const profileUrl = absoluteUrl(localePath(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: absoluteUrl("/en"),
        name: "Hicham Mahboub",
        inLanguage: ["en", "fr"],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#hicham-mahboub`,
        name: "Hicham Mahboub",
        url: absoluteUrl("/en"),
        image: absoluteUrl(profileImage),
        jobTitle: "Full-Stack Developer Intern",
        alumniOf: "École des Sciences de l'Information - ESI Rabat",
        sameAs: [
          "https://github.com/HichamxMahboub",
          "https://www.linkedin.com/in/hicham-mahboub-b590082b1/",
        ],
        knowsAbout: ["React", "Next.js", "TypeScript", "Spring Boot", ".NET 8", "Node.js", "PostgreSQL", "MongoDB", "Docker", "GitHub", "REST APIs"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#profile`,
        url: profileUrl,
        name: "Hicham Mahboub",
        inLanguage: locale,
        mainEntity: { "@id": `${siteUrl}/#hicham-mahboub` },
      },
    ],
  };
}

export function breadcrumbSchema(locale: RouteLocale, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localePath(locale, item.path)),
    })),
  };
}
