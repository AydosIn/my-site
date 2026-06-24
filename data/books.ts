export type Book = {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  takeaway?: string;
  year?: number;
  tags?: string[];
};

export const books: Book[] = [
  {
    id: "b-1",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    isbn: "9781612680194",
    takeaway: "Assets put money in your pocket. Liabilities take it out. Most people never learn this distinction.",
    tags: ["finance", "mindset"]
  },
  {
    id: "b-2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780062315007",
    takeaway: "When you want something, all the universe conspires to help you achieve it. Follow your Personal Legend.",
    tags: ["philosophy", "fiction"]
  },
  {
    id: "b-3",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbn: "9781594480003",
    takeaway: "Guilt and redemption are lifelong companions. There is always a way to be good again.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-4",
    title: "1776",
    author: "David McCullough",
    isbn: "9780743226721",
    takeaway: "Great things are built by ordinary people under extraordinary pressure. Persistence beats perfection.",
    tags: ["history"]
  },
  {
    id: "b-5",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    isbn: "9780141442464",
    takeaway: "Vanity and moral corruption destroy what beauty cannot protect. The soul reflects our choices.",
    tags: ["fiction", "philosophy"]
  },
  {
    id: "b-6",
    title: "The Prince",
    author: "Niccolò Machiavelli",
    isbn: "9780486272740",
    takeaway: "Power requires pragmatism. It is better to be feared than loved, but never hated.",
    tags: ["politics", "strategy"]
  },
  {
    id: "b-7",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    takeaway: "First impressions deceive. Prejudice blinds us to the truth about others and ourselves.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-8",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    isbn: "9780807014295",
    takeaway: "Everything can be taken from a man but the freedom to choose his attitude in any circumstance.",
    tags: ["philosophy", "psychology"]
  },
  {
    id: "b-9",
    title: "A Mathematician's Lament",
    author: "Paul Lockhart",
    isbn: "9781934137178",
    takeaway: "Mathematics is an art form. The way we teach it kills the very curiosity it should inspire.",
    tags: ["mathematics", "education"]
  },
  {
    id: "b-10",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    takeaway: "Power is not a means — it is an end. Those who control the present control the past and the future.",
    tags: ["fiction", "politics"]
  },
  {
    id: "b-11",
    title: "Freakonomics",
    author: "Steven Levitt & Stephen Dubner",
    isbn: "9780060731335",
    takeaway: "Incentives drive everything. If you want to understand behavior, follow the incentives.",
    tags: ["economics", "thinking"]
  },
  {
    id: "b-12",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    takeaway: "The green light always moves further away. Chasing the past destroys the present.",
    tags: ["fiction", "human nature"]
  },
  {
    id: "b-13",
    title: "Science and Hope",
    author: "Carl Sagan",
    isbn: "9780345409461",
    takeaway: "Science is a candle in the dark. Skepticism and wonder must coexist.",
    tags: ["science", "thinking"]
  },
  {
    id: "b-14",
    title: "Guide to Good Writing",
    author: "Various",
    takeaway: "Clarity is kindness. Write to be understood, not to impress.",
    tags: ["writing", "craft"]
  },
  {
    id: "b-15",
    title: "On Writing Well",
    author: "William Zinsser",
    isbn: "9780060891541",
    takeaway: "Strip every sentence to its cleanest components. Clutter is the enemy of communication.",
    tags: ["writing", "craft"]
  },
  {
    id: "b-16",
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    isbn: "9781492180746",
    takeaway: "Talk about their life, not your idea. Good customer conversations reveal truth, not compliments.",
    tags: ["startups", "product"]
  },
  {
    id: "b-17",
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "9780307887894",
    takeaway: "Build-measure-learn beats planning in the dark. Validated learning is the unit of progress.",
    tags: ["startups", "product"]
  },
];