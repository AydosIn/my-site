import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReflectionPostContent } from "@components/ReflectionPostContent";
import { getAllReflections, getReflectionBySlug } from "@lib/reflections";
import { formatDate } from "@lib/utils";

type Props = { params: Promise<{ slug: string }> };

// Every page is generated at build time, so any other slug is a real 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllReflections();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getReflectionBySlug(slug);
  if (!post) return {};

  const title = post.title;
  const description = post.excerpt || undefined;
  const url = `/reflections/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: post.date || undefined,
    },
  };
}

export default async function ReflectionPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getReflectionBySlug(slug);
  if (!post) notFound();

  return (
    <ReflectionPostContent
      title={post.title}
      date={formatDate(post.date)}
      isoDate={post.date}
      html={post.html}
    />
  );
}
