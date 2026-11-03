import Link from "next/link";
import { getAllReflections } from "@lib/reflections";

export const metadata = { title: "writing", alternates: { canonical: "/reflections" } };

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
}

export default async function ReflectionsPage() {
  const posts = await getAllReflections();

  return (
    <div className="page">
      <header className="page-head">
        <h1 className="page-title">things i&apos;ve written</h1>
        <p className="page-sub">notes on people, work, and figuring things out.</p>
      </header>

      {posts.length > 0 ? (
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/reflections/${post.slug}`} className="post-link">
                <span className="post-link__title">{post.title.toLowerCase()}</span>
                <time className="meta" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {post.excerpt && <span className="post-link__excerpt">{post.excerpt}</span>}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="page-note">nothing here yet.</p>
      )}
    </div>
  );
}
