/** Easing: fast start, soft landing */
export const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const MOTION = {
  micro: { duration: 0.25, ease: EASE },
  medium: { duration: 0.35, ease: EASE },
  page: { duration: 0.6, ease: EASE },
} as const;
