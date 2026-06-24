import Link from "next/link";

export const metadata = { title: "reflections" };

export default function ReflectionsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">// reflections</p>
        <h1 className="page-header__title">writing</h1>
      </header>

      <p className="page-coming-soon">coming soon</p>

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
