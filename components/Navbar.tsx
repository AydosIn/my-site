"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { site } from "@data/site";
import { ThemeToggle } from "@components/ThemeToggle";
import { NavLink } from "@components/motion/NavLink";
import { MOTION } from "@lib/motion";

const navLinks = [
  { label: "Reflections", href: "/reflections" },
  { label: "Books", href: "/books" },
  { label: "Finds", href: "/finds" },
  { label: "Contact", href: "/contact" },
] as const;

const MotionLink = m.create(Link);

export function Navbar() {
  const reduced = useReducedMotion();

  return (
    <header className="navbar-root">
      <div className="navbar-inner">
        <MotionLink
          href="/"
          className="navbar-brand"
          whileHover={reduced ? undefined : { opacity: 0.75 }}
          transition={MOTION.micro}
        >
          {site.ownerName}
        </MotionLink>
        <nav className="navbar-links">
          {navLinks.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
