import { ProjectsList } from "@components/ProjectsList";
import { Page } from "@components/Page";
import { getProjects } from "@lib/projects";
import { site } from "@data/site";

export const metadata = { title: "Projects", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <Page title="Projects" sub="Designed, coded, and shipped by me.">
      <ProjectsList projects={getProjects()} />

      <p className="page-note">
        Smaller experiments live on{" "}
        <a href={site.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </Page>
  );
}
