"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: "52px", height: "28px" }} />;

  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle dark mode"
      style={{
        width: "52px", height: "28px", borderRadius: "100px",
        background: isDark ? "#1e1e1e" : "#f0f0f0",
        border: `1px solid ${isDark ? "#333" : "#e0e0e0"}`,
        position: "relative", cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute", top: "3px",
        left: isDark ? "27px" : "3px",
        width: "20px", height: "20px", borderRadius: "50%",
        background: isDark ? "#333" : "#fff",
        boxShadow: isDark ? "0 1px 4px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.15)",
        transition: "left 0.3s, background 0.3s",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {isDark ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4"/>
            <line x1="12" y1="2" x2="12" y2="4"/>
            <line x1="12" y1="20" x2="12" y2="22"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="2" y1="12" x2="4" y2="12"/>
            <line x1="20" y1="12" x2="22" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        )}
      </div>
    </div>
  );
}