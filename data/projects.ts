export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  status: "live" | "in progress";
  /** External link to the live project. Omit until you have one. */
  href?: string;
  /** Screenshot path under /public (e.g. "/projects/landing.png"). Omit for a placeholder. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "personal-website",
    name: "personal website",
    description:
      "this site — a terminal-styled personal home, blog, and reading list. designed and built from scratch.",
    tags: ["next.js", "typescript", "tailwind"],
    status: "live",
    href: "https://aydosinyatdinov.dev",
  },
  {
    slug: "landing-page",
    name: "landing page",
    description:
      "a landing page hand-coded in pure html & css — layout, styling, and responsiveness done by hand.",
    tags: ["html", "css"],
    status: "in progress",
    // href: add the live url
  },
  {
    slug: "events-community",
    name: "events community project",
    description:
      "a community project around tech events — bringing people together to learn and build.",
    tags: ["community", "events"],
    status: "in progress",
    // href: add the project link
  },
];
