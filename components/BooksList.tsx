"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuSearch, LuX } from "react-icons/lu";
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
  const [showTags, setShowTags] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Press "/" anywhere on the page to jump into the search box.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (target.closest("input, textarea, select, [contenteditable]")) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        <div className="search">
          <LuSearch className="search__icon" aria-hidden="true" />
          <input
            ref={searchRef}
            id="book-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder="Search books"
            aria-label="Search books by title, author, or tag"
            className="search__input"
          />
          {query ? (
            <button type="button" className="search__clear" onClick={() => setQuery("")} aria-label="Clear search">
              <LuX aria-hidden="true" />
            </button>
          ) : (
            <kbd className="search__key" aria-hidden="true">
              /
            </kbd>
          )}
        </div>

        <div className="chips" role="group" aria-label="Filter by tag">
          <button type="button" className="chip" aria-pressed={tag === null} onClick={() => setTag(null)}>
            All
          </button>
          {/* With the list closed, a chosen tag stays visible next to All. */}
          {!showTags && tag && (
            <button type="button" className="chip" aria-pressed="true" onClick={() => setTag(null)}>
              {tag} <LuX className="chip__x" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            className="chip chip--more"
            aria-expanded={showTags}
            aria-controls="book-tags"
            onClick={() => setShowTags(!showTags)}
          >
            {showTags ? "Less" : `More · ${tags.length} tags`}
          </button>
        </div>

        {showTags && (
          <div id="book-tags" className="chips chips--all">
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
        )}

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
