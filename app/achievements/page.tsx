import { site } from "@data/site";
import { books } from "@data/books";

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "all 0.3s" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 40px" }}>

        <h1 style={{
          fontFamily: "Syne, sans-serif", fontSize: "48px", fontWeight: 800,
          color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px",
        }}>
          Achievements
        </h1>
        <p style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300, marginBottom: "36px" }}>
          Things I built, earned, and accomplished.
        </p>

        {/* Featured project */}
        <div style={{
          background: "var(--card)", border: "1px solid var(--border)", borderRadius: "14px", padding: "32px",
          marginBottom: "12px", display: "flex",
          justifyContent: "space-between", alignItems: "flex-start", gap: "24px",
          transition: "all 0.3s",
        }}>
          <div>
            <div style={{
              fontSize: "10px", color: "var(--muted2)", opacity: 1,
              textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px",
            }}>
              ⭐ Featured Project
            </div>
            <h2 style={{
              fontFamily: "Syne, sans-serif", fontSize: "24px",
              fontWeight: 800, color: "var(--fg)", marginBottom: "8px", lineHeight: 1.2,
            }}>
              Personal Website
            </h2>
            <p style={{
              fontSize: "13px", color: "var(--muted)",
              lineHeight: 1.7, fontWeight: 300, maxWidth: "420px", marginBottom: "20px",
            }}>
              Designed and built from scratch. Full-stack personal site with Next.js App Router,
              TypeScript, and Tailwind CSS. Deployed on Vercel with CI/CD via GitHub.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
              {["Next.js", "TypeScript", "Tailwind", "Vercel"].map((t) => (
                <span key={t} style={{
                  fontSize: "10px", color: "var(--fg2)",
                  border: "1px solid var(--border2)",
                  borderRadius: "100px", padding: "3px 10px",
                  background: "var(--bg)",
                  transition: "all 0.3s",
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={site.url} target="_blank" rel="noreferrer" style={{
                fontSize: "12px", color: "var(--btn-primary-fg)", background: "#2563eb",
                border: "1px solid #2563eb", borderRadius: "6px",
                padding: "7px 14px", textDecoration: "none",
                transition: "all 0.3s",
              }}>
                Live Site ↗
              </a>
              <a href={site.contact.github} target="_blank" rel="noreferrer" style={{
                fontSize: "12px", color: "var(--fg2)",
                background: "var(--bg)",
                border: "1px solid var(--border2)", borderRadius: "6px",
                padding: "7px 14px", textDecoration: "none",
                transition: "all 0.3s",
              }}>
                GitHub ↗
              </a>
            </div>
          </div>
          <div style={{
            fontFamily: "Syne, sans-serif", fontSize: "48px",
            fontWeight: 800, color: "var(--fg2)",
            opacity: 0.18, lineHeight: 1, flexShrink: 0,
            transition: "all 0.3s",
          }}>
            2026
          </div>
        </div>

        {/* Python projects */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
          {[
            {
              icon: "🔢", tag: "Python · Game", title: "Number Guessing Game",
              desc: "CLI game where the computer picks a random number and the player guesses it. Includes hints, attempt tracking, and win/loss logic.",
              pills: ["Python", "CLI", "Logic"], blue: false,
            },
            {
              icon: "📝", tag: "Python · Game", title: "Word Guessing Game",
              desc: "CLI word game where players guess a hidden word letter by letter. Tracks wrong guesses and displays progress — inspired by Wordle.",
              pills: ["Python", "CLI", "Strings"], blue: true,
            },
          ].map((p) => (
            <div key={p.title} style={{
              border: "1px solid var(--border)",
              borderRadius: "12px", padding: "24px",
              background: "var(--card)",
              transition: "all 0.3s",
            }}>
              <div style={{ fontSize: "24px", marginBottom: "14px" }}>{p.icon}</div>
              <div style={{
                fontSize: "10px", color: "var(--muted2)",
                textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px",
              }}>
                {p.tag}
              </div>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "16px",
                fontWeight: 700, color: "var(--fg)", marginBottom: "6px",
              }}>
                {p.title}
              </div>
              <div style={{
                fontSize: "12px", color: "var(--muted)",
                lineHeight: 1.6, fontWeight: 300, marginBottom: "12px",
              }}>
                {p.desc}
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.pills.map((pill) => (
                  <span key={pill} style={{
                    fontSize: "10px",
                    color: "var(--muted2)",
                    background: "var(--bg)",
                    border: "1px solid var(--border2)",
                    borderRadius: "4px", padding: "2px 8px",
                    transition: "all 0.3s",
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic */}
        <div style={{
          border: "1px solid var(--border)", borderRadius: "12px", padding: "24px",
          background: "var(--card)", marginBottom: "12px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "20px",
          transition: "all 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontSize: "28px" }}>🎓</div>
            <div>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "16px",
                fontWeight: 700, color: "var(--fg)", marginBottom: "4px",
              }}>
                American University of Technology — Full Tuition
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted2)" }}>
                Accepted with full tuition scholarship · Tashkent, Uzbekistan
              </div>
            </div>
          </div>
          <div style={{
            background: "var(--btn-primary-bg)", color: "var(--btn-primary-fg)",
            fontSize: "11px", fontWeight: 500, padding: "6px 16px",
            borderRadius: "100px", whiteSpace: "nowrap", transition: "all 0.3s",
          }}>
            Full Scholarship
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { num: "7.0", label: "IELTS Band" },
            { num: "1360", label: "SAT Score" },
            { num: `${books.length}`, label: "Books Read" },
            { num: "3+", label: "Projects Built" },
          ].map((s) => (
            <div key={s.label} style={{
              border: "1px solid var(--border)", borderRadius: "10px",
              padding: "16px 20px", background: "var(--card)",
              transition: "all 0.3s",
            }}>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "22px",
                fontWeight: 800, color: "var(--fg)", marginBottom: "2px",
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: "11px", color: "var(--muted2)" }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}