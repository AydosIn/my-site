import Link from "next/link";
import { learningNow, buildingNow, type HomePanelItem } from "@data/home";
import { FadeIn } from "@components/motion/FadeIn";
import { RevealStaggerGroup, RevealStaggerItem } from "@components/motion/RevealOnScroll";
import { HoverLift } from "@components/motion/HoverLift";
import { MotionArrowLink } from "@components/motion/NavLink";

const INTRO_TEXT =
  "There is nothing better than getting to know another soul. So, I created this. But I am sure people won't just dm me suddenly. They need to see who I really am. This place is exactly the right place for it. I will be sharing my projects, thoughts, reflections, and some more of it.";

const YANDEX_MUSIC_ALBUM_EMBED = "https://music.yandex.ru/iframe/#album/37472433";

function PanelItem({ item }: { item: HomePanelItem }) {
  const title = item.href ? (
    item.external ? (
      <a
        href={item.href}
        className="home-panel__item-title"
        target="_blank"
        rel="noreferrer"
      >
        {item.title}
      </a>
    ) : (
      <Link href={item.href} className="home-panel__item-title">
        {item.title}
      </Link>
    )
  ) : (
    <span className="home-panel__item-title">{item.title}</span>
  );

  return (
    <li>
      {title}
      {item.detail ? <span className="home-panel__item-detail">{item.detail}</span> : null}
    </li>
  );
}

function HomePanel({ label, items }: { label: string; items: HomePanelItem[] }) {
  return (
    <HoverLift className="home-panel">
      <h2 className="home-panel__label">{label}</h2>
      <ul className="home-panel__list">
        {items.map((item) => (
          <PanelItem key={item.title} item={item} />
        ))}
      </ul>
    </HoverLift>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <FadeIn className="home-essay">
          <h1 className="home-essay__title">Hi, I am Aydos.</h1>
          <p className="home-essay__prose">{INTRO_TEXT}</p>
          <div className="home-essay__music">
            <iframe
              className="home-music-embed"
              src={YANDEX_MUSIC_ALBUM_EMBED}
              title="Yandex Music album"
              frameBorder={0}
              allow="autoplay; fullscreen"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <aside className="home-aside" aria-label="Current focus">
            <HomePanel label="Learning right now" items={learningNow} />
            <HomePanel label="Building" items={buildingNow} />
          </aside>
        </FadeIn>
      </div>

      <FadeIn className="home-hero__rule-wrap" delay={0.1}>
        <hr className="home-essay__rule" />
      </FadeIn>

      <RevealStaggerGroup className="home-index">
        <RevealStaggerItem className="home-index__section">
          <h2 className="home-index__label">Reflections</h2>
          <div>
            {[
              { title: "Starting this site", meta: "Mar 2026" },
              { title: "A small lesson", meta: "Mar 2026" },
            ].map((item) => (
              <div key={item.title} className="home-index__row">
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <MotionArrowLink href="/reflections" className="home-index__link">
            View all reflections →
          </MotionArrowLink>
        </RevealStaggerItem>

        <RevealStaggerItem className="home-index__section">
          <h2 className="home-index__label">Recently read</h2>
          <div>
            {[
              { title: "Clean Code", meta: "Robert C. Martin" },
              { title: "Atomic Habits", meta: "James Clear" },
            ].map((item) => (
              <div key={item.title} className="home-index__row">
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <MotionArrowLink href="/books" className="home-index__link">
            View all books →
          </MotionArrowLink>
        </RevealStaggerItem>

        <RevealStaggerItem className="home-index__section">
          <h2 className="home-index__label">Finds</h2>
          <div>
            {[
              { title: "How to Think for Yourself - Paul Graham", meta: "paulgraham.com" },
              { title: "The Cook and the Chef - Wait But Why", meta: "waitbutwhy.com" },
            ].map((item) => (
              <div key={item.title} className="home-index__row">
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <MotionArrowLink href="/finds" className="home-index__link">
            View all finds →
          </MotionArrowLink>
        </RevealStaggerItem>
      </RevealStaggerGroup>
    </>
  );
}
