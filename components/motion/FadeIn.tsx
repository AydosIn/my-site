"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION, fadeUpVariants } from "@lib/motion";

export function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduced ? false : fadeUpVariants.hidden}
      animate={fadeUpVariants.visible}
      transition={{ ...MOTION.normal, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: reduced ? 0 : 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 1, y: 0 } : fadeUpVariants.hidden,
        visible: { opacity: 1, y: 0, transition: MOTION.normal },
      }}
    >
      {children}
    </motion.div>
  );
}
