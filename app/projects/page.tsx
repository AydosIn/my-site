import Link from "next/link";
import { ProjectsList } from "@components/ProjectsList";
import { getProjects } from "@lib/projects";

export const metadata = { title: "projects" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{"// projects"}</p>
        <h1 className="page-header__title">building</h1>
        <p className="page-header__sub">things i&apos;ve designed, coded, and shipped.</p>
      </header>

      <ProjectsList projects={projects} />

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
