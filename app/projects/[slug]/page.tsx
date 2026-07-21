import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@data/projects";
import { getProject } from "@lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: project.name,
      description: project.description,
      url,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const paragraphs = project.details ?? [project.description];

  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{`// projects / ${project.slug}`}</p>
        <div className="project-detail__title-row">
          <h1 className="page-header__title">{project.name}</h1>
          <span
            className={
              project.status === "live"
                ? "project-card__status project-card__status--live"
                : "project-card__status"
            }
          >
            {project.status}
          </span>
        </div>
      </header>

      <div className="project-detail__shot">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1280}
            height={800}
            sizes="(max-width: 760px) 100vw, 760px"
            className="project-detail__img"
            priority
          />
        ) : (
          <span className="project-card__thumb-label" aria-hidden="true">
            no screenshot yet
          </span>
        )}
      </div>

      <div className="project-detail__body">
        {paragraphs.map((p) => (
          <p key={p} className="project-detail__para">
            {p}
          </p>
        ))}
      </div>

      <div className="project-card__tags project-detail__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-detail__visit"
        >
          visit the live project ↗
        </a>
      )}

      <Link href="/projects" className="section__link" style={{ marginTop: "40px" }}>
        ← all projects
      </Link>
    </div>
  );
}
