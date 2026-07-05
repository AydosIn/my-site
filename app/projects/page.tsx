import Link from "next/link";

export const metadata = { title: "projects" };

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{"// projects"}</p>
        <h1 className="page-header__title">building</h1>
      </header>

      <p className="page-coming-soon">coming soon</p>

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
