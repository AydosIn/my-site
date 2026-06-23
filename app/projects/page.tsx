import Link from "next/link";
import { projects } from "@data/projects";

export const metadata = { title: "projects" };

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">// projects</p>
        <h1 className="page-header__title">building</h1>
      </header>

      {projects.map((project) => (
        <div key={project.name} className="section__row">
          <span className="section__row-left">
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
            <span className="tag">[{project.status}]</span>
          </span>
          <span className="section__row-right">{project.stack}</span>
        </div>
      ))}

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
