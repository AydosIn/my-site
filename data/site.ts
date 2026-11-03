export const site = {
  title: "aydos <3",
  description: "Personal website of Aydos Inyatdinov — data science @ aut · data engineer. Writing, projects, books, and photos.",
  url: "https://aydosinyatdinov.dev",
  ownerName: "Aydos Inyatdinov",
  searchSiteName: "Aydos Inyatdinov · data science @ aut · data engineer",
  /** The one role line, used everywhere (home, cv, preview image). */
  role: ["data science @ aut", "data engineer"],
  age: "18yo",
  homeQuote: "whoami? builder? overthinker? learner? student? or just an npc?",
  homeLocation: "tashkent, uzbekistan & nukus, karakalpakstan.",
  cvUrl: "/cv",
  contact: {
    telegram: "https://t.me/aydosffr",
    instagram: "https://www.instagram.com/aydos.inyatdinov/",
    github: "https://github.com/AydosIn",
    linkedin: "https://www.linkedin.com/in/aydos-inyatdinov-282163343/",
    x: "https://x.com/Aydosffr",
    email: "aydosed@gmail.com",
  },
};

// mailto opens whatever mail app the visitor uses (a Gmail compose link only works for Gmail users).
export const mailtoUrl = `mailto:${site.contact.email}?subject=${encodeURIComponent("hello")}`;

export const homeContactLinks = [
  { label: "telegram", href: site.contact.telegram },
  { label: "instagram", href: site.contact.instagram },
  { label: "github", href: site.contact.github },
  { label: "linkedin", href: site.contact.linkedin },
  { label: "x", href: site.contact.x || null },
  { label: "email", href: mailtoUrl },
] as const;
