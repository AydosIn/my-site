import { site } from "@data/site";
import { ThemeToggle } from "@components/ThemeToggle";

export function Navbar() {
  return (
    <header className="navbar-root">
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "18px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="/" style={{
          fontFamily: "Syne, sans-serif", fontSize: "16px",
          fontWeight: 700, textDecoration: "none", color: "var(--fg)",
          transition: "color 0.3s",
        }}>
          {site.ownerName}
        </a>
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {["Achievements", "Books", "Reflections"].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} style={{
              fontSize: "13px", textDecoration: "none",
              fontWeight: 400, color: "var(--muted)",
              transition: "color 0.3s",
            }}>
              {item}
            </a>
          ))}
          <a href="/contact" style={{
            background: "#2563eb", color: "#fff",
            padding: "8px 18px", borderRadius: "6px",
            fontSize: "13px", fontWeight: 500, textDecoration: "none",
          }}>
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}