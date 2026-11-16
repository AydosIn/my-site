import Image from "next/image";
import type { Photo } from "@data/photos";

/** The home page's row of three photos, shown as they are. */
export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="photos">
      {photos.map((photo) => (
        <figure key={photo.id} className="photo">
          <div className="photo__frame">
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
