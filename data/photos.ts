/** The three shown on the home page, in this order. */
export const featuredPhotoIds = ["valley-dusk", "laptop-mirror", "friends-stage"];

/**
 * Photos shown on /photos, in this order.
 * Add an image to public/photos/ and an entry here. Photos are cropped to fill
 * their tile, so keep the subject near the middle, and strip GPS data first.
 */
export type Photo = {
  id: string;
  src: string;
  /** Describes the image for screen readers. */
  alt: string;
  caption?: string;
  place?: string;
  date?: string;
};

export const photos: Photo[] = [
  {
    id: "valley-dusk",
    src: "/photos/photo3.jpg",
    alt: "Rooftops and vineyards at dusk, with mountains fading into a blue sky",
    date: "May 2026",
  },
  {
    id: "laptop-mirror",
    src: "/photos/photo2.jpg",
    alt: "A laptop on a desk showing its camera view of me taking a photo of it with my phone",
    date: "Oct 2026",
  },
  {
    id: "friends-stage",
    src: "/photos/photo1.jpg",
    alt: "Four friends sitting side by side on the edge of a stage in front of a projector screen",
    date: "Oct 2026",
  },
  {
    id: "doppi-selfie",
    src: "/photos/photo4.jpg",
    alt: "Selfie in a black and white embroidered doppi in front of a painted cactus mural",
    date: "Apr 2026",
  },
];
