"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, useReducedMotion } from "framer-motion";
import { MOTION } from "@lib/motion";

const MotionLink = m.create(Link);

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link href={href} className="navbar-link" data-active={isActive || undefined}>
      <m.span
        className="navbar-link__label"
        whileHover={reduced ? undefined : { y: -1, opacity: 1 }}
        transition={MOTION.micro}
      >
        {children}
      </m.span>
    </Link>
  );
}

export function MotionArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <MotionLink
      href={href}
      className={className}
      whileHover={reduced ? undefined : { x: 3, opacity: 0.8 }}
      transition={MOTION.micro}
    >
      {children}
    </MotionLink>
  );
}
