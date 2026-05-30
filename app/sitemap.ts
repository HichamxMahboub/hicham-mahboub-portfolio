import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  if (!baseUrl) {
    return [];
  }

  const staticRoutes = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projects = await getProjects();
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
