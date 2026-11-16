import { books } from "@data/books";
import { BooksList } from "@components/BooksList";
import { BookPile } from "@components/BookPile";
import { Page } from "@components/Page";

export const metadata = { title: "Books", alternates: { canonical: "/books" } };

export default function BooksPage() {
  return (
    <Page title="Books" sub="And the one thing each of them left me with.">
      <BooksList books={books} />
      <BookPile books={books} />
    </Page>
  );
}
