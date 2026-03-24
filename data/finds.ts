export type Find = {
  id: string;
  title: string;
  source: string;
  url: string;
  description: string;
  tags: string[];
  date?: string;
};

export const finds: Find[] = [
  {
    id: "f-1",
    title: "How to Think for Yourself",
    source: "Paul Graham",
    url: "http://paulgraham.com/think.html",
    description:
      "Why it matters to have original thoughts and how independent-minded people develop their ideas.",
    tags: ["thinking", "philosophy"],
  },
  {
    id: "f-2",
    title: "The Cook and the Chef",
    source: "Wait But Why",
    url: "https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-algorithm.html",
    description: "Elon Musk's framework for thinking from first principles instead of by analogy.",
    tags: ["thinking", "strategy"],
  },
  {
    id: "f-3",
    title: "How to Write Usefully",
    source: "Paul Graham",
    url: "http://paulgraham.com/useful.html",
    description: "What makes writing useful - importance, novelty, correctness, and strength.",
    tags: ["writing"],
  },
  {
    id: "f-4",
    title: "Solitude and Leadership",
    source: "American Scholar",
    url: "https://theamericanscholar.org/solitude-and-leadership/",
    description:
      "Why the best leaders are independent thinkers who can be alone with their thoughts.",
    tags: ["leadership", "thinking"],
  },
  {
    id: "f-5",
    title: "Why You Should Stop Reading News",
    source: "Farnam Street",
    url: "https://fs.blog/stop-reading-news/",
    description:
      "News is designed to be consumed not understood. There are better ways to stay informed.",
    tags: ["thinking", "reading"],
  },
];
