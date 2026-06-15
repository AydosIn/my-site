"use client";

import { m, useReducedMotion } from "framer-motion";
import { EASE } from "@lib/motion";

const rows = [
  { className: "skeleton skeleton-title", delay: 0 },
  { className: "skeleton skeleton-line", delay: 0.1 },
  { className: "skeleton skeleton-line skeleton-line--short", delay: 0.2 },
];

export function LoadingSkeleton() {
  const reduced = useReducedMotion();

  return (
    <div className="page-shell">
      {rows.map((row) => (
        <m.div
          key={row.className}
          className={row.className}
          animate={reduced ? { opacity: 0.55 } : { opacity: [0.35, 0.7, 0.35] }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: 1.4,
                  repeat: Infinity,
                  ease: EASE,
                  delay: row.delay,
                }
          }
        />
      ))}
    </div>
  );
}
