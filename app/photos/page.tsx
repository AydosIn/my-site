import { photos } from "@data/photos";
import { PhotoGrid } from "@components/PhotoGrid";
import { Page } from "@components/Page";

export const metadata = { title: "Photos", alternates: { canonical: "/photos" } };

export default function PhotosPage() {
  return (
    <Page title="Photos" sub="Moments I wanted to keep.">
      {photos.length > 0 ? (
        <PhotoGrid photos={photos} captions priority />
      ) : (
        <p className="label">Nothing here yet.</p>
      )}
    </Page>
  );
}
