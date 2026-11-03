import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@data/projects";
import { getProject } from "@lib/projects";
import { ProjectStatus } from "@components/ProjectsList";

type Props = { params: Promise<{ slug: string }> };

// Every page is generated at build time, so any other slug is a real 404.
export const dynamicParams = false;

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
    <article className="page">
      <header className="page-head">
        <h1 className="page-title">{project.name}</h1>
        <p className="page-sub">
          <ProjectStatus status={project.status} />
        </p>
      </header>

      {project.image && (
        <div className="project-shot">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1280}
            height={800}
            sizes="(max-width: 720px) 100vw, 680px"
            className="project-shot__img"
            priority
          />
        </div>
      )}

      <div className="prose">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <p className="tags project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </p>

      <nav className="page-end" aria-label="more">
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer">
            visit the live project ↗
          </a>
        )}
        <Link href="/projects">← all projects</Link>
      </nav>
    </article>
  );
}
