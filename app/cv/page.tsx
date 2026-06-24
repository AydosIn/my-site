import Link from "next/link";

export const metadata = { title: "cv" };

export default function CvPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">// cv</p>
        <h1 className="page-header__title">resume</h1>
      </header>

      <p className="page-coming-soon">coming very soon</p>

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
