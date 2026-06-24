export const site = {
  title: "<3",
  description: "Personal website of Aydos Inyatdinov — engineer, critical thinker, and reader.",
  url: "https://aydosinyatdinov.dev",
  ownerName: "Aydos Inyatdinov",
  devFacts: ["aut", "18yo", "data science", "aisha ai"],
  homeQuote: "whoami? builder? overthinker? learner? student? or just an npc?",
  homeStatus:
    "learning/building as much as possible, seeking people who are interested in tech/ai.",
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

export const gmailComposeUrl = `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(site.contact.email)}&su=${encodeURIComponent("hello")}&body=&tf=cm`;

export const homeContactLinks = [
  { label: "telegram", href: site.contact.telegram },
  { label: "instagram", href: site.contact.instagram },
  { label: "github", href: site.contact.github },
  { label: "linkedin", href: site.contact.linkedin },
  { label: "x", href: site.contact.x || null },
  { label: "email", href: gmailComposeUrl },
] as const;
