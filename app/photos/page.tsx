import { photos } from "@data/photos";
import { PhotoViewer } from "@components/PhotoViewer";
import { FadeLink } from "@components/FadeLink";

export const metadata = { title: "photos" };

export default function PhotosPage() {
  return (
    <div className="photos-stage">
      <FadeLink href="/" className="photos-stage__close" aria-label="close photos">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </FadeLink>

      {photos.length > 0 ? (
        <PhotoViewer photos={photos} />
      ) : (
        <p className="photos-stage__empty">nothing here yet.</p>
      )}
    </div>
  );
}
