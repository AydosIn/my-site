import { site } from "./site";

export type CvEntry = {
  title: string;
  org: string;
  /** Short years shown as the grey label on the home page. */
  years: string;
  date: string;
};

export type CvLink = {
  label: string;
  handle: string;
  href: string;
};

export const cvHeader = {
  name: site.ownerName,
  role: site.role.join(" · "),
  location: "Tashkent & Nukus, Uzbekistan",
};

export const cvAbout =
  "18-year-old student from Tashkent, studying data science at AUT Tashkent. AI enthusiast interested in technology, products, and building things that matter.";

export const cvExperience: CvEntry[] = [
  {
    title: "Project manager",
    org: "Aisha AI · Tashkent",
    years: "2025–2026",
    date: "Nov 2025 – Jul 2026",
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: "American University of Technology",
    org: "Data science · Tashkent",
    years: "2025–2029",
    date: "Oct 2025 – May 2029",
  },
];

export type CvSkillGroup = {
  label: string;
  skills: string[];
};

export const cvSkills: CvSkillGroup[] = [
  {
    label: "Software engineering",
    skills: ["Python", "Git", "GitHub", "HTML", "CSS"],
  },
  {
    label: "AI / data science",
    skills: ["LLMs", "Metadata", "Embeddings", "Vector DBs", "RAG", "Prompt engineering"],
  },
  {
    label: "Project management",
    skills: ["Slack", "Jira", "Customer development"],
  },
];

export const cvLinks: CvLink[] = [
  {
    label: "LinkedIn",
    handle: "in/aydos-inyatdinov",
    href: site.contact.linkedin,
  },
  {
    label: "GitHub",
    handle: "@AydosIn",
    href: site.contact.github,
  },
  {
    label: "Telegram",
    handle: "t.me/aydosffr",
    href: site.contact.telegram,
  },
  {
    label: "X",
    handle: "x.com/Aydosffr",
    href: site.contact.x,
  },
  {
    label: "Email",
    handle: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
];
