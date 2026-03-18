import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { excerptFromHtml, toSlug } from "./utils";

const CONTENT_DIR = path.join(process.cwd(), "content", "reflections");

export type ReflectionMeta = {
  title: string;
  date: string;
  tags?: string[];
  slug: string;
  excerpt?: string;
};

export type ReflectionFull = ReflectionMeta & {
  html: string;
};

async function ensureContentDir() {
  try {
    await fs.access(CONTENT_DIR);
  } catch {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
  }
}

export async function getAllReflections(): Promise<ReflectionMeta[]> {
  await ensureContentDir();
  const files = await fs.readdir(CONTENT_DIR);
  const posts: ReflectionMeta[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);
    const processed = await remark().use(html).process(content);
    const htmlString = String(processed);
    const slug =
      typeof data.slug === "string" && data.slug.length > 0
        ? data.slug
        : toSlug((data.title as string) ?? file.replace(/\.md$/, ""));

    posts.push({
      title: (data.title as string) ?? file.replace(/\.md$/, ""),
      date: (data.date as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      slug,
      excerpt: excerptFromHtml(htmlString)
    });
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getReflectionBySlug(slug: string): Promise<ReflectionFull> {
  await ensureContentDir();
  const files = await fs.readdir(CONTENT_DIR);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);
    const computedSlug =
      typeof data.slug === "string" && data.slug.length > 0
        ? data.slug
        : toSlug((data.title as string) ?? file.replace(/\.md$/, ""));

    if (computedSlug === slug) {
      const processed = await remark().use(html).process(content);
      const htmlString = String(processed);
      return {
        title: (data.title as string) ?? file.replace(/\.md$/, ""),
        date: (data.date as string) ?? "",
        tags: (data.tags as string[]) ?? [],
        slug: computedSlug,
        html: htmlString,
        excerpt: excerptFromHtml(htmlString)
      };
    }
  }

  throw new Error(`Reflection not found: ${slug}`);
}