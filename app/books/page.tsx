import { books } from "@data/books";
import { BooksList } from "@components/BooksList";

export const metadata = { title: "books", alternates: { canonical: "/books" } };

export default function BooksPage() {
  return <BooksList books={books} />;
}
