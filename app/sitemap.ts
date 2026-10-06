import type { MetadataRoute } from "next";
import { navigation, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [...navigation.map((n) => n.href), "/privatnost", "/uslovi-koristenja"];

  return staticPages.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
