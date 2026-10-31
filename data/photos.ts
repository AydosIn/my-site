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
};

export const photos: Photo[] = [
  {
    id: "p-1",
    src: "/photos/placeholder-1.svg",
    alt: "Placeholder photo",
    caption: "first placeholder. a real photo goes here.",
    place: "tashkent",
    date: "oct 2026",
  },
  {
    id: "p-2",
    src: "/photos/placeholder-2.svg",
    alt: "Placeholder photo",
    caption: "second placeholder.",
    place: "samarkand",
    date: "sep 2026",
  },
  {
    id: "p-3",
    src: "/photos/placeholder-3.svg",
    alt: "Placeholder photo",
    caption: "third placeholder.",
    date: "aug 2026",
  },
  {
    id: "p-4",
    src: "/photos/placeholder-4.svg",
    alt: "Placeholder photo",
    caption: "last one. the arrow stops here.",
    place: "bukhara",
    date: "jul 2026",
  },
];
