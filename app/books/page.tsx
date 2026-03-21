"use client";

import { books } from "@data/books";
import { useState } from "react";

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
  const encoded = encodeURIComponent(title);
  return `https://covers.openlibrary.org/b/title/${encoded}-M.jpg`;
}

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [failedCovers, setFailedCovers] = useState<Set<string>>(new Set());

  const filtered = books.filter((b) => {
    const search = [b.title, b.author, ...(b.tags ?? []), b.takeaway ?? ""]
      .join(" ")
      .toLowerCase();
    return search.includes(query.toLowerCase());
  });

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{
            fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: 800,
            color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "20px",
            transition: "color 0.3s",
          }}>
            Books
          </h1>
          <div style={{ position: "relative", maxWidth: "400px" }}>
            <span style={{
              position: "absolute", left: "12px", top: "50%",
              transform: "translateY(-50%)", color: "var(--muted2)",
              fontSize: "14px", pointerEvents: "none",
            }}>
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or topic..."
              style={{
                width: "100%", padding: "10px 16px 10px 36px",
                border: "1.5px solid var(--border2)", borderRadius: "8px",
                fontSize: "13px", fontFamily: "Inter, sans-serif",
                color: "var(--fg)", outline: "none",
                backgroundColor: "var(--card)",
                transition: "all 0.3s",
              }}
            />
          </div>
          <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}>
            {filtered.length} book{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Book list */}
        <div>
          {filtered.map((book) => {
            const primaryTag = book.tags?.[0] ?? "other";
            const accent = genreColors[primaryTag] ?? "#111";
            const isOpen = openId === book.id;
            const hasCover = !failedCovers.has(book.id);

            return (
              <div
                key={book.id}
                onClick={() => setOpenId(isOpen ? null : book.id)}
                style={{
                  borderLeft: `3px solid ${isOpen ? accent : "var(--border)"}`,
                  marginBottom: "2px", cursor: "pointer",
                  transition: "border-color 0.15s",
                  backgroundColor: "var(--bg)",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px", gap: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                    {hasCover ? (
                      <img
                        src={getCoverUrl(book.title)}
                        alt={book.title}
                        onError={() => setFailedCovers((prev) => new Set(prev).add(book.id))}
                        style={{
                          width: "36px", height: "52px", objectFit: "cover",
                          borderRadius: "3px", flexShrink: 0,
                          boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
                        }}
                      />
                    ) : (
                      <div style={{
                        width: "36px", height: "52px", borderRadius: "3px",
                        background: accent + "22", flexShrink: 0,
                        display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: "16px",
                      }}>
                        📖
                      </div>
                    )}
                    <div>
                      <div style={{
                        fontFamily: "Syne, sans-serif", fontSize: "15px",
                        fontWeight: 700, color: "var(--fg)",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        transition: "color 0.3s",
                      }}>
                        {book.title}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--muted2)", transition: "color 0.3s" }}>
                        {book.author}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                    <span style={{
                      fontSize: "10px", color: accent,
                      border: `1px solid ${accent}`,
                      borderRadius: "100px", padding: "2px 10px", opacity: 0.8,
                    }}>
                      {primaryTag}
                    </span>
                    <span style={{
                      fontSize: "12px", color: isOpen ? "var(--fg2)" : "var(--muted2)",
                      transition: "transform 0.2s, color 0.2s", display: "inline-block",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      ▾
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 20px 16px 72px" }}>
                    <div style={{
                      fontSize: "13px", color: "var(--fg2)",
                      lineHeight: 1.8, fontWeight: 300, maxWidth: "560px",
                      transition: "color 0.3s",
                    }}>
                      {book.takeaway}
                    </div>
                    {book.tags && book.tags.length > 1 && (
                      <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                        {book.tags.map((tag) => (
                          <span key={tag} style={{
                            fontSize: "10px", color: "var(--muted2)",
                            background: "var(--card)", border: "1px solid var(--border)",
                            borderRadius: "4px", padding: "3px 8px",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}