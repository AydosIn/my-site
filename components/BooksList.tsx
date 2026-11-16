"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Book } from "@data/books";

function BookTile({ book, open, onToggle }: { book: Book; open: boolean; onToggle: () => void }) {
  return (
    // The id lets the home page link straight to a book (/books#b-8).
    <li id={book.id} className="shelf__book">
      <button
        type="button"
        className="shelf__tile"
        data-open={open || undefined}
        aria-expanded={open}
        onClick={onToggle}
      >
        {book.cover ? (
          <Image
            src={book.cover}
            alt=""
            width={320}
            height={480}
            sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 180px"
            className="shelf__cover"
          />
        ) : (
          <span className="shelf__blank" aria-hidden="true">
            {book.title}
          </span>
        )}
        <span className="shelf__info">
          <span className="shelf__title">{book.title}</span>
          <span className="shelf__author">{book.author}</span>
          {book.takeaway && <span className="shelf__note">{book.takeaway}</span>}
        </span>
      </button>
    </li>
  );
}

export function BooksList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  // Every tag, most used first, so the chips read as the shelf's sections.
  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const book of books) for (const t of book.tags ?? []) counts.set(t, (counts.get(t) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [books]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      if (tag && !(b.tags ?? []).includes(tag)) return false;
      if (!q) return true;
      return [b.title, b.author, ...(b.tags ?? [])].join(" ").toLowerCase().includes(q);
    });
  }, [books, query, tag]);

  const narrowed = query.trim().length > 0 || tag !== null;

  function clear() {
    setQuery("");
    setTag(null);
  }

  return (
    <>
      <div className="shelf-controls">
        <input
          id="book-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, or tag"
          aria-label="Search books by title, author, or tag"
          className="search__input"
        />

        <div className="chips" role="group" aria-label="Filter by tag">
          <button type="button" className="chip" aria-pressed={tag === null} onClick={() => setTag(null)}>
            All
          </button>
          {tags.map(([name, count]) => (
            <button
              key={name}
              type="button"
              className="chip"
              aria-pressed={tag === name}
              onClick={() => setTag(tag === name ? null : name)}
            >
              {name} <span className="chip__count">{count}</span>
            </button>
          ))}
        </div>

        <p className="label" aria-live="polite">
          {narrowed ? `${filtered.length} of ${books.length} books` : `${books.length} books`}
        </p>
      </div>

      {filtered.length > 0 ? (
        <ul className="shelf">
          {filtered.map((book) => (
            <BookTile
              key={book.id}
              book={book}
              open={openId === book.id}
              onToggle={() => setOpenId(openId === book.id ? null : book.id)}
            />
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No books match{query.trim() ? ` “${query.trim()}”` : " this tag"}.</p>
          <button type="button" className="more" onClick={clear}>
            Show all books
          </button>
        </div>
      )}
    </>
  );
}
