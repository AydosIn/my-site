"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

/**
 * Runs inline in <head> before first paint so a saved light theme doesn't
 * flash dark on load. Kept as a string because it can't wait for React.
 */
export const themeInitScript = `try{if(localStorage.getItem("${STORAGE_KEY}")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

// The source of truth is the data-theme attribute on <html>. Watching it means
// every toggle on the page (home + navbar) stays in sync without shared state.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// The server can't see localStorage, so it always renders the default.
function getServerTheme(): Theme {
  return "dark";
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage blocked (private mode etc.): the switch still works for this visit
    }
  }

  return (
    <button
      type="button"
      className={className ? `theme-toggle ${className}` : "theme-toggle"}
      onClick={toggle}
      aria-label={`switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      [ <b>{theme}</b> ]
    </button>
  );
}
