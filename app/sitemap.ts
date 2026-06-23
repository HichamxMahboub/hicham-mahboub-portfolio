import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getProjects } from "@/lib/content";
import { routeLocales } from "@/src/i18n/dictionaries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteConfig.url) return [];

  const baseUrl = siteConfig.url;
  const projects = await getProjects();
  const staticPaths = ["", "/about", "/projects", "/contact"];

  return routeLocales.flatMap((locale) => [
    ...staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);
}
