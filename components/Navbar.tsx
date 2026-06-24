"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@data/site";

const navItems = [
  { label: "cv", href: site.cvUrl },
  { label: "projects", href: "/projects" },
  { label: "books", href: "/books" },
  { label: "reflections", href: "/reflections" },
] as const;

function NavButton({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  const pathname = usePathname();
  const active = !external && pathname.startsWith(href);

  if (external) {
    return (
      <a href={href} className="nav-btn" target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="nav-btn" data-active={active || undefined}>
      {label}
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="navbar-root">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-brand__prompt">
            ~/aydos $<span className="hero__cursor" aria-hidden="true" />
          </div>
          <Link href="/" className="navbar-brand__name">
            {site.ownerName}
          </Link>
          <ul className="navbar-brand__facts">
            {site.devFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <nav className="navbar-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavButton key={item.label} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
