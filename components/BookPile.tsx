"use client";

import { useEffect, useRef, useState } from "react";
import type { Book } from "@data/books";

const FALLBACK_SPINE: [string, string] = ["#9aa0a6", "#111111"];

/**
 * A fixed "random" number in [0, 1) for book i. Integer maths only, so the
 * server and every browser compute exactly the same sizes and tilts.
 */
function jitter(i: number, salt: number): number {
  let x = Math.imul(i + 1, 374761393) + Math.imul(salt + 1, 668265263);
  x = Math.imul(x ^ (x >>> 13), 1274126177);
  x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}

function pileStyle(book: Book, i: number): React.CSSProperties {
  const [bg, fg] = book.spine ?? FALLBACK_SPINE;
  return {
    "--c": bg,
    "--t": fg,
    "--i": i,
    "--w": `${Math.round(62 + jitter(i, 3) * 38)}%`,
    "--h": `${Math.round(28 + jitter(i, 4) * 10)}px`,
    "--x": `${Math.round((jitter(i, 5) - 0.5) * 36)}px`,
    "--r": `${((jitter(i, 6) - 0.5) * 2.6).toFixed(2)}deg`,
  } as React.CSSProperties;
}

/** Every book lying in one loose pile, in list order with the first at the bottom. */
export function BookPile({ books }: { books: Book[] }) {
  const pileRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [play, setPlay] = useState(false);

  // The books drop onto the pile once, when it first scrolls into view.
  useEffect(() => {
    const pile = pileRef.current;
    if (!pile || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(pile);
    return () => io.disconnect();
  }, []);

  const active = books.find((b) => b.id === activeId);

  return (
    <section className="pile-section" aria-labelledby="pile-title">
      <h2 id="pile-title" className="section__title">
        The pile
      </h2>

      <div
        ref={pileRef}
        className="pile"
        data-play={play || undefined}
        onPointerLeave={(e) => e.pointerType === "mouse" && setActiveId(null)}
      >
        {books.map((book, i) => (
          <button
            key={book.id}
            type="button"
            className="pile__book"
            style={pileStyle(book, i)}
            data-on={activeId === book.id || undefined}
            aria-label={`${book.title} by ${book.author}`}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActiveId(book.id)}
            onFocus={() => setActiveId(book.id)}
            onClick={() => setActiveId(book.id)}
          >
            <b>{book.title}</b>
            <i>{book.author}</i>
          </button>
        ))}
      </div>

      <p className="pile__count label">{books.length} books, and counting</p>

      <div className="pile__caption" aria-live="polite">
        {active ? (
          <>
            <p className="item">
              <span className="item__title">{active.title}</span>
              <span className="label">{active.author}</span>
            </p>
            {active.takeaway && <p className="item__desc">{active.takeaway}</p>}
          </>
        ) : (
          <p className="label">Point at a book, or tap it.</p>
        )}
      </div>
    </section>
  );
}
