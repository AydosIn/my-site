"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@data/site";
import { ThemeToggle } from "@components/ThemeToggle";
import { BunnyMark } from "@components/BunnyMark";
import { FadeLink } from "@components/FadeLink";

const navItems = [
  { label: "cv", href: site.cvUrl },
  { label: "projects", href: "/projects" },
  { label: "books", href: "/books" },
  { label: "writing", href: "/reflections" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  // The home page has its own header (bunny + big name), so the bar would repeat it.
  // /photos is a full-screen viewer with nothing around the photo.
  if (pathname === "/" || pathname === "/photos") return null;

  return (
    <header className="nav">
      <Link href="/" className="nav__brand" aria-label={`${site.ownerName.toLowerCase()}, home`}>
        <BunnyMark className="nav__mark" />
        <span className="nav__name">{site.ownerName.toLowerCase()}</span>
      </Link>

      <ThemeToggle className="nav__theme" variant="icon" />

      <nav className="nav__links" aria-label="primary">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="nav__link"
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <FadeLink href="/photos" className="nav__link">
          photos
        </FadeLink>
      </nav>
    </header>
  );
}
