"use client";

import { FadeIn } from "@components/motion/FadeIn";
import { HoverLift } from "@components/motion/HoverLift";
import { RevealOnScroll } from "@components/motion/RevealOnScroll";

export function ReflectionsContent() {
  return (
    <div className="page-shell">
      <FadeIn>
        <h1 className="page-title font-syne">Reflections</h1>
        <p className="page-subtitle">Thoughts, ideas, and things I am figuring out.</p>
      </FadeIn>

      <RevealOnScroll>
        <HoverLift className="reflections-coming-soon">
          <div className="reflections-coming-soon__emoji">✍️</div>
          <h2 className="reflections-coming-soon__title font-syne">Coming soon</h2>
          <p className="reflections-coming-soon__text">
            I am working on my first reflections. Check back soon — ideas are brewing.
          </p>
          <div className="reflections-coming-soon__badge">
            <span className="reflections-coming-soon__dot" />
            <span>Writing in progress</span>
          </div>
        </HoverLift>
      </RevealOnScroll>
    </div>
  );
}
