import { site } from "@data/site";
import { books } from "@data/books";
import { achievements } from "@data/achievements";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 40px 70px" }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          backgroundColor: "var(--card)", border: "1px solid var(--border)",
          borderRadius: "100px", padding: "6px 14px", marginBottom: "32px",
          transition: "all 0.3s",
        }}>
          <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%" }} />
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>Engineer · Critical Thinker · Reader</span>
        </div>

        {/* Hero */}
        <h1 style={{
          fontFamily: "Syne, sans-serif", fontSize: "68px", fontWeight: 800,
          color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1.0,
          marginBottom: "24px", maxWidth: "700px", transition: "color 0.3s",
        }}>
          Building things<br />
          <span style={{ color: "var(--muted2)" }}>people want.</span>
        </h1>

        <p style={{
          fontSize: "16px", color: "var(--fg2)", lineHeight: 1.7,
          maxWidth: "480px", marginBottom: "40px", fontWeight: 300,
          transition: "color 0.3s",
        }}>
          {site.whatIDo}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "64px" }}>
          <a href="/achievements" style={{
            background: "var(--btn-primary-bg)", color: "var(--btn-primary-fg)",
            padding: "12px 24px", borderRadius: "8px",
            fontSize: "14px", fontWeight: 500, textDecoration: "none",
            transition: "background 0.3s, color 0.3s",
          }}>
            View Achievements
          </a>
          <a href="/reflections" style={{
            background: "#2563eb", color: "#fff", padding: "12px 24px",
            borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none",
          }}>
            Read Reflections →
          </a>
          <a href="/books" style={{
            background: "transparent", color: "var(--muted)",
            padding: "12px 24px", borderRadius: "8px", fontSize: "14px",
            fontWeight: 400, textDecoration: "none",
            border: "1px solid var(--border2)", transition: "all 0.3s",
          }}>
            Books
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "48px", paddingTop: "48px",
          borderTop: "1px solid var(--border)", marginBottom: "80px",
          transition: "border-color 0.3s",
        }}>
          {[
            { num: `${achievements.length}`, label: "Achievements" },
            { num: `${books.length}`, label: "Books Read" },
            { num: "∞", label: "Ideas Explored" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "36px",
                fontWeight: 700, color: "var(--fg)", marginBottom: "4px",
                transition: "color 0.3s",
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted2)", transition: "color 0.3s" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {site.nav.map((item, i) => (
            <a key={item.href} href={item.href} style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: "12px", padding: "24px 20px",
              textDecoration: "none", display: "block",
              transition: "background 0.3s, border-color 0.3s",
            }}>
              <div style={{
                fontSize: "10px", color: "var(--muted2)",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px",
                transition: "color 0.3s",
              }}>
                0{i + 1}
              </div>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "16px",
                fontWeight: 600, color: "var(--fg)", marginBottom: "8px",
                transition: "color 0.3s",
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, transition: "color 0.3s" }}>
                {item.description}
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}