import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@data/projects";
import { getProject } from "@lib/projects";
import { statusLabel } from "@components/ProjectsList";
import { Page } from "@components/Page";

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
    <Page as="article" title={project.name} sub={statusLabel[project.status]}>
      {project.image && (
        <div className="shot">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1280}
            height={800}
            sizes="(max-width: 720px) 100vw, 720px"
            className="shot__img"
            priority
          />
        </div>
      )}

      <div className="prose">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <p className="label page-note">{project.tags.join(" · ")}</p>

      <p className="page-end">
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="more">
            Visit the live project
          </a>
        )}
        <Link href="/projects" className="more">
          All projects
        </Link>
      </p>
    </Page>
  );
}
