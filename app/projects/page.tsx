import Link from "next/link";
import { projects } from "@data/projects";
import { ProjectsList } from "@components/ProjectsList";

export const metadata = { title: "projects" };

export default function ProjectsPage() {
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
