import fs from "node:fs";
import path from "node:path";
import { projects, type Project } from "@data/projects";

/**
 * Screenshots are dropped into /public by hand, so a project may point at an
 * image that isn't there yet. next/image would render a broken <img> for a
 * missing file; the card already has a "no screenshot yet" placeholder for an
 * absent `image`, so strip the path instead and let that take over.
 *
 * Server-only: reads from disk at render/build time.
 */
function resolveImage(project: Project): Project {
  if (!project.image) return project;
  const file = path.join(process.cwd(), "public", project.image);
  if (fs.existsSync(file)) return project;
  const { image: _missing, ...rest } = project;
  return rest;
}

export function getProjects(): Project[] {
  return projects.map(resolveImage);
}

export function getProject(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project ? resolveImage(project) : undefined;
}
