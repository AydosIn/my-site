export type ProjectStatus = "live" | "shipped";

export type Project = {
  name: string;
  stack: string;
  status: ProjectStatus;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "personal website",
    stack: "next.js · typescript · vercel",
    status: "live",
    href: "https://aydosinyatdinov.dev",
  },
  {
    name: "my identity",
    stack: "character · writing",
    status: "shipped",
  },
  {
    name: "number guessing game",
    stack: "python · cli",
    status: "shipped",
  },
  {
    name: "word guessing game",
    stack: "python · cli · strings",
    status: "shipped",
  },
];
