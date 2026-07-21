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

      <section className="projects-walkthrough" aria-labelledby="walkthrough-title">
        <h2 id="walkthrough-title" className="projects-walkthrough__title">
          Video walkthroughs — coming soon
        </h2>
        <p className="projects-walkthrough__description">
          A walkthrough for every project is on the way. I&apos;ll cover the architecture,
          project structure, implementation details, and lessons learned while building it.
        </p>
      </section>

      <ProjectsList projects={projects} />

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
