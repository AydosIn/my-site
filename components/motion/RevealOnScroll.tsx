"use client";

import { m, useReducedMotion } from "framer-motion";
import { MOTION, revealVariants, VIEWPORT } from "@lib/motion";

export function RevealOnScroll({
  children,
  className,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      style={style}
      initial={reduced ? false : revealVariants.hidden}
      whileInView={revealVariants.visible}
      viewport={VIEWPORT}
      transition={{ ...MOTION.medium, delay: reduced ? 0 : delay }}
    >
      {children}
    </m.div>
  );
}

export function RevealStaggerGroup({
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
      whileInView="visible"
      viewport={VIEWPORT}
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

export function RevealStaggerItem({
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
        hidden: reduced ? { opacity: 1, y: 0 } : revealVariants.hidden,
        visible: { opacity: 1, y: 0, transition: MOTION.medium },
      }}
    >
      {children}
    </m.div>
  );
}
