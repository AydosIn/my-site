"use client";

import { useMemo, useState } from "react";
import type { Book } from "@data/books";

// Only ISBN-based covers are reliable. `?default=false` makes OpenLibrary
// return a 404 for missing covers instead of a blank 1x1 image (HTTP 200),
// so the onError fallback actually fires.
function getCoverUrl(book: Book): string | null {
  if (!book.isbn) return null;
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`;
}

function BookCard({ book, onTag }: { book: Book; onTag: (tag: string) => void }) {
  const [coverFailed, setCoverFailed] = useState(false);
  const coverUrl = getCoverUrl(book);

  return (
    // The id lets the home page link straight to a book (/books#b-8).
    <li id={book.id} className="book">
      {coverUrl && !coverFailed ? (
        // eslint-disable-next-line @next/next/no-img-element -- remote covers that may 404; onError swaps in the fallback
        <img
          src={coverUrl}
          alt=""
          width={96}
          height={144}
          className="book__cover"
          loading="lazy"
          onError={() => setCoverFailed(true)}
        />
      ) : (
        <div className="book__cover book__cover--blank" aria-hidden="true">
          <span>{book.title.toLowerCase()}</span>
        </div>
      )}
      <div className="book__body">
        <h2 className="book__title">{book.title.toLowerCase()}</h2>
        <p className="book__author">{book.author.toLowerCase()}</p>
        {book.takeaway && <p className="book__takeaway">{book.takeaway.toLowerCase()}</p>}
        {book.tags && book.tags.length > 0 && (
          <p className="tags">
            {book.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="tag tag--button"
                onClick={() => onTag(tag)}
                aria-label={`show books tagged ${tag}`}
              >
                {tag}
              </button>
            ))}
          </p>
        )}
      </div>
    </li>
  );
}

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
    <div className="page page--wide">
      <header className="page-head">
        <h1 className="page-title">books i&apos;ve read</h1>
        <p className="page-sub">and the one thing each of them left me with.</p>
      </header>

      <div className="search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search by title, author, or tag"
          aria-label="search books by title, author, or tag"
          className="search__input"
        />
        <p className="search__count meta" aria-live="polite">
          {searching ? `${filtered.length} of ${books.length}` : `${books.length} books`}
        </p>
      </div>

      {filtered.length > 0 ? (
        <ul className="books">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} onTag={showTag} />
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>no books match “{query.trim()}”.</p>
          <button type="button" className="text-button" onClick={() => setQuery("")}>
            show all books
          </button>
        </div>
      )}
    </div>
  );
}
