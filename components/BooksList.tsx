"use client";

import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";
import type { Book } from "@data/books";

const genreColors: Record<string, string> = {
  finance: "#f59e0b",
  philosophy: "#8b5cf6",
  fiction: "#3b82f6",
  politics: "#ef4444",
  writing: "#10b981",
  economics: "#f97316",
  history: "#6b7280",
  mathematics: "#06b6d4",
  education: "#06b6d4",
  "human nature": "#ec4899",
  strategy: "#ef4444",
  psychology: "#8b5cf6",
  science: "#3b82f6",
  thinking: "#f97316",
  craft: "#10b981",
  productivity: "#f59e0b",
  behavior: "#f59e0b",
};

function getCoverUrl(title: string) {
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
}

type BookRowProps = {
  book: Book;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

const BookRow = memo(function BookRow({ book, isOpen, onToggle }: BookRowProps) {
  const [coverFailed, setCoverFailed] = useState(false);
  const primaryTag = book.tags?.[0] ?? "other";
  const accent = genreColors[primaryTag] ?? "#111";

  return (
    <div
      className={`book-row${isOpen ? " book-row--open" : ""}`}
      style={isOpen ? ({ "--book-accent": accent } as React.CSSProperties) : undefined}
      onClick={() => onToggle(book.id)}
    >
      <div className="book-row__header">
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
            <div className="book-row__cover-fallback" style={{ background: `${accent}22` }}>
              📖
            </div>
          )}
          <div>
            <div className="book-row__title">{book.title}</div>
            <div className="book-row__author">{book.author}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <span className="book-row__tag" style={{ color: accent, borderColor: accent }}>
            {primaryTag}
          </span>
          <span className="book-row__chevron">▾</span>
        </div>
      </div>

      {isOpen && (
        <div className="book-row__detail">
          <div className="book-row__takeaway">{book.takeaway}</div>
          {book.tags && book.tags.length > 1 && (
            <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "10px",
                    color: "var(--muted2)",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "3px 8px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export function BooksList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return books;
    return books.filter((b) =>
      [b.title, b.author, ...(b.tags ?? []), b.takeaway ?? ""].join(" ").toLowerCase().includes(q),
    );
  }, [books, query]);

  const handleToggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <h1
          className="font-syne"
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "var(--fg)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          Books
        </h1>
        <div className="books-search">
          <span className="books-search__icon">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, or topic..."
            className="books-search__input"
          />
        </div>
        <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}>
          {filtered.length} book{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div>
        {filtered.map((book) => (
          <BookRow
            key={book.id}
            book={book}
            isOpen={openId === book.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </>
  );
}
