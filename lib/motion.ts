export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const MOTION = {
  fast: { duration: 0.12, ease: EASE_OUT },
  normal: { duration: 0.18, ease: EASE_OUT },
  slow: { duration: 0.22, ease: EASE_OUT },
} as const;

export const pageVariants = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const hoverLift = {
  y: -2,
  opacity: 0.96,
};

export const hoverTap = {
  y: 0,
  opacity: 1,
};

export function staggerDelay(index: number, reduced: boolean | null) {
  return reduced ? 0 : index * 0.05;
}
