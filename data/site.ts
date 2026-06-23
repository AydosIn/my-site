export const site = {
  title: "Aydos Inyatdinov — Engineer & Thinker",
  description: "Personal website of Aydos Inyatdinov — engineer, critical thinker, and reader.",
  url: "https://aydosinyatdinov.dev",
  ownerName: "Aydos Inyatdinov",
  devFacts: ["aut", "18yo", "data science", "aisha ai"],
  homeQuote: "whoami? builder? overthinker? learner? student? or just an npc?",
  homeStatus:
    "learning/building as much as possible, seeking for people who is interested in tech/ai.",
  homeLocation: "tashkent, uzbekistan and nukus, karakalpakstan.",
  cvUrl: "/cv.pdf",
  contact: {
    telegram: "https://t.me/aydosffr",
    instagram: "https://www.instagram.com/aydos.inyatdinov/",
    github: "https://github.com/AydosIn",
    linkedin: "https://www.linkedin.com/in/aydos-inyatdinov-282163343/",
    x: "",
  },
};

export const homeContactLinks = [
  { label: "telegram", href: site.contact.telegram },
  { label: "instagram", href: site.contact.instagram },
  { label: "github", href: site.contact.github },
  { label: "linkedin", href: site.contact.linkedin },
  { label: "x", href: site.contact.x || null },
] as const;
