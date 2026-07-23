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
  role: "ai full-stack engineer",
  location: "tashkent, uz",
  timezone: "asia/tashkent",
};

export const cvAbout =
  "18-year-old student from tashkent, studying data science at aut tashkent. ai enthusiast interested in technology, products, and building things that matter.";

export const cvExperience: CvEntry[] = [
  {
    title: "project manager",
    org: "aisha ai · tashkent, uz",
    date: "nov 2025 — jul 2026",
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: "american university of technology",
    org: "data science · tashkent, uz",
    date: "oct 2025 — may 2029",
  },
];

export type CvSkillGroup = {
  label: string;
  tone: "code" | "ai" | "product";
  skills: string[];
};

export const cvSkills: CvSkillGroup[] = [
  {
    label: "software engineering",
    tone: "code",
    skills: ["python", "git", "github", "html", "css"],
  },
  {
    label: "ai / data science",
    tone: "ai",
    skills: [
      "llm",
      "metadata",
      "embeddings",
      "vector db",
      "rag",
      "prompt engineering",
    ],
  },
  {
    label: "project management",
    tone: "product",
    skills: ["slack", "jira", "customer development (custdev)"],
  },
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
