/**
 * Photos shown on /photos, one at a time, in this order.
 * Add an image to public/photos/ and an entry here. Crop to 4:5 portrait
 * (e.g. 1080×1350) for the best fit, and strip GPS data before adding it.
 */
export type Photo = {
  id: string;
  src: string;
  /** Describes the image for screen readers. */
  alt: string;
  caption?: string;
  place?: string;
  date?: string;
  /** "contain" shows the whole image (with bars) instead of filling the 4:5 card. */
  fit?: "cover" | "contain";
};

export const photos: Photo[] = [
  {
    id: "friends-stage",
    src: "/photos/photo1.jpg",
    fit: "contain",
    alt: "Four friends sitting side by side on the edge of a stage in front of a projector screen",
    date: "oct 2026",
  },
  {
    id: "laptop-mirror",
    src: "/photos/photo2.jpg",
    fit: "contain",
    alt: "A laptop on a desk showing its camera view of me taking a photo of it with my phone",
    date: "oct 2026",
  },
  {
    id: "valley-dusk",
    src: "/photos/photo3.jpg",
    alt: "Rooftops and vineyards at dusk, with mountains fading into a blue sky",
    date: "may 2026",
  },
  {
    id: "doppi-selfie",
    src: "/photos/photo4.jpg",
    alt: "Selfie in a black and white embroidered doppi in front of a painted cactus mural",
    date: "apr 2026",
  },
];
