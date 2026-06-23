"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Book } from "@data/books";

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
        <div key={book.id} className="book-row">
          <span className="book-row__title">{book.title.toLowerCase()}</span>
          <span className="book-row__author">{book.author.toLowerCase()}</span>
        </div>
      ))}

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </>
  );
}
