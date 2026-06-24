"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Book } from "@data/books";

function getCoverUrl(title: string) {
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
}

function BookRow({ book }: { book: Book }) {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <div className="book-row">
      <div className="book-row__main">
        {!coverFailed ? (
          <Image
            src={getCoverUrl(book.title)}
            alt=""
            width={36}
            height={52}
            className="book-row__cover"
            loading="lazy"
            onError={() => setCoverFailed(true)}
          />
        ) : (
          <div className="book-row__cover-fallback" aria-hidden="true" />
        )}
        <span className="book-row__title">{book.title.toLowerCase()}</span>
      </div>
      <span className="book-row__author">{book.author.toLowerCase()}</span>
    </div>
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
    <>
      <header className="page-header">
        <p className="page-header__comment">// books</p>
        <h1 className="page-header__title">reading list</h1>
      </header>

      <div className="books-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search..."
          className="books-search__input"
        />
      </div>

      {filtered.map((book) => (
        <BookRow key={book.id} book={book} />
      ))}

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </>
  );
}
