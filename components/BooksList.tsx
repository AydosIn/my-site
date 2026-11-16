"use client";

import { useMemo, useState } from "react";
import type { Book } from "@data/books";

export function BooksList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((b) =>
      [b.title, b.author, ...(b.tags ?? [])].join(" ").toLowerCase().includes(q),
    );
  }, [books, query]);

  const searching = query.trim().length > 0;

  function showTag(tag: string) {
    setQuery(tag);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="search">
        <input
          id="book-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, or tag"
          aria-label="Search books by title, author, or tag"
          className="search__input"
        />
        <p className="label" aria-live="polite">
          {searching ? `${filtered.length} of ${books.length}` : `${books.length} books`}
        </p>
      </div>

      {filtered.length > 0 ? (
        <ul className="list list--loose">
          {filtered.map((book) => (
            // The id lets the home page link straight to a book (/books#b-8).
            <li key={book.id} id={book.id} className="book">
              <div className="item">
                <h2 className="item__title">{book.title}</h2>
                <span className="label">{book.author}</span>
              </div>
              {book.takeaway && <p className="item__desc">{book.takeaway}</p>}
              {book.tags && book.tags.length > 0 && (
                <p className="tags">
                  {book.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="tag"
                      onClick={() => showTag(tag)}
                      aria-label={`Show books tagged ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No books match “{query.trim()}”.</p>
          <button type="button" className="more" onClick={() => setQuery("")}>
            Show all books
          </button>
        </div>
      )}
    </>
  );
}
