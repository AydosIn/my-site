"use client";

import Image from "next/image";
import type { Photo } from "@data/photos";

/** Photos in a row of three; each one zooms in where the pointer is. */
export function PhotoGrid({
  photos,
  captions = false,
  priority = false,
}: {
  photos: Photo[];
  captions?: boolean;
  priority?: boolean;
}) {
  function zoom(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const img = e.currentTarget.querySelector("img");
    if (!img) return;
    const r = e.currentTarget.getBoundingClientRect();
    img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
    img.style.transform = "scale(1.5)";
  }

  function reset(e: React.PointerEvent<HTMLDivElement>) {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "";
  }

  return (
    <div className="photos">
      {photos.map((photo, i) => (
        <figure key={photo.id} className="photo">
          <div className="photo__frame" onPointerMove={zoom} onPointerLeave={reset}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 767px) 100vw, 300px"
              className="photo__img"
              priority={priority && i === 0}
            />
          </div>
          {captions && (photo.caption || photo.date) && (
            <figcaption className="label">
              {[photo.caption, photo.place, photo.date].filter(Boolean).join(" · ")}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
