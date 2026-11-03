import { ProjectsList } from "@components/ProjectsList";
import { getProjects } from "@lib/projects";
import { site } from "@data/site";

export const metadata = { title: "projects", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="page">
      <header className="page-head">
        <h1 className="page-title">things i&apos;ve built</h1>
        <p className="page-sub">designed, coded, and shipped by me.</p>
      </header>

      <ProjectsList projects={projects} />

      <p className="page-note">
        smaller experiments live on{" "}
        <a href={site.contact.github} target="_blank" rel="noreferrer">
          github ↗
        </a>
      </p>
    </div>
  );
}
