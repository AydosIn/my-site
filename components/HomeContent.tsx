import Link from "next/link";
import { site, contactLinks } from "@data/site";
import { projects } from "@data/projects";
import { books, featuredBookIds } from "@data/books";
import { cvEducation, cvExperience } from "@data/cv";
import { featuredPhotoIds, photos } from "@data/photos";
import { SiteHeader } from "@components/SiteHeader";
import { PhotoGrid } from "@components/PhotoGrid";

export type HomeReflection = {
  slug: string;
  title: string;
  /** Year, shown as the grey label. */
  year: string;
};

const HOME_BOOK_COUNT = 4;

const featuredBooks = featuredBookIds
  .map((id) => books.find((book) => book.id === id))
  .filter((book) => book !== undefined)
  .slice(0, HOME_BOOK_COUNT);

const featuredPhotos = featuredPhotoIds
  .map((id) => photos.find((photo) => photo.id === id))
  .filter((photo) => photo !== undefined);

const cvEntries = [...cvExperience, ...cvEducation];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}

export function HomeContent({
  reflections,
  totalReflections,
}: {
  reflections: HomeReflection[];
  totalReflections: number;
}) {
  return (
    <div className="screen">
      <div className="wrap">
        <SiteHeader home />

        <div className="sections">
          <Section title="Writing">
            {reflections.length > 0 ? (
              <ul className="list">
                {reflections.map((post, i) => (
                  <li key={post.slug} className="item">
                    <Link href={`/reflections/${post.slug}`}>{post.title}</Link>
                    {i === 0 ? <span className="pill">New</span> : <span className="label">{post.year}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="label">Nothing here yet.</p>
            )}
            {totalReflections > reflections.length && (
              <Link href="/reflections" className="more">
                All {totalReflections} pieces
              </Link>
            )}
          </Section>

          <Section title="Projects">
            <ul className="list">
              {projects.map((project) => (
                <li key={project.slug} className="item">
                  <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                  <span className="label">{project.label}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Books">
            <ul className="list">
              {featuredBooks.map((book) => (
                <li key={book.id} className="item">
                  <Link href={`/books#${book.id}`}>{book.title}</Link>
                  <span className="label">{book.author}</span>
                </li>
              ))}
            </ul>
            <Link href="/books" className="more">
              All {books.length} books
            </Link>
          </Section>

          <Section title="Experience">
            <ul className="list">
              {cvEntries.map((entry) => (
                <li key={entry.title} className="item">
                  <span className="item__text">
                    {entry.title}, {entry.org.split(" · ")[0]}
                  </span>
                  <span className="label">{entry.years}</span>
                </li>
              ))}
            </ul>
            <Link href={site.cvUrl} className="more">
              Full CV
            </Link>
          </Section>

          <Section title="Contact">
            <ul className="links-row">
              {contactLinks.map((link) => {
                const external = !link.href.startsWith("mailto:");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title="Photos">
            <Link href="/photos" aria-label="All photos" className="photos-link">
              <PhotoGrid photos={featuredPhotos} />
            </Link>
          </Section>
        </div>
      </div>
    </div>
  );
}
