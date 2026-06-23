import Link from "next/link";
import { ReflectionPostContent } from "@components/ReflectionPostContent";
import { getAllReflections, getReflectionBySlug } from "@lib/reflections";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllReflections();
  return posts.map((p) => ({ slug: p.slug }));
}

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
}

export default async function ReflectionPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getReflectionBySlug(slug);
  return (
    <ReflectionPostContent
      title={post.title.toLowerCase()}
      date={formatDate(post.date)}
      html={post.html}
    />
  );
}
