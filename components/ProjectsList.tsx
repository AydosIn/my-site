import Link from "next/link";
import type { Project } from "@data/projects";

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in progress": "In progress",
  private: "Private, demo on request",
};

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul className="list list--loose">
      {projects.map((project) => (
        <li key={project.slug}>
          <div className="item">
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            <span className="label">{project.label}</span>
          </div>
          <p className="item__desc">{project.description}</p>
        </li>
      ))}
    </ul>
  );
}
