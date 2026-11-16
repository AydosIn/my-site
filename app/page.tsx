import { HomeContent, type HomeReflection } from "@components/HomeContent";
import { getAllReflections } from "@lib/reflections";

export const metadata = { alternates: { canonical: "/" } };

const HOME_REFLECTION_COUNT = 5;

export default async function HomePage() {
  // Reflections are markdown files on disk, so they're read here on the server.
  const posts = await getAllReflections();
  const reflections: HomeReflection[] = posts.slice(0, HOME_REFLECTION_COUNT).map((post) => ({
    slug: post.slug,
    title: post.title,
    year: post.date ? String(new Date(post.date).getFullYear()) : "",
  }));

  return <HomeContent reflections={reflections} totalReflections={posts.length} />;
}
