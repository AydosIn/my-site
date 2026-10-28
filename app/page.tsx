import { HomeContent, type HomeReflection } from "@components/HomeContent";
import { getAllReflections } from "@lib/reflections";

const HOME_REFLECTION_COUNT = 3;

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
}

export default async function HomePage() {
  // Reflections are markdown files on disk, so they're read here on the server
  // and handed to the (client-side) tabbed home page as plain data.
  const posts = await getAllReflections();
  const reflections: HomeReflection[] = posts.slice(0, HOME_REFLECTION_COUNT).map((post) => ({
    slug: post.slug,
    title: post.title,
    date: formatDate(post.date),
  }));

  return <HomeContent reflections={reflections} totalReflections={posts.length} />;
}
