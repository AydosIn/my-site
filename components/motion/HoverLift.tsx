"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MOTION, hoverLift, hoverTap } from "@lib/motion";

export function HoverLift({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      whileHover={reduced ? undefined : hoverLift}
      whileTap={reduced ? undefined : hoverTap}
      transition={MOTION.normal}
    >
      {children}
    </motion.div>
  );
}
