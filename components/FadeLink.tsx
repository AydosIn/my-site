"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/** How long the current page takes to fade to blank before navigating. Keep in sync with globals.css. */
const FADE_MS = 200;

/**
 * Returns a navigate function that briefly fades the whole page out first, so the
 * next page appears out of an empty screen. Skips the fade for reduced motion.
 */
export function useFadeNavigate() {
  const router = useRouter();

  return useCallback(
    (href: string) => {
      const root = document.documentElement;
      if ("leaving" in root.dataset) return; // already on the way out

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      router.prefetch(href);
      root.dataset.leaving = "";
      window.setTimeout(() => router.push(href), FADE_MS);
    },
    [router],
  );
}

/** A link that fades the page out before navigating. Modified clicks (new tab, etc.) behave normally. */
export function FadeLink({
  href,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  const fadeTo = useFadeNavigate();

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    fadeTo(href);
  }

  return (
    <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/** Mounted once in the root layout: brings the screen back as soon as the new route renders. */
export function FadeReset() {
  const pathname = usePathname();
  useEffect(() => {
    delete document.documentElement.dataset.leaving;
  }, [pathname]);
  return null;
}
