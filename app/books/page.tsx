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

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = books.filter((b) => {
    const search = [b.title, b.author, ...(b.tags ?? []), b.takeaway ?? ""]
      .join(" ")
      .toLowerCase();
    return search.includes(query.toLowerCase());
  });

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "48px",
            fontWeight: 800,
            color: "#111",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "20px",
          }}>
            Books
          </h1>
          <div style={{ position: "relative", maxWidth: "400px" }}>
            <span style={{
              position: "absolute", left: "12px", top: "50%",
              transform: "translateY(-50%)", color: "#bbb",
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
                width: "100%",
                padding: "10px 16px 10px 36px",
                border: "1.5px solid #e8e8e8",
                borderRadius: "8px",
                fontSize: "13px",
                fontFamily: "Inter, sans-serif",
                color: "#111",
                outline: "none",
                background: "#fafafa",
              }}
            />
          </div>
          <div style={{ fontSize: "12px", color: "#bbb", marginTop: "8px" }}>
            {filtered.length} book{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Book list */}
        <div>
          {filtered.map((book) => {
            const primaryTag = book.tags?.[0] ?? "other";
            const accent = genreColors[primaryTag] ?? "#111";
            const isOpen = openId === book.id;

            return (
              <div
                key={book.id}
                onClick={() => setOpenId(isOpen ? null : book.id)}
                style={{
                  borderLeft: `3px solid ${isOpen ? accent : "#f0f0f0"}`,
                  marginBottom: "2px",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                }}
              >
                {/* Main row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  gap: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: "36px", height: "52px", borderRadius: "3px",
                      background: accent + "22", flexShrink: 0,
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "18px",
                    }}>
                      📖
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "15px", fontWeight: 700, color: "#111",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>
                        {book.title}
                      </div>
                      <div style={{ fontSize: "12px", color: "#aaa" }}>
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
                      fontSize: "12px", color: isOpen ? "#888" : "#ccc",
                      transition: "transform 0.2s, color 0.2s",
                      display: "inline-block",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      ▾
                    </span>
                  </div>
                </div>

                {/* Expandable summary */}
                {isOpen && (
                  <div style={{ padding: "0 20px 16px 72px" }}>
                    <div style={{
                      fontSize: "13px", color: "#555",
                      lineHeight: 1.8, fontWeight: 300, maxWidth: "560px",
                    }}>
                      {book.takeaway}
                    </div>
                    {book.tags && book.tags.length > 1 && (
                      <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                        {book.tags.map((tag) => (
                          <span key={tag} style={{
                            fontSize: "10px", color: "#999",
                            background: "#f8f8f8", border: "1px solid #f0f0f0",
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