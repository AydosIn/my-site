import { books } from "@data/books";
import { BooksList } from "@components/BooksList";

export const metadata = { title: "Books" };

export default function BooksPage() {
  return (
    <div className="page-shell">
      <BooksList books={books} />
    </div>
  );
}
