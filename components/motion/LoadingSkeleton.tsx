"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION } from "@lib/motion";

const rows = [
  { className: "skeleton skeleton-title", delay: 0 },
  { className: "skeleton skeleton-line", delay: 0.08 },
  { className: "skeleton skeleton-line skeleton-line--short", delay: 0.16 },
];

export function LoadingSkeleton() {
  const reduced = useReducedMotion();

  return (
    <div className="page-shell">
      {rows.map((row) => (
        <motion.div
          key={row.className}
          className={row.className}
          animate={reduced ? { opacity: 0.55 } : { opacity: [0.35, 0.65, 0.35] }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: row.delay }
          }
        />
      ))}
    </div>
  );
}
