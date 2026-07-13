"use client";

import Link from "next/link";
import { site, homeContactLinks } from "@data/site";
import { projects } from "@data/projects";
import { now } from "@data/now";
import { MotionProvider } from "@components/motion/MotionProvider";
import { RevealGroup, RevealItem } from "@components/motion/Reveal";

function Cmd({ children }: { children: React.ReactNode }) {
  return (
    <p className="term-cmd">
      <span className="term-cmd__path">~/aydos $</span> {children}
    </p>
  );
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const inner = (
    <>
      <span className="term-ls__name">{project.name}/</span>
      <span className="term-ls__desc">{project.description}</span>
      <span
        className={
          project.status === "live"
            ? "term-ls__status term-ls__status--live"
            : "term-ls__status"
        }
      >
        {project.status}
      </span>
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className="term-ls__row">
        {inner}
      </a>
    );
  }

  return (
    <Link href="/projects" className="term-ls__row">
      {inner}
    </Link>
  );
}

export function HomeContent() {
  return (
    <div className="page-shell">
      <MotionProvider>
        <RevealGroup className="term">
          <RevealItem className="term-block">
            <Cmd>whoami</Cmd>
            <p className="term-whoami">{site.homeQuote}</p>
          </RevealItem>

          <RevealItem className="term-block">
            <Cmd>cat now.txt</Cmd>
            <ul className="term-now">
              {now.items.map((item) => (
                <li key={item} className="term-now__item">
                  {item}
                </li>
              ))}
            </ul>
            <p className="term-now__updated">last updated: {now.updated}</p>
          </RevealItem>

          <RevealItem className="term-block">
            <Cmd>ls projects/</Cmd>
            <div className="term-ls">
              {projects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </div>
            <Link href="/projects" className="term-more">
              all projects →
            </Link>
          </RevealItem>

          <RevealItem className="term-block">
            <Cmd>cat contact.txt</Cmd>
            <p className="term-contact">
              {homeContactLinks.map((item, index) => (
                <span key={item.label}>
                  {index > 0 ? <span className="term-contact__sep">·</span> : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="term-contact__link"
                      {...(item.label === "email"
                        ? { title: `email ${site.contact.email}` }
                        : {})}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
              ))}
            </p>
            <p className="term-location">{site.homeLocation}</p>
          </RevealItem>

          <RevealItem>
            <p className="term-cmd">
              <span className="term-cmd__path">~/aydos $</span>
              <span className="hero__cursor" aria-hidden="true" />
            </p>
          </RevealItem>
        </RevealGroup>
      </MotionProvider>
    </div>
  );
}
