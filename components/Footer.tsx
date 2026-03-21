import { site } from "@data/site";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      backgroundColor: "var(--bg)",
      padding: "24px 40px",
      transition: "background-color 0.3s, border-color 0.3s",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: "12px", color: "var(--muted2)" }}>
          © {new Date().getFullYear()} {site.ownerName}
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "GitHub", href: site.contact.github },
            { label: "LinkedIn", href: site.contact.linkedin },
            { label: "Telegram", href: site.contact.telegram },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              fontSize: "12px", color: "var(--muted2)",
              textDecoration: "none", transition: "color 0.3s",
            }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}