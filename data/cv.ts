export type CvRow = {
  row: string;
  title: string;
  meta?: string;
  variant?: "primary" | "info";
};

export type CvLink = {
  row: string;
  label: string;
  handle: string;
  href: string;
};

export type CvSection = {
  num: string;
  id: string;
  title: string;
};

export const cvSections: CvSection[] = [
  { num: "001", id: "name", title: "name" },
  { num: "002", id: "about", title: "about" },
  { num: "003", id: "education", title: "education" },
  { num: "004", id: "experience", title: "experience" },
  { num: "005", id: "projects", title: "projects" },
  { num: "006", id: "skills", title: "skills" },
  { num: "007", id: "links", title: "links" },
];

export const cvStatus = {
  current: "aisha ai",
  loc: "tashkent, UZ",
  tz: "asia/tashkent",
  mail: "aydosed@gmail.com",
  git: "@AydosIn",
};

export const cvName = {
  primary: "aydos inyatdinov",
  info: "project manager at aisha ai",
};

export const cvAbout =
  "18-year-old builder from tashkent. project manager at aisha ai. studying data science at aut tashkent. interested in ai, products, and building things that matter.";

export const cvEducation: CvRow[] = [
  {
    row: "01",
    title: "American University of Technology, Tashkent",
    meta: "oct 2025 – may 2029",
    variant: "primary",
  },
  {
    row: "02",
    title: "data science",
    meta: "tashkent, UZ",
    variant: "info",
  },
];

export const cvExperience: CvRow[] = [
  {
    row: "01",
    title: "project manager",
    meta: "nov 2025 – present",
    variant: "info",
  },
  {
    row: "02",
    title: "aisha ai",
    meta: "tashkent, UZ",
    variant: "primary",
  },
];

export const cvProjects: CvRow[] = [
  {
    row: "01",
    title: "aydosinyatdinov.dev",
    meta: "2025 – present",
    variant: "primary",
  },
  {
    row: "02",
    title:
      "personal website. next.js 16, react 19, typescript, tailwind css 4, framer motion, vercel.",
    variant: "info",
  },
];

export const cvSkills =
  "python · html · css · git · github · ai · prompt engineering · vibecoding · problem solving · decision making · jira · slack · interviewing";

export const cvLinks: CvLink[] = [
  {
    row: "01",
    label: "linkedin",
    handle: "linkedin.com/in/aydos-inyatdinov-282163343",
    href: "https://www.linkedin.com/in/aydos-inyatdinov-282163343/",
  },
  {
    row: "02",
    label: "github",
    handle: "github.com/AydosIn",
    href: "https://github.com/AydosIn",
  },
  {
    row: "03",
    label: "telegram",
    handle: "t.me/aydosffr",
    href: "https://t.me/aydosffr",
  },
  {
    row: "04",
    label: "x",
    handle: "x.com/Aydosffr",
    href: "https://x.com/Aydosffr",
  },
  {
    row: "05",
    label: "instagram",
    handle: "instagram.com/aydos.inyatdinov",
    href: "https://www.instagram.com/aydos.inyatdinov/",
  },
  {
    row: "06",
    label: "email",
    handle: "aydosed@gmail.com",
    href: "mailto:aydosed@gmail.com",
  },
];