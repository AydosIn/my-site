"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site, homeContactLinks } from "@data/site";
import { projects } from "@data/projects";
import { books, featuredBookIds } from "@data/books";
import { cvEducation, cvExperience, type CvEntry } from "@data/cv";
import { now } from "@data/now";
import { MotionProvider } from "@components/motion/MotionProvider";
import { RevealGroup, RevealItem } from "@components/motion/Reveal";
import { ThemeToggle } from "@components/ThemeToggle";

export type HomeReflection = {
  slug: string;
  title: string;
  date: string;
};

const tabs = [
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "reflections", label: "reflections" },
  { id: "books", label: "books" },
  { id: "now", label: "now" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const featuredBooks = featuredBookIds
  .map((id) => books.find((book) => book.id === id))
  .filter((book) => book !== undefined);

/** The fake command each panel "printed", shown above its content. */
function Cmd({ children }: { children: React.ReactNode }) {
  return (
    <p className="home-cmd">
      <span>$</span> {children}
    </p>
  );
}

function CvRows({ entries }: { entries: CvEntry[] }) {
  return (
    <ul className="home-rows">
      {entries.map((entry) => (
        <li key={entry.title}>
          <div className="home-row">
            <span className="home-row__title">{entry.title}</span>
            <span className="home-row__meta">{entry.date}</span>
            <span className="home-row__desc">{entry.org}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Panel({
  tab,
  reflections,
  totalReflections,
}: {
  tab: TabId;
  reflections: HomeReflection[];
  totalReflections: number;
}) {
  switch (tab) {
    case "experience":
      return (
        <>
          <Cmd>cat experience.log</Cmd>
          <p className="home-label">work</p>
          <CvRows entries={cvExperience} />
          <p className="home-label">education</p>
          <CvRows entries={cvEducation} />
          <Link href={site.cvUrl} className="home-more">
            full cv →
          </Link>
        </>
      );

    case "projects":
      return (
        <>
          <Cmd>ls projects/</Cmd>
          <ul className="home-rows">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="home-row">
                  <span className="home-row__title">{project.name}/</span>
                  <span className="home-row__meta">{project.tags.slice(0, 2).join(" · ")}</span>
                  <span className="home-row__desc">{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/projects" className="home-more">
            all projects →
          </Link>
        </>
      );

    case "reflections":
      return (
        <>
          <Cmd>ls reflections/</Cmd>
          {reflections.length > 0 ? (
            <ul className="home-rows">
              {reflections.map((post) => (
                <li key={post.slug}>
                  <Link href={`/reflections/${post.slug}`} className="home-row">
                    <span className="home-row__title">{post.title.toLowerCase()}</span>
                    <span className="home-row__meta">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="home-empty">nothing here yet.</p>
          )}
          <Link href="/reflections" className="home-more">
            {totalReflections > reflections.length
              ? `all ${totalReflections} reflections →`
              : "all reflections →"}
          </Link>
        </>
      );

    case "books":
      return (
        <>
          <Cmd>head -{featuredBooks.length} books.txt</Cmd>
          <ul className="home-rows">
            {featuredBooks.map((book) => (
              <li key={book.id}>
                <Link href="/books" className="home-row">
                  <span className="home-row__title">{book.title.toLowerCase()}</span>
                  <span className="home-row__meta">{book.author.toLowerCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/books" className="home-more">
            all {books.length} books →
          </Link>
        </>
      );

    case "now":
      return (
        <>
          <Cmd>cat now.txt</Cmd>
          <ul className="home-now">
            {now.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="home-updated">last updated: {now.updated}</p>
        </>
      );
  }
}

export function HomeContent({
  reflections,
  totalReflections,
}: {
  reflections: HomeReflection[];
  totalReflections: number;
}) {
  const [active, setActive] = useState<TabId>("experience");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Number keys 1–5 jump straight to a tab, like switching tmux windows.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      const index = Number(event.key) - 1;
      if (Number.isInteger(index) && index >= 0 && index < tabs.length) {
        setActive(tabs[index].id);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Arrow keys move between tabs when one has focus (standard tablist behaviour).
  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (next === null) return;
    event.preventDefault();
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="home">
      <ThemeToggle className="home-theme" />

      <MotionProvider>
        <RevealGroup className="home-col">
          <RevealItem>
            <p className="home-prompt">
              <span>~/aydos $</span> whoami
            </p>
            <h1 className="home-name">
              {site.ownerName}
              <span className="home-name__cursor" aria-hidden="true" />
            </h1>
            <p className="home-sub">
              {site.homeTagline.map((part, index) => (
                <span key={part}>
                  {index > 0 ? (
                    <span className="home-sub__sep" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {part}
                </span>
              ))}
            </p>
          </RevealItem>

          <RevealItem>
            <p className="home-links">
              {homeContactLinks.map((item, index) => (
                <span key={item.label}>
                  {index > 0 ? <span className="home-links__dot">·</span> : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      {...(item.label === "email" ? { title: `email ${site.contact.email}` } : {})}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
              ))}
            </p>
          </RevealItem>

          <RevealItem>
            <div className="home-tabs" role="tablist" aria-label="sections">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={active === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={active === tab.id ? 0 : -1}
                  className="home-tab"
                  onClick={() => setActive(tab.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <i>{index + 1}</i>
                  {tab.label}
                </button>
              ))}
              <Link href={site.cvUrl} className="home-tab home-tab--link">
                cv
              </Link>
              <p className="home-tabs__hint">press 1–{tabs.length} to switch</p>
            </div>
          </RevealItem>

          <RevealItem>
            {/* key={active} remounts the panel so its fade-in replays on every switch */}
            <section
              key={active}
              className="home-panel"
              id={`panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
            >
              <Panel tab={active} reflections={reflections} totalReflections={totalReflections} />
            </section>
          </RevealItem>

          <RevealItem>
            <footer className="home-foot">
              <span>{site.homeLocation}</span>
              <Link href="/rules" className="home-foot__rules">
                rules &gt;&gt;
              </Link>
            </footer>
          </RevealItem>
        </RevealGroup>
      </MotionProvider>
    </div>
  );
}
