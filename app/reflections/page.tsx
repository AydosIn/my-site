import Link from "next/link";
import { getAllReflections } from "@lib/reflections";

export const metadata = { title: "reflections" };

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toLowerCase();
}

export default async function ReflectionsPage() {
  const posts = await getAllReflections();

  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{"// reflections"}</p>
        <h1 className="page-header__title">writing</h1>
      </header>

      <ul className="reflections-list">
        {posts.map((post) => (
          <li key={post.slug} className="reflections-list__item">
            <Link href={`/reflections/${post.slug}`} className="reflections-list__link">
              <span className="reflections-list__title">{post.title.toLowerCase()}</span>
              <span className="reflections-list__date">{formatDate(post.date)}</span>
            </Link>
            {post.excerpt && (
              <p className="reflections-list__excerpt">{post.excerpt.toLowerCase()}</p>
            )}
          </li>
        ))}
      </ul>

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
