export type Project = {
  slug: string;
  name: string;
  /** One-liner shown on the card and the home-page terminal row. Keep it short. */
  description: string;
  /** Paragraphs shown on the project's own page. Falls back to `description`. */
  details?: string[];
  tags: string[];
  status: "live" | "in progress";
  /** External link to the live project. Omit until you have one. */
  href?: string;
  /** Screenshot path under /public (e.g. "/projects/landing.png"). Omit for a placeholder. */
  image?: string;
  /** Optional announcement shown prominently above the project screenshot. */
  walkthrough?: {
    label: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "personal-website",
    name: "personal website",
    description:
      "this site — a terminal-styled personal home, blog, and reading list. designed and built from scratch.",
    details: [
      "the site you're on right now. a terminal-styled home for my writing, reading list, and work — no template, no ui kit. i designed and built it from scratch.",
      "next.js app router with typescript, static-generated and deployed on vercel. posts are markdown files rendered at build time, so writing a new one is just dropping a file in a folder.",
    ],
    tags: ["next.js", "typescript", "tailwind"],
    status: "live",
    href: "https://aydosinyatdinov.dev",
    image: "/projects/personal-website.png",
    walkthrough: {
      label: "video walkthrough — coming soon",
      description:
        "i’m recording a guided tour of how this project is built — the architecture, component structure, file organization, and a practical review of the code.",
    },
  },
  {
    slug: "landing-page",
    name: "landing page",
    description:
      "a landing page hand-coded in pure html & css — layout, styling, and responsiveness done by hand.",
    details: [
      "a landing page written in nothing but html and css. no framework, no tailwind, no component library.",
      "the point was to actually understand the fundamentals instead of reaching for a tool that hides them — layout, spacing, typography, and responsive breakpoints all done by hand.",
    ],
    tags: ["html", "css"],
    status: "live",
    image: "/projects/landing-page.png",
    // href: intentionally omitted — no public links until rate limits are in place
  },
  {
    slug: "events-community",
    name: "events community project",
    description:
      "clubs, projects, and workshops in karakalpakstan — opportunities young people can actually join.",
    details: [
      "events community is a platform for school students, gap year learners, and young people in karakalpakstan to find clubs, projects, and workshops they can actually join — with a clear path from browsing to registration.",
      "the problem it solves is a quiet one: opportunities in nukus and the wider region exist, but they're scattered and word-of-mouth. if you're not already in the right circle, you never hear about them. this puts them in one place.",
      "built as a next.js frontend against its own backend, with browse, sign-up, and join flows.",
    ],
    tags: ["next.js", "community", "events"],
    status: "live",
    image: "/projects/events-community.png",
    // href: intentionally omitted — no public links until rate limits are in place
  },
  {
    slug: "diana-bot",
    name: "diana",
    description:
      "a telegram bot that texts like a real person — short, lowercase, no emojis, never an assistant.",
    details: [
      "diana is a telegram bot built on one idea: she should feel like a person texting you back, not a chatbot answering a ticket.",
      "her entire personality is a system prompt i wrote by hand. always lowercase. no emojis, ever. no bullet points, no headers, no \"as an ai\", no \"great question\". the default reply is one short sentence — long answers are rare. she matches your energy: one word in, one or two words back. dry when you're joking, warmer when you're not, and she'll actually hold an opinion instead of hiding behind neutrality.",
      "the detail i like most is that she doesn't always reply once. she can split a thought across two or three messages, the way a real person fires off texts in a row — \"wait\" / \"that's actually funny\" / \"but also no\".",
      "the persona lives in a markdown file the bot re-reads on every single reply, so i can retune how she talks without touching a line of python or restarting anything. sqlite keeps her memory of past conversations, and she runs on a vps under systemd.",
    ],
    tags: ["python", "openai", "telegram", "sqlite"],
    status: "live",
    image: "/projects/diana-bot.jpg",
    // href: intentionally omitted — no public telegram link until rate limits are in place
  },
  {
    slug: "obsidian-rag-bot",
    name: "obsidian rag bot",
    description:
      "a memory extension for my brain — texts back answers pulled straight from my obsidian notes.",
    details: [
      "i write a lot down — ideas, advice, goals — but hundreds of notes are only worth having if you can find the one you need. normal search fails the moment you don't remember the exact word you used.",
      "so i stopped searching and started asking. it lives in telegram as \"my mind\", and it has read my entire obsidian vault. i text it something like \"send me all the info i have on backend and full stack\" and it answers from what i actually wrote — pulling the note, summarising it, and telling me which one it came from. no exact keywords, no digging through folders, no list of files to go read myself.",
      "under the hood it's hybrid retrieval: faiss vector search for meaning, bm25 for literal keywords, the two result sets fused and then reranked with a cross-encoder. only the strongest chunks get handed to the model, which keeps the answer grounded in my own notes instead of invented. when i add new notes, one command refreshes its memory.",
    ],
    tags: ["python", "rag", "faiss", "telegram"],
    status: "live",
    image: "/projects/obsidian-rag-bot.jpg",
    // href: intentionally omitted — no public telegram link until rate limits are in place
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
