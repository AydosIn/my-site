import Link from "next/link";
import { site } from "@data/site";
import { recentlyRead } from "@data/home";
import { projects } from "@data/projects";
import { getAllReflections } from "@lib/reflections";

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toLowerCase();
}

export default async function HomePage() {
  const reflections = (await getAllReflections()).slice(0, 3);

  return (
    <>
      <section className="hero">
        <p className="hero__comment">// engineer & thinker</p>

        <div className="hero__tagline">
          {site.tagline.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <div className="sections">
        <section className="section">
          <h2 className="section__header">// building</h2>
          {projects.map((project) => (
            <div key={project.name} className="section__row">
              <span className="section__row-left">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
                <span className="tag">[{project.status}]</span>
              </span>
              <span className="section__row-right">{project.stack}</span>
            </div>
          ))}
          <Link href="/projects" className="section__link">
            all projects →
          </Link>
        </section>

        <section className="section">
          <h2 className="section__header">// reflections</h2>
          {reflections.length > 0 ? (
            reflections.map((post) => (
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
          <Link href="/reflections" className="section__link">
            all reflections →
          </Link>
        </section>

        <section className="section">
          <h2 className="section__header">// recently read</h2>
          {recentlyRead.map((book) => (
            <div key={book.title} className="section__row">
              <span className="section__row-left">{book.title.toLowerCase()}</span>
              <span className="section__row-right">{book.author.toLowerCase()}</span>
            </div>
          ))}
          <Link href="/books" className="section__link">
            all books →
          </Link>
        </section>
      </div>
    </>
  );
}
