"use client";

import { usePathname } from "next/navigation";
import { site } from "@data/site";

const socialLinks = [
  { label: "github", href: site.contact.github },
  { label: "telegram", href: site.contact.telegram },
  { label: "instagram", href: site.contact.instagram },
] as const;

export function Footer() {
  const pathname = usePathname();

  // /photos is a full-screen viewer with nothing around the photo.
  if (pathname === "/photos") return null;

  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} {site.ownerName.toLowerCase()}
        </span>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
