"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Book } from "@data/books";

function getCoverUrl(book: Book) {
  if (book.isbn) {
    return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
  }
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
}

function BookCard({ book }: { book: Book }) {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <article className="book-card">
      {!coverFailed ? (
        <img
          src={getCoverUrl(book)}
          alt=""
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
        <p className="page-header__comment">// books</p>
        <h1 className="page-header__title">reading list</h1>
      </header>

      <div className="books-search books-page__search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search..."
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
