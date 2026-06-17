# Aydos Inyatdinov — Personal Website

My personal site for sharing who I am: projects, reflections, books I read, links I find useful, and how to reach me.

Live: [aydosinyatdinov.dev](https://aydosinyatdinov.dev)

## What is this?

This is my personal website — a single place where I share reflections, books I read, curated finds, projects, and contact info.

**Pages:**

- **Home** — intro, Yandex Music playlist embed, and what I'm learning and building right now
- **Reflections** — essays and thoughts written as Markdown
- **Books** — my reading list
- **Finds** — useful links and articles from around the web
- **Achievements** — awards and milestones
- **Contact** — email, Telegram, LinkedIn, and GitHub

## Why did you build it?

People rarely message someone out of the blue — they want to see who you are first. This site is that place: a single home for my projects, reflections, useful finds, and how to reach me.

## What can it do?

The site showcases who I am and what I'm working on. Content lives in the repo as files — there is no separate CMS or database.

| Content type | How it is stored |
|---|---|
| Reflections / essays | Markdown in `content/reflections/`, parsed with gray-matter and remark |
| Books, finds, achievements, home panels | TypeScript data files in `data/` |
| Contact | `data/site.ts` and the Contact page |

**Features already built:**

- Dark / light theme toggle
- Page transitions and scroll animations
- Embedded Yandex Music playlist on the home page
- SEO metadata and sitemap

## How do I run it?

**Prerequisites:** Node.js (v18+ recommended for Next.js 16)

```bash
cd my-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Other scripts:**

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

### Adding content

**New reflection:** add a `.md` file under `content/reflections/` with frontmatter:

```markdown
---
title: My Post Title
date: 2026-03-01
tags: [tag1, tag2]
---

Your essay content here.
```

**New find, book, or achievement:** edit the matching file in `data/` (`finds.ts`, `books.ts`, `achievements.ts`).

**Contact info:** update `data/site.ts`.

## What technologies did you use?

**Core**

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

**Styling & UI**

- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations and page transitions
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light mode
- Custom CSS in `app/globals.css`
- Fonts: Inter + Syne (`app/fonts.ts`)

**Content**

- [gray-matter](https://github.com/jonschlinkert/gray-matter) — Markdown frontmatter parsing
- [remark](https://remark.js.org) + remark-html — Markdown to HTML

**Tooling & deployment**

- ESLint (`eslint-config-next`)
- [@vercel/analytics](https://vercel.com/docs/analytics) — site analytics
- Hosted on [Vercel](https://vercel.com)

## What did you learn?

- **Vibe coding with AI** — how to write clearer prompts and debug with AI assistance
- **HTML embedding** — embedding external content (Yandex Music iframe) to share a music playlist on the home page
- Building a real site incrementally: routing, content structure, and small UX details like theme toggle and motion

## What are you planning to improve?

- Improve overall **design** and visual polish
- Share **more information and content** — more reflections, books, and finds
- Improve **UI and UX** — layout, navigation, readability, and interactions
