export type CvEntry = {
  title: string;
  org: string;
  date: string;
};

export type CvLink = {
  label: string;
  handle: string;
  href: string;
};

export const cvHeader = {
  name: "aydos inyatdinov",
  role: "project manager at aisha ai",
  status: "available for interesting work",
  location: "tashkent, uz",
  timezone: "asia/tashkent",
};

export const cvAbout =
  "18-year-old builder from tashkent. project manager at aisha ai, studying data science at aut tashkent. interested in ai, products, and building things that matter.";

export const cvExperience: CvEntry[] = [
  {
    title: "project manager",
    org: "aisha ai · tashkent, uz",
    date: "nov 2025 — present",
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: "american university of technology",
    org: "data science · tashkent, uz",
    date: "oct 2025 — may 2029",
  },
];

export const cvSkills = [
  "python",
  "html",
  "css",
  "git",
  "github",
  "ai",
  "prompt engineering",
  "problem solving",
  "decision making",
  "jira",
  "slack",
];

export const cvLinks: CvLink[] = [
  {
    label: "linkedin",
    handle: "in/aydos-inyatdinov",
    href: "https://www.linkedin.com/in/aydos-inyatdinov-282163343/",
  },
  {
    label: "github",
    handle: "@AydosIn",
    href: "https://github.com/AydosIn",
  },
  {
    label: "telegram",
    handle: "t.me/aydosffr",
    href: "https://t.me/aydosffr",
  },
  {
    label: "x",
    handle: "x.com/Aydosffr",
    href: "https://x.com/Aydosffr",
  },
  {
    label: "email",
    handle: "aydosed@gmail.com",
    href: "mailto:aydosed@gmail.com",
  },
];
