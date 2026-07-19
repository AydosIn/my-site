import type { MetadataRoute } from "next";
import { site } from "@data/site";
import { getAllReflections } from "@lib/reflections";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const reflections = await getAllReflections();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/cv`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/books`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reflections`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...reflections.map((post) => ({
      url: `${base}/reflections/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rules`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
