export type Project = {
  slug: string;
  name: string;
  /** One-liner shown under the name in lists. Keep it short. */
  description: string;
  /** Small grey label after the name on the home page (platform or stack). */
  label: string;
  /** Paragraphs shown on the project's own page. Falls back to `description`. */
  details?: string[];
  tags: string[];
  /** "private" = built and running, but not public yet. */
  status: "live" | "in progress" | "private";
  /** External link to the live project. Omit until you have one. */
  href?: string;
  /** Screenshot path under /public (e.g. "/projects/landing.png"). Omit if there is none. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "obsidian-rag-bot",
    name: "Obsidian RAG bot",
    label: "Telegram",
    description: "A memory extension for my brain. It texts back answers pulled straight from my Obsidian notes.",
    details: [
      "I write a lot down: ideas, advice, goals. But hundreds of notes are only worth having if you can find the one you need. Normal search fails the moment you don't remember the exact word you used.",
      "So I stopped searching and started asking. It lives in Telegram as \"my mind\", and it has read my entire Obsidian vault. I text it something like \"send me all the info i have on backend and full stack\" and it answers from what I actually wrote: pulling the note, summarising it, and telling me which one it came from. No exact keywords, no digging through folders, no list of files to go read myself.",
      "Under the hood it's hybrid retrieval: FAISS vector search for meaning, BM25 for literal keywords, the two result sets fused and then reranked with a cross-encoder. Only the strongest chunks get handed to the model, which keeps the answer grounded in my own notes instead of invented. When I add new notes, one command refreshes its memory.",
    ],
    tags: ["python", "rag", "faiss", "telegram"],
    status: "private",
    image: "/projects/obsidian-rag-bot.jpg",
    // href: intentionally omitted — no public telegram link until rate limits are in place
  },
  {
    slug: "diana-bot",
    name: "Diana",
    label: "Telegram",
    description: "A Telegram bot that texts like a real person: short, lowercase, no emojis, never an assistant.",
    details: [
      "Diana is a Telegram bot built on one idea: she should feel like a person texting you back, not a chatbot answering a ticket.",
      "Her entire personality is a system prompt I wrote by hand. Always lowercase. No emojis, ever. No bullet points, no headers, no \"as an ai\", no \"great question\". The default reply is one short sentence; long answers are rare. She matches your energy: one word in, one or two words back. Dry when you're joking, warmer when you're not, and she'll actually hold an opinion instead of hiding behind neutrality.",
      "The detail I like most is that she doesn't always reply once. She can split a thought across two or three messages, the way a real person fires off texts in a row: \"wait\" / \"that's actually funny\" / \"but also no\".",
      "The persona lives in a markdown file the bot re-reads on every single reply, so I can retune how she talks without touching a line of Python or restarting anything. SQLite keeps her memory of past conversations, and she runs on a VPS under systemd.",
    ],
    tags: ["python", "openai", "telegram", "sqlite"],
    status: "private",
    image: "/projects/diana-bot.jpg",
    // href: intentionally omitted — no public telegram link until rate limits are in place
  },
  {
    slug: "events-community",
    name: "Events community",
    label: "Web",
    description: "Clubs, projects and workshops in Karakalpakstan that young people can actually join.",
    details: [
      "Events community is a platform for school students, gap year learners, and young people in Karakalpakstan to find clubs, projects, and workshops they can actually join, with a clear path from browsing to registration.",
      "The problem it solves is a quiet one: opportunities in Nukus and the wider region exist, but they're scattered and word-of-mouth. If you're not already in the right circle, you never hear about them. This puts them in one place.",
      "Built as a Next.js frontend against its own backend, with browse, sign-up, and join flows.",
    ],
    tags: ["next.js", "community", "events"],
    status: "private",
    image: "/projects/events-community.png",
    // href: intentionally omitted — no public links until rate limits are in place
  },
  {
    slug: "landing-page",
    name: "Landing page",
    label: "HTML & CSS",
    description: "A landing page hand-coded in pure HTML and CSS. Layout, styling and responsiveness done by hand.",
    details: [
      "A landing page written in nothing but HTML and CSS. No framework, no Tailwind, no component library.",
      "The point was to actually understand the fundamentals instead of reaching for a tool that hides them. Layout, spacing, typography, and responsive breakpoints are all done by hand.",
    ],
    tags: ["html", "css"],
    status: "private",
    image: "/projects/landing-page.png",
    // href: intentionally omitted — no public links until rate limits are in place
  },
  {
    slug: "personal-website",
    name: "Personal website",
    label: "Next.js",
    description: "This site. Writing, projects and a reading list, designed and built from scratch.",
    details: [
      "The site you're on right now. A home for my writing, reading list, and work. No template, no UI kit; I designed and built it from scratch.",
      "Next.js App Router with TypeScript, statically generated and deployed on Vercel. Posts are markdown files rendered at build time, so writing a new one is just dropping a file in a folder.",
    ],
    tags: ["next.js", "typescript", "tailwind"],
    status: "live",
    href: "https://aydosinyatdinov.dev",
    image: "/projects/personal-website.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
