import Link from "next/link";
import { getAllReflections } from "@lib/reflections";

export const metadata = { title: "reflections" };

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toLowerCase();
}

export default async function ReflectionsPage() {
  const posts = await getAllReflections();

  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">// reflections</p>
        <h1 className="page-header__title">writing</h1>
      </header>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug} className="section__row">
            <Link href={`/reflections/${post.slug}`} className="section__row-left">
              {post.title.toLowerCase()}
            </Link>
            <span className="section__row-right">{formatDate(post.date)}</span>
          </div>
        ))
      ) : (
        <p style={{ color: "var(--dim)", fontSize: "12px" }}>nothing here yet.</p>
      )}

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
