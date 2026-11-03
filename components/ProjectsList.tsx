import Image from "next/image";
import Link from "next/link";
import type { Project } from "@data/projects";

export const statusLabel: Record<Project["status"], string> = {
  live: "live",
  "in progress": "in progress",
  private: "private · demo on request",
};

export function ProjectStatus({ status }: { status: Project["status"] }) {
  return (
    <span className="status" data-status={status}>
      {statusLabel[status]}
    </span>
  );
}

function ProjectRow({ project, first }: { project: Project; first: boolean }) {
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="project">
        <div className="project__shot">
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 600px) 100vw, 240px"
              className="project__img"
              // The first screenshot is usually the largest thing on screen: load it right away.
              loading={first ? "eager" : undefined}
            />
          ) : (
            <span className="project__no-shot">no screenshot yet</span>
          )}
        </div>
        <div className="project__body">
          <h2 className="project__name">{project.name}</h2>
          <p className="project__desc">{project.description}</p>
          <p className="project__meta">
            <ProjectStatus status={project.status} />
            <span className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul className="projects">
      {projects.map((project, i) => (
        <ProjectRow key={project.slug} project={project} first={i === 0} />
      ))}
    </ul>
  );
}
