"use client";

import { m, useReducedMotion } from "framer-motion";
import { MOTION, hoverBreathe, tapBreathe } from "@lib/motion";

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
    <m.div
      className={className}
      style={style}
      whileHover={reduced ? undefined : hoverBreathe}
      whileTap={reduced ? undefined : tapBreathe}
      transition={MOTION.micro}
    >
      {children}
    </m.div>
  );
}
