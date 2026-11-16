import Link from "next/link";
import { site } from "@data/site";
import { ThemeToggle } from "@components/ThemeToggle";

/**
 * Name, role line, and on the right the X link and the theme switch.
 * On the home page the name is the page's h1; elsewhere it links home.
 */
export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="site-header">
      <div>
        {home ? (
          <h1 className="site-name">{site.ownerName}</h1>
        ) : (
          <p className="site-name">
            <Link href="/">{site.ownerName}</Link>
          </p>
        )}
        <p className="site-roles">
          {site.role.map((part) => (
            <span key={part}>{part}</span>
          ))}
        </p>
      </div>
      <div className="site-actions">
        <a href={site.contact.x} className="site-x" aria-label="X" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
