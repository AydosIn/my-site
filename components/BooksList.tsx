"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { memo, useCallback, useMemo, useState } from "react";
import type { Book } from "@data/books";
import { MOTION } from "@lib/motion";

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
  const reduced = useReducedMotion();
  const [coverFailed, setCoverFailed] = useState(false);
  const primaryTag = book.tags?.[0] ?? "other";
  const accent = genreColors[primaryTag] ?? "#111";

  return (
    <motion.div
      className={`book-row${isOpen ? " book-row--open" : ""}`}
      style={isOpen ? ({ "--book-accent": accent } as React.CSSProperties) : undefined}
      onClick={() => onToggle(book.id)}
      whileHover={reduced ? undefined : { x: 2 }}
      transition={MOTION.fast}
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
          <motion.span
            className="book-row__chevron"
            animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 0.85 : 0.55 }}
            transition={MOTION.fast}
          >
            ▾
          </motion.span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="book-row__detail"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={MOTION.normal}
            style={{ overflow: "hidden" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export function BooksList({ books }: { books: Book[] }) {
  const reduced = useReducedMotion();
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
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={MOTION.normal}
        style={{ marginBottom: "32px" }}
      >
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
        <motion.div
          key={filtered.length}
          initial={reduced ? false : { opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={MOTION.fast}
          style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}
        >
          {filtered.length} book{filtered.length !== 1 ? "s" : ""}
        </motion.div>
      </motion.div>

      <div>
        <AnimatePresence initial={false}>
          {filtered.map((book) => (
            <motion.div
              key={book.id}
              initial={reduced ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -4 }}
              transition={MOTION.fast}
            >
              <BookRow book={book} isOpen={openId === book.id} onToggle={handleToggle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
