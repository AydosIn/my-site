"use client";

import { usePathname } from "next/navigation";
import { homeContactLinks } from "@data/site";

export function Footer() {
  const pathname = usePathname();

  // The home page has its own footer line under the centred column, and
  // /photos is a full-screen viewer with nothing around the photo.
  if (pathname === "/" || pathname === "/photos") return null;

  return (
    <footer className="foot">
      <ul className="foot__links" aria-label="elsewhere">
        {homeContactLinks.map((link) => {
          if (!link.href) return null;
          const external = !link.href.startsWith("mailto:");
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className="foot__link"
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="foot__made">
        made with <span aria-hidden="true">&lt;3</span>
        <span className="sr-only">love</span> in tashkent &amp; nukus
      </p>
    </footer>
  );
}
