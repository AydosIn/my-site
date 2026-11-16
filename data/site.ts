export const site = {
  title: "Aydos Inyatdinov",
  description: "Personal website of Aydos Inyatdinov: data science @ AUT, data engineer. Writing, projects, books, and photos.",
  url: "https://aydosinyatdinov.dev",
  ownerName: "Aydos Inyatdinov",
  searchSiteName: "Aydos Inyatdinov · data science @ AUT · data engineer",
  /** The role line under the name, used everywhere (header, cv, preview image). */
  role: ["Data science @ AUT", "Data engineer"],
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

export const contactLinks = [
  { label: "Telegram", href: site.contact.telegram },
  { label: "GitHub", href: site.contact.github },
  { label: "LinkedIn", href: site.contact.linkedin },
  { label: "Instagram", href: site.contact.instagram },
  { label: "Email", href: mailtoUrl },
] as const;
