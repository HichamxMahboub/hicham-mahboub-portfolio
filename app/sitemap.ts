import type { MetadataRoute } from "next";
import { productionSiteUrl } from "@/config/siteConfig";
import { getProjects } from "@/lib/content";
import { routeLocales } from "@/src/i18n/dictionaries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = productionSiteUrl;
  const lastModified = new Date("2026-06-23T16:30:03.000Z");
  const projects = await getProjects();
  const staticPaths = ["", "/about", "/projects", "/contact"];

  return routeLocales.flatMap((locale) => [
    ...staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);
}
