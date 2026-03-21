import { site } from "@data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const contacts = [
    {
      label: "Email", value: "aydosed@gmail.com",
      href: "mailto:aydosed@gmail.com", style: "dark",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: "Telegram", value: "@aydosffr",
      href: "https://t.me/aydosffr", style: "blue",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.968-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.896.159z"/>
        </svg>
      ),
    },
    {
      label: "Instagram", value: "@aydos.inyatdinov",
      href: "https://www.instagram.com/aydos.inyatdinov/", style: "pink",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="#fff" stroke="none"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn", value: "Aydos Inyatdinov",
      href: site.contact.linkedin, style: "light",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const getCardStyle = (type: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      border: "1px solid", borderRadius: "12px", padding: "20px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "16px", textDecoration: "none", cursor: "pointer", transition: "all 0.3s",
    };
    if (type === "dark") return { ...base, background: "#111111", borderColor: "#111111" };
    if (type === "blue") return { ...base, background: "#2563eb", borderColor: "#2563eb" };
    if (type === "pink") return { ...base, background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)", borderColor: "transparent" };
    return { ...base, background: "var(--card)", borderColor: "var(--border)" };
  };

  const isColored = (type: string) => ["dark", "blue", "pink"].includes(type);

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "background-color 0.3s" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 40px" }}>

        <h1 style={{
          fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: 800,
          color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px",
        }}>
          Contact
        </h1>
        <p style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, marginBottom: "40px", lineHeight: 1.7 }}>
          I enjoy meeting new people and exchanging ideas. Feel free to reach out — let's connect.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={getCardStyle(c.style)}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  background: isColored(c.style) ? "#ffffff15" : "var(--bg)",
                  border: isColored(c.style) ? "none" : "1px solid var(--border)",
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px",
                    color: isColored(c.style) ? "#ffffff66" : "var(--muted2)",
                  }}>
                    {c.label}
                  </div>
                  <div style={{
                    fontFamily: "Syne, sans-serif", fontSize: "14px", fontWeight: 700,
                    color: isColored(c.style) ? "#fff" : "var(--fg)",
                  }}>
                    {c.value}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "14px", color: isColored(c.style) ? "rgba(255,255,255,0.4)" : "var(--muted2)" }}>↗</div>
            </a>
          ))}

          <a href={site.contact.github} target="_blank" rel="noreferrer" style={{
            ...getCardStyle("light"), gridColumn: "span 2",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--bg)", border: "1px solid var(--border)", flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--fg)" }}>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px", color: "var(--muted2)" }}>GitHub</div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "14px", fontWeight: 700, color: "var(--fg)" }}>@AydosIn</div>
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "var(--muted2)" }}>↗</div>
          </a>
        </div>

        {/* Availability */}
        <div style={{
          border: "1px solid var(--border)", borderRadius: "12px", padding: "28px",
          background: "var(--card)", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "20px", transition: "all 0.3s",
        }}>
          <div>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "18px", fontWeight: 800, color: "var(--fg)", marginBottom: "6px" }}>
              Let's connect
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, lineHeight: 1.6, maxWidth: "380px" }}>
              Currently working at Aisha AI. Always happy to meet curious people, exchange ideas, and build meaningful connections.
            </div>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#eff6ff", border: "1px solid #bfdbfe",
            borderRadius: "100px", padding: "8px 16px", whiteSpace: "nowrap", flexShrink: 0,
          }}>
            <div style={{ width: "7px", height: "7px", background: "#2563eb", borderRadius: "50%" }} />
            <span style={{ fontSize: "12px", color: "#2563eb", fontWeight: 500 }}>Open to connect</span>
          </div>
        </div>

      </div>
    </div>
  );
}