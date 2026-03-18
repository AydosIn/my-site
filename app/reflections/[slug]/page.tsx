import { getAllReflections, getReflectionBySlug } from "@lib/reflections";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllReflections();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function ReflectionPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getReflectionBySlug(slug);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <div className="mt-2 text-sm text-gray-600">{post.date}</div>
      <div
        className="mt-6 text-gray-700 leading-7"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <div className="mt-8">
        <a href="/reflections" className="text-sm">← Back to Reflections</a>
      </div>
    </div>
  );
}