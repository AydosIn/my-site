"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MOTION, pageVariants } from "@lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        key={pathname}
        initial={reduced ? false : pageVariants.initial}
        animate={pageVariants.animate}
        exit={reduced ? undefined : pageVariants.exit}
        transition={reduced ? { duration: 0 } : MOTION.page}
        style={{ willChange: reduced ? undefined : "opacity, transform" }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
