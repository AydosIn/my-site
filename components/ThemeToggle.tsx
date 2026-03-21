"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: "56px", height: "30px" }} />;

  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle dark mode"
      style={{
        width: "56px",
        height: "30px",
        borderRadius: "100px",
        background: isDark ? "#1a1a2e" : "#f0f0f0",
        border: isDark ? "1.5px solid #6366f1" : "1.5px solid #e0e0e0",
        boxShadow: isDark ? "0 0 12px rgba(99,102,241,0.3)" : "none",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {/* Stars in dark mode */}
      {isDark && (
        <>
          <div style={{ position: "absolute", top: "6px", left: "8px", width: "2px", height: "2px", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "12px", left: "14px", width: "3px", height: "3px", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "5px", left: "20px", width: "2px", height: "2px", background: "#fff", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "16px", left: "7px", width: "2px", height: "2px", background: "#fff", borderRadius: "50%" }} />
        </>
      )}

      {/* Knob */}
      <div style={{
        position: "absolute",
        top: "3px",
        left: isDark ? "27px" : "3px",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: isDark ? "#1e1e3f" : "#fff",
        boxShadow: isDark
          ? "0 2px 8px rgba(99,102,241,0.4), inset 0 0 6px rgba(255,255,255,0.1)"
          : "0 2px 8px rgba(0,0,0,0.15)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {isDark ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </div>
    </div>
  );
}