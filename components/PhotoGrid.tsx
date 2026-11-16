"use client";

import Image from "next/image";
import type { Photo } from "@data/photos";

/** The home page's row of three photos; each one zooms in where the pointer is. */
export function PhotoGrid({ photos }: { photos: Photo[] }) {
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
      {photos.map((photo) => (
        <figure key={photo.id} className="photo">
          <div className="photo__frame" onPointerMove={zoom} onPointerLeave={reset}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 767px) 100vw, 300px"
              className="photo__img"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
