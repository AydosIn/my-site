"use client";

import { finds } from "@data/finds";
import { useState } from "react";

const tagColors: Record<string, string> = {
  thinking: "#f97316",
  philosophy: "#8b5cf6",
  strategy: "#ef4444",
  writing: "#10b981",
  leadership: "#3b82f6",
  reading: "#f59e0b",
};

export default function FindsPage() {
  const [query, setQuery] = useState("");

  const filtered = finds.filter((item) => {
    const search = [item.title, item.source, item.description, ...item.tags].join(" ").toLowerCase();
    return search.includes(query.toLowerCase());
  });

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "all 0.3s" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 40px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "48px",
              fontWeight: 800,
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "8px",
              transition: "all 0.3s",
            }}
          >
            Finds
          </h1>
          <p style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, marginBottom: "20px", lineHeight: 1.7 }}>
            Articles, essays, and links I found worth sharing.
          </p>
          <div style={{ position: "relative", maxWidth: "420px" }}>
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--muted2)",
                fontSize: "14px",
                pointerEvents: "none",
              }}
            >
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, source, description, or tag..."
              style={{
                width: "100%",
                padding: "10px 16px 10px 36px",
                border: "1.5px solid var(--border2)",
                borderRadius: "8px",
                fontSize: "13px",
                fontFamily: "Inter, sans-serif",
                color: "var(--fg)",
                outline: "none",
                backgroundColor: "var(--card)",
                transition: "all 0.3s",
              }}
            />
          </div>
          <div style={{ fontSize: "12px", color: "var(--muted2)", marginTop: "8px" }}>
            {filtered.length} find{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        <div style={{ display: "grid", gap: "10px" }}>
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                background: "var(--card)",
                padding: "18px 20px",
                transition: "all 0.3s",
                display: "block",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--fg)",
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted2)", whiteSpace: "nowrap" }}>↗</div>
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted2)", marginBottom: "8px" }}>{item.source}</div>
              <div style={{ fontSize: "13px", color: "var(--fg2)", lineHeight: 1.7, marginBottom: "12px" }}>{item.description}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {item.tags.map((tag) => {
                  const color = tagColors[tag] ?? "#3b82f6";
                  return (
                    <span
                      key={tag}
                      style={{
                        fontSize: "10px",
                        color,
                        border: `1px solid ${color}`,
                        borderRadius: "100px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        transition: "all 0.3s",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
