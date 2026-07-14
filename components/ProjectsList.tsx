import Image from "next/image";
import Link from "next/link";
import type { Project } from "@data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__thumb">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 560px) 100vw, 220px"
            className="project-card__img"
          />
        ) : (
          <span className="project-card__thumb-label" aria-hidden="true">
            no screenshot yet
          </span>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <h2 className="project-card__name">{project.name}</h2>
          <span
            className={
              project.status === "live"
                ? "project-card__status project-card__status--live"
                : "project-card__status"
            }
          >
            {project.status}
          </span>
          <span className="project-card__arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="project-card__visit">read more →</span>
      </div>
    </Link>
  );
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="project-more">
        <span className="project-more__title">+ more coming soon</span>
        <span className="project-more__sub">
          smaller projects and experiments — i&apos;ll add them as i publish.
        </span>
      </div>
    </>
  );
}
