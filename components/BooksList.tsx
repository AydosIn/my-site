"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Book } from "@data/books";

// Only ISBN-based covers are reliable. `?default=false` makes OpenLibrary
// return a 404 for missing covers instead of a blank 1x1 image (HTTP 200),
// so the onError fallback actually fires.
function getCoverUrl(book: Book): string | null {
  if (!book.isbn) return null;
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`;
}

function BookCard({ book }: { book: Book }) {
  const [coverFailed, setCoverFailed] = useState(false);
  const coverUrl = getCoverUrl(book);

  return (
    <article className="book-card">
      {coverUrl && !coverFailed ? (
        <img
          src={coverUrl}
          alt={`cover of ${book.title}`}
          width={100}
          height={150}
          className="book-card__cover"
          loading="lazy"
          onError={() => setCoverFailed(true)}
        />
      ) : (
        <div className="book-card__cover-fallback" aria-hidden="true" />
      )}
      <h2 className="book-card__title">{book.title.toLowerCase()}</h2>
      <p className="book-card__author">{book.author.toLowerCase()}</p>
    </article>
  );
}

export function BooksList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return books;
    return books.filter((b) =>
      [b.title, b.author, ...(b.tags ?? [])].join(" ").toLowerCase().includes(q),
    );
  }, [books, query]);

  return (
    <div className="books-page">
      <header className="page-header books-page__header">
        <p className="page-header__comment">{"// books"}</p>
        <h1 className="page-header__title">reading list</h1>
      </header>

      <div className="books-search books-page__search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search..."
          aria-label="search books by title, author, or tag"
          className="books-search__input"
        />
      </div>

      <div className="books-list">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <Link href="/" className="section__link books-page__home">
        ← home
      </Link>
    </div>
  );
}
