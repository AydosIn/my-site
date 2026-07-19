import Link from "next/link";
import { rules } from "@data/rules";

export const metadata = { title: "rules" };

export default function RulesPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <p className="page-header__comment">{"// rules"}</p>
        <h1 className="page-header__title">rules</h1>
        <p className="page-header__sub">
          i try to follow these rules and implement them to my life.
        </p>
      </header>

      <ol className="rules-list">
        {rules.map((rule, index) => (
          <li key={rule} className="rules-list__item">
            <span className="rules-list__num" aria-hidden="true">
              {index + 1})
            </span>
            <p className="rules-list__quote">{rule}</p>
          </li>
        ))}
      </ol>

      <Link href="/" className="section__link" style={{ marginTop: "40px" }}>
        ← home
      </Link>
    </div>
  );
}
