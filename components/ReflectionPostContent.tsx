"use client";

import Link from "next/link";
import { FadeIn } from "@components/motion/FadeIn";
import { RevealOnScroll } from "@components/motion/RevealOnScroll";
import { MotionArrowLink } from "@components/motion/NavLink";

type Props = {
  title: string;
  date: string;
  html: string;
};

export function ReflectionPostContent({ title, date, html }: Props) {
  return (
    <div className="page-shell reflection-post">
      <FadeIn>
        <h1 className="reflection-post__title">{title}</h1>
        <div className="reflection-post__date">{date}</div>
      </FadeIn>

      <RevealOnScroll>
        <div className="reflection-post__body" dangerouslySetInnerHTML={{ __html: html }} />
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <MotionArrowLink href="/reflections" className="reflection-post__back">
          ← Back to Reflections
        </MotionArrowLink>
      </RevealOnScroll>
    </div>
  );
}
