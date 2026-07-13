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

function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}

async function ensureContentDir() {
  try {
    await fs.access(CONTENT_DIR);
  } catch {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
  }
}

// Parse + render every markdown file at most once per process. Both the list
// and the per-slug lookup share this cache, so generating N static pages no
// longer re-reads and re-renders every file N times.
let cache: Promise<ReflectionFull[]> | null = null;

async function loadAll(): Promise<ReflectionFull[]> {
  if (cache) return cache;

  cache = (async () => {
    await ensureContentDir();
    const files = await fs.readdir(CONTENT_DIR);
    const posts: ReflectionFull[] = [];

    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const fullPath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(raw);
      const processed = await remark().use(html).process(content);
      const htmlString = String(processed);
      const fallbackTitle = file.replace(/\.md$/, "");
      const slug =
        typeof data.slug === "string" && data.slug.length > 0
          ? data.slug
          : toSlug((data.title as string) ?? fallbackTitle);

      posts.push({
        title: (data.title as string) ?? fallbackTitle,
        date: normalizeDate(data.date),
        tags: (data.tags as string[]) ?? [],
        slug,
        html: htmlString,
        excerpt: excerptFromHtml(htmlString),
      });
    }

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  })();

  return cache;
}

export async function getAllReflections(): Promise<ReflectionMeta[]> {
  const posts = await loadAll();
  // Return metadata only (the rendered html is only needed on the post page).
  return posts.map((post) => ({
    title: post.title,
    date: post.date,
    tags: post.tags,
    slug: post.slug,
    excerpt: post.excerpt,
  }));
}

export async function getReflectionBySlug(slug: string): Promise<ReflectionFull> {
  const posts = await loadAll();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Reflection not found: ${slug}`);
  return post;
}