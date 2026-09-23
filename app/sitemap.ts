import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/work", "/ai-os", "/research", "/writing", "/about", "/services", "/resume", "/contact", "/now"];

  return routes.map((route) => ({
    url: `https://housniahmed.com${route}`,
    lastModified: new Date(),
  }));
}
