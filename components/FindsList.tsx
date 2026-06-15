"use client";

import { m, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Find } from "@data/finds";
import { RevealStaggerGroup, RevealStaggerItem } from "@components/motion/RevealOnScroll";
import { MOTION, hoverBreathe, revealVariants, tapBreathe } from "@lib/motion";

const tagColors: Record<string, string> = {
  thinking: "#f97316",
  philosophy: "#8b5cf6",
  strategy: "#ef4444",
  writing: "#10b981",
  leadership: "#3b82f6",
  reading: "#f59e0b",
};

export function FindsList({ finds }: { finds: Find[] }) {
  const reduced = useReducedMotion();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return finds;
    return finds.filter((item) =>
      [item.title, item.source, item.description, ...item.tags].join(" ").toLowerCase().includes(q),
    );
  }, [finds, query]);

  return (
    <>
      <m.div
        initial={reduced ? false : revealVariants.hidden}
        animate={revealVariants.visible}
        transition={MOTION.medium}
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
            marginBottom: "8px",
          }}
        >
          Finds
        </h1>
        <p style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, marginBottom: "20px", lineHeight: 1.7 }}>
          Articles, essays, and links I found worth sharing.
        </p>
        <div className="books-search" style={{ maxWidth: "420px" }}>
          <span className="books-search__icon">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, source, description, or tag..."
            className="books-search__input"
          />
        </div>
        <m.div
          key={filtered.length}
          initial={reduced ? false : { opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={MOTION.micro}
          style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}
        >
          {filtered.length} find{filtered.length !== 1 ? "s" : ""}
        </m.div>
      </m.div>

      <RevealStaggerGroup className="finds-grid">
        {filtered.map((item) => (
          <RevealStaggerItem key={item.id}>
            <m.a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="find-card"
              whileHover={reduced ? undefined : hoverBreathe}
              whileTap={reduced ? undefined : tapBreathe}
              transition={MOTION.micro}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <div className="find-card__title">{item.title}</div>
                <m.span
                  style={{ fontSize: "12px", color: "var(--muted2)", whiteSpace: "nowrap" }}
                  whileHover={reduced ? undefined : { x: 2, opacity: 1 }}
                  transition={MOTION.micro}
                >
                  ↗
                </m.span>
              </div>
              <div className="find-card__source">{item.source}</div>
              <div className="find-card__desc">{item.description}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {item.tags.map((tag) => {
                  const color = tagColors[tag] ?? "#3b82f6";
                  return (
                    <span key={tag} className="find-card__tag" style={{ color, borderColor: color }}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </m.a>
          </RevealStaggerItem>
        ))}
      </RevealStaggerGroup>
    </>
  );
}
