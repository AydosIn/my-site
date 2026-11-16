"use client";

import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs inline in <head> before first paint, so a saved choice never flashes the
 * other theme. With nothing saved, the CSS follows the system setting.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

// The page's theme is data-theme on <html> when the visitor picked one, otherwise the system's.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

function getTheme(): Theme {
  const picked = document.documentElement.dataset.theme;
  if (picked === "light" || picked === "dark") return picked;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

// The server can't know the visitor's theme; the icon settles right after hydration.
function getServerTheme(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode etc.): the switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
    </button>
  );
}
