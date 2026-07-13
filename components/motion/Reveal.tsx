"use client";

import { m, useReducedMotion } from "framer-motion";
import { MOTION } from "@lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

/** Staggers the reveal of its RevealItem children on mount. */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : 0.06,
            delayChildren: reduced ? 0 : 0.04,
          },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={{
        hidden: reduced ? fadeUp.visible : fadeUp.hidden,
        visible: { ...fadeUp.visible, transition: MOTION.medium },
      }}
    >
      {children}
    </m.div>
  );
}
