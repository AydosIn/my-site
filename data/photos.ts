/** The three shown on the home page, in this order. */
export const featuredPhotoIds = ["valley-dusk", "laptop-mirror", "friends-stage"];

/**
 * Photos shown on /photos, in this order.
 * Add an image to public/photos/ and an entry here with its width and height
 * in pixels, and strip GPS data first. The photos page shows each one whole;
 * the home page crops its three to fill their tiles.
 */
export type Photo = {
  id: string;
  src: string;
  /** The image file's size in pixels, so the viewer can show the whole photo at its own shape. */
  width: number;
  height: number;
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
    width: 2000,
    height: 1500,
    alt: "Rooftops and vineyards at dusk, with mountains fading into a blue sky",
    date: "May 2026",
  },
  {
    id: "laptop-mirror",
    src: "/photos/photo2.jpg",
    width: 2000,
    height: 1500,
    alt: "A laptop on a desk showing its camera view of me taking a photo of it with my phone",
    date: "Oct 2026",
  },
  {
    id: "friends-stage",
    src: "/photos/photo1.jpg",
    width: 2000,
    height: 1500,
    alt: "Four friends sitting side by side on the edge of a stage in front of a projector screen",
    date: "Oct 2026",
  },
  {
    id: "doppi-selfie",
    src: "/photos/photo4.jpg",
    width: 1500,
    height: 2000,
    alt: "Selfie in a black and white embroidered doppi in front of a painted cactus mural",
    date: "Apr 2026",
  },
];
