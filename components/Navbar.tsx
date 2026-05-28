import Link from "next/link";
import { site } from "@data/site";
import { ThemeToggle } from "@components/ThemeToggle";

const navLinks = [
  { label: "Reflections", href: "/reflections" },
  { label: "Books", href: "/books" },
  { label: "Finds", href: "/finds" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="navbar-root">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          {site.ownerName}
        </Link>
        <nav className="navbar-links">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
