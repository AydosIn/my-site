export type Book = {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  /** Cover image under /public. Without one, the book shows as a plain tile with its title. */
  cover?: string;
  /** Spine colours for the pile under the covers: [background, text]. Pick them from the cover. */
  spine?: [string, string];
  takeaway?: string;
  year?: number;
  tags?: string[];
};

export const books: Book[] = [
  {
    id: "b-2",
    spine: ["#d8462c", "#f7d774"],
    cover: "/books/b-2.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780062315007",
    takeaway: "When you want something, all the universe conspires to help you achieve it. Follow your Personal Legend.",
    tags: ["philosophy", "fiction"]
  },
  {
    id: "b-3",
    spine: ["#1b1b1b", "#f2f2f2"],
    cover: "/books/b-3.jpg",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbn: "9781594480003",
    takeaway: "Guilt and redemption are lifelong companions. There is always a way to be good again.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-4",
    spine: ["#dfe3e3", "#2b2b2b"],
    cover: "/books/b-4.jpg",
    title: "1776",
    author: "David McCullough",
    isbn: "9780743226721",
    takeaway: "Great things are built by ordinary people under extraordinary pressure. Persistence beats perfection.",
    tags: ["history"]
  },
  {
    id: "b-5",
    spine: ["#161616", "#e9e9e9"],
    cover: "/books/b-5.jpg",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    isbn: "9780141442464",
    takeaway: "Vanity and moral corruption destroy what beauty cannot protect. The soul reflects our choices.",
    tags: ["fiction", "philosophy"]
  },
  {
    id: "b-6",
    spine: ["#b8432a", "#f0d9a8"],
    cover: "/books/b-6.jpg",
    title: "The Prince",
    author: "Niccolò Machiavelli",
    isbn: "9780486272740",
    takeaway: "Power requires pragmatism. It is better to be feared than loved, but never hated.",
    tags: ["politics", "strategy"]
  },
  {
    id: "b-7",
    spine: ["#3b2f2a", "#e8d5b5"],
    cover: "/books/b-7.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    takeaway: "First impressions deceive. Prejudice blinds us to the truth about others and ourselves.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-8",
    spine: ["#0e0e0e", "#c9a75a"],
    cover: "/books/b-8.jpg",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    isbn: "9780807014295",
    takeaway: "Everything can be taken from a man but the freedom to choose his attitude in any circumstance.",
    tags: ["philosophy", "psychology"]
  },
  {
    id: "b-9",
    spine: ["#f1efe9", "#8a1f1f"],
    cover: "/books/b-9.jpg",
    title: "A Mathematician's Lament",
    author: "Paul Lockhart",
    isbn: "9781934137178",
    takeaway: "Mathematics is an art form. The way we teach it kills the very curiosity it should inspire.",
    tags: ["mathematics", "education"]
  },
  {
    id: "b-10",
    spine: ["#f5f5f3", "#1a1a1a"],
    cover: "/books/b-10.jpg",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    takeaway: "Power is not a means — it is an end. Those who control the present control the past and the future.",
    tags: ["fiction", "politics"]
  },
  {
    id: "b-11",
    spine: ["#fafafa", "#e2582a"],
    cover: "/books/b-11.jpg",
    title: "Freakonomics",
    author: "Steven Levitt & Stephen Dubner",
    isbn: "9780060731335",
    takeaway: "Incentives drive everything. If you want to understand behavior, follow the incentives.",
    tags: ["economics", "thinking"]
  },
  {
    id: "b-12",
    spine: ["#1d2a5a", "#f0e2b6"],
    cover: "/books/b-12.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    takeaway: "The green light always moves further away. Chasing the past destroys the present.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-13",
    spine: ["#d9772b", "#fff1e0"],
    cover: "/books/b-13.jpg",
    title: "Science and Hope",
    author: "Carl Sagan",
    isbn: "9780345409461",
    takeaway: "Science is a candle in the dark. Skepticism and wonder must coexist.",
    tags: ["science", "thinking"]
  },
  {
    id: "b-14",
    spine: ["#9aa0a6", "#111111"],
    title: "Guide to Good Writing",
    author: "Various",
    takeaway: "Clarity is kindness. Write to be understood, not to impress.",
    tags: ["writing", "craft"]
  },
  {
    id: "b-15",
    spine: ["#e7e1c8", "#1f6f78"],
    cover: "/books/b-15.jpg",
    title: "On Writing Well",
    author: "William Zinsser",
    isbn: "9780060891541",
    takeaway: "Strip every sentence to its cleanest components. Clutter is the enemy of communication.",
    tags: ["writing", "craft"]
  },
  {
    id: "b-16",
    spine: ["#e2197a", "#ffffff"],
    cover: "/books/b-16.jpg",
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    isbn: "9781492180746",
    takeaway: "Talk about their life, not your idea. Good customer conversations reveal truth, not compliments.",
    tags: ["startups", "product"]
  },
  {
    id: "b-17",
    spine: ["#1d6fb8", "#ffffff"],
    cover: "/books/b-17.jpg",
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "9780307887894",
    takeaway: "Build-measure-learn beats planning in the dark. Validated learning is the unit of progress.",
    tags: ["startups", "product"]
  },
];
/** The handful shown in the home page's books tab. Order is display order. */
export const featuredBookIds = ["b-8", "b-16", "b-10", "b-15", "b-2", "b-6"];
