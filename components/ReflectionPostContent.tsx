import Link from "next/link";
import { site } from "@data/site";

type Props = {
  title: string;
  date: string;
  isoDate: string;
  html: string;
};

export function ReflectionPostContent({ title, date, isoDate, html }: Props) {
  return (
    <article className="page">
      <header className="page-head">
        <h1 className="page-title">{title}</h1>
        <p className="page-sub">
          <time className="meta" dateTime={isoDate}>
            {date}
          </time>
        </p>
      </header>

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <aside className="reply">
        <p>
          thoughts on this? i&apos;d like to hear them —{" "}
          <a href={site.contact.telegram} target="_blank" rel="noreferrer">
            telegram ↗
          </a>{" "}
          or <a href={`mailto:${site.contact.email}`}>email</a>.
        </p>
      </aside>

      <nav className="page-end" aria-label="more">
        <Link href="/reflections">← all writing</Link>
      </nav>
    </article>
  );
}
