"use client";

import { site } from "@data/site";
import { books } from "@data/books";
import { FadeIn } from "@components/motion/FadeIn";
import { HoverLift } from "@components/motion/HoverLift";
import { RevealOnScroll, RevealStaggerGroup, RevealStaggerItem } from "@components/motion/RevealOnScroll";

const pythonProjects = [
  {
    icon: "🔢",
    tag: "Python · Game",
    title: "Number Guessing Game",
    desc: "CLI game where the computer picks a random number and the player guesses it. Includes hints, attempt tracking, and win/loss logic.",
    pills: ["Python", "CLI", "Logic"],
  },
  {
    icon: "📝",
    tag: "Python · Game",
    title: "Word Guessing Game",
    desc: "CLI word game where players guess a hidden word letter by letter. Tracks wrong guesses and displays progress — inspired by Wordle.",
    pills: ["Python", "CLI", "Strings"],
  },
];

const stats = [
  { num: "7.0", label: "IELTS Band" },
  { num: "1360", label: "SAT Score" },
  { num: `${books.length}`, label: "Books Read" },
  { num: "3+", label: "Projects Built" },
];

export function AchievementsContent() {
  return (
    <div className="page-shell achievements-shell">
      <FadeIn>
        <h1 className="achievements-title font-syne">Achievements</h1>
        <p className="achievements-subtitle">Things I built, earned, and accomplished.</p>
      </FadeIn>

      <RevealOnScroll>
        <HoverLift className="achievement-card achievement-card--featured">
          <div>
            <div className="achievement-card__eyebrow">⭐ Featured Project</div>
            <h2 className="achievement-card__title font-syne">Personal Website</h2>
            <p className="achievement-card__desc">
              Designed and built from scratch. Full-stack personal site with Next.js App Router,
              TypeScript, and Tailwind CSS. Deployed on Vercel with CI/CD via GitHub.
            </p>
            <div className="achievement-pills">
              {["Next.js", "TypeScript", "Tailwind", "Vercel"].map((t) => (
                <span key={t} className="achievement-pill">
                  {t}
                </span>
              ))}
            </div>
            <div className="achievement-actions">
              <a href={site.url} target="_blank" rel="noreferrer" className="achievement-btn achievement-btn--primary">
                Live Site ↗
              </a>
              <a href={site.contact.github} target="_blank" rel="noreferrer" className="achievement-btn">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="achievement-year font-syne">2026</div>
        </HoverLift>
      </RevealOnScroll>

      <RevealStaggerGroup className="achievement-grid">
        {pythonProjects.map((p) => (
          <RevealStaggerItem key={p.title}>
            <HoverLift className="achievement-card">
              <div className="achievement-card__icon">{p.icon}</div>
              <div className="achievement-card__eyebrow">{p.tag}</div>
              <div className="achievement-card__title font-syne">{p.title}</div>
              <div className="achievement-card__desc">{p.desc}</div>
              <div className="achievement-pills">
                {p.pills.map((pill) => (
                  <span key={pill} className="achievement-pill achievement-pill--sm">
                    {pill}
                  </span>
                ))}
              </div>
            </HoverLift>
          </RevealStaggerItem>
        ))}
      </RevealStaggerGroup>

      <RevealOnScroll delay={0.06}>
        <HoverLift className="achievement-card achievement-card--row">
          <div className="achievement-row">
            <span className="achievement-card__icon">🎓</span>
            <div>
              <div className="achievement-card__title font-syne">
                American University of Technology — Full Tuition
              </div>
              <div className="achievement-card__meta">
                Accepted with full tuition scholarship · Tashkent, Uzbekistan
              </div>
            </div>
          </div>
          <span className="achievement-badge">Full Scholarship</span>
        </HoverLift>
      </RevealOnScroll>

      <RevealStaggerGroup className="achievement-stats">
        {stats.map((s) => (
          <RevealStaggerItem key={s.label}>
            <HoverLift className="achievement-stat">
              <div className="achievement-stat__num font-syne">{s.num}</div>
              <div className="achievement-stat__label">{s.label}</div>
            </HoverLift>
          </RevealStaggerItem>
        ))}
      </RevealStaggerGroup>
    </div>
  );
}
