import { site } from "@data/site";

export type HomePanelItem = {
  title: string;
  detail?: string;
  href?: string;
  external?: boolean;
};

export const learningNow: HomePanelItem[] = [
  { title: "Data Science", detail: "American University of Technology" },
  { title: "Software engineering", detail: "fundamentals & practice" },
  { title: "How products get built", detail: "reading & observing teams" },
];

export const buildingNow: HomePanelItem[] = [
  {
    title: "Personal Website",
    detail: "Next.js · TypeScript · Vercel",
    href: site.url,
    external: true,
  },
  { title: "My identity", detail: "character & who I am" },
  {
    title: "Python CLI games",
    detail: "word & number guessing",
    href: "/achievements",
  },
];
