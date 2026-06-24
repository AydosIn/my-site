import type { MetadataRoute } from "next";
import { site } from "@data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/cv`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/books`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reflections`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
