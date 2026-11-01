import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
import { site, homeContactLinks } from "@data/site";
import { projects } from "@data/projects";
import { books, featuredBookIds } from "@data/books";
import { cvEducation, cvExperience } from "@data/cv";
import { now } from "@data/now";
import { ThemeToggle } from "@components/ThemeToggle";
import { FadeLink } from "@components/FadeLink";
import { BunnyLogo } from "@components/BunnyLogo";

export type HomeReflection = {
  slug: string;
  title: string;
  date: string;
};

const contactIcons: Record<(typeof homeContactLinks)[number]["label"], IconType> = {
  telegram: FaTelegram,
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  email: FaRegEnvelope,
};

const featuredBooks = featuredBookIds
  .map((id) => books.find((book) => book.id === id))
  .filter((book) => book !== undefined);

const cvEntries = [...cvExperience, ...cvEducation];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="home-section">
      <h2 className="home-h2">{title}</h2>
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
    <div className="home">
      <header className="home-author">
        <ThemeToggle className="home-theme" variant="icon" />
        <BunnyLogo />
        <h1 className="home-name">{site.ownerName.toLowerCase()}</h1>
        <p className="home-sub">
          <b>{site.homeTagline[0]}</b>
          {site.homeTagline.slice(1).map((part) => ` · ${part}`)} · 18yo
        </p>
        <ul className="home-icons" aria-label="elsewhere">
          {homeContactLinks.map((item) => {
            if (!item.href) return null;
            const Icon = contactIcons[item.label];
            const title = item.label === "email" ? `email ${site.contact.email}` : item.label;
            return (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} title={title}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      <Section title="hi there!">
        <div className="home-prose">
          <p>
            my name is aydos. i study data science at the american university of technology in tashkent,
            and i split my time between tashkent and nukus, karakalpakstan.
          </p>
          <p>
            until july 2026 i was a project manager at aisha ai. these days i&apos;m building ai agents for
            different tasks, and i&apos;m always looking for people who are into tech and ai.
          </p>
          <p className="home-whoami">{site.homeQuote}</p>
        </div>
      </Section>

      <Section title="things i've written">
        {reflections.length > 0 ? (
          <ul className="home-list">
            {reflections.map((post) => (
              <li key={post.slug}>
                <Link href={`/reflections/${post.slug}`}>{post.title.toLowerCase()}</Link>
                <span className="home-meta">{post.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="home-meta">nothing here yet.</p>
        )}
        <Link href="/reflections" className="home-more">
          {totalReflections > reflections.length
            ? `all ${totalReflections} reflections →`
            : "all reflections →"}
        </Link>
      </Section>

      <Section title="things i've built">
        <ul className="home-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              <span className="home-meta">{project.description}</span>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="home-more">
          all projects →
        </Link>
      </Section>

      <Section title="books that stuck with me">
        <ul className="home-list">
          {featuredBooks.map((book) => (
            <li key={book.id}>
              <Link href="/books">{book.title.toLowerCase()}</Link>
              <span className="home-meta">{book.author.toLowerCase()}</span>
            </li>
          ))}
        </ul>
        <Link href="/books" className="home-more">
          all {books.length} books →
        </Link>
      </Section>

      <Section title="moments i wanted to keep">
        <FadeLink href="/photos" className="home-more">
          see the photos →
        </FadeLink>
      </Section>

      <Section title="what i'm doing now">
        <ul className="home-list">
          {now.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="home-meta">last updated: {now.updated}</p>
      </Section>

      <Section title="experience">
        <ul className="home-list">
          {cvEntries.map((entry) => (
            <li key={entry.title}>
              {entry.title}
              <span className="home-meta">
                {entry.org} · {entry.date}
              </span>
            </li>
          ))}
        </ul>
        <Link href={site.cvUrl} className="home-more">
          full cv →
        </Link>
      </Section>

      <footer className="home-foot">made with &lt;3 in tashkent &amp; nukus</footer>
    </div>
  );
}
