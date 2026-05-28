"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MOTION } from "@lib/motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="theme-toggle theme-toggle--placeholder" aria-hidden />;

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      data-dark={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle dark mode"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={MOTION.fast}
    >
      <motion.span
        className="theme-toggle__knob"
        aria-hidden
        animate={{ x: isDark ? 24 : 0 }}
        transition={reduced ? { duration: 0 } : MOTION.normal}
      >
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
      </motion.span>
    </motion.button>
  );
}
