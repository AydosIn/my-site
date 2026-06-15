/** Easing: fast start, soft landing */
export const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const MOTION = {
  micro: { duration: 0.25, ease: EASE },
  medium: { duration: 0.35, ease: EASE },
  page: { duration: 0.6, ease: EASE },
} as const;

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** @deprecated use revealVariants */
export const fadeUpVariants = revealVariants;

export const hoverBreathe = { scale: 1.015, y: -2 };
export const tapBreathe = { scale: 0.99, y: 0 };

/** @deprecated use hoverBreathe */
export const hoverLift = hoverBreathe;
/** @deprecated use tapBreathe */
export const hoverTap = tapBreathe;

export const VIEWPORT = { once: true, margin: "-40px" as const };

export function staggerDelay(index: number, reduced: boolean | null) {
  return reduced ? 0 : index * 0.06;
}
