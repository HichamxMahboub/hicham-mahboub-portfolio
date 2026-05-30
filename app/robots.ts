import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const sitemap = siteConfig.url ? `${siteConfig.url}/sitemap.xml` : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
