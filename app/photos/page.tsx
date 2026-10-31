import Link from "next/link";
import { photos } from "@data/photos";
import { PhotoViewer } from "@components/PhotoViewer";

export const metadata = { title: "photos" };

export default function PhotosPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{"// photos"}</p>
        <h1 className="page-header__title">photos</h1>
        <p className="page-header__sub">moments i wanted to keep.</p>
      </header>

      {photos.length > 0 ? (
        <PhotoViewer photos={photos} />
      ) : (
        <p className="home-empty">nothing here yet.</p>
      )}

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
