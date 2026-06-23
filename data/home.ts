import { books } from "@data/books";
import { projects } from "@data/projects";

export { projects };

export const recentlyRead = books.slice(0, 4).map((b) => ({
  title: b.title,
  author: b.author,
}));
