import { ReflectionPostContent } from "@components/ReflectionPostContent";
import { getAllReflections, getReflectionBySlug } from "@lib/reflections";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllReflections();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function ReflectionPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getReflectionBySlug(slug);
  return <ReflectionPostContent title={post.title} date={post.date} html={post.html} />;
}
