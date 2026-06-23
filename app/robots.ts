import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = "https://www.hichammahboub.live/sitemap.xml";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
