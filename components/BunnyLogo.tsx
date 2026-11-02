"use client";

import { useRef } from "react";

/**
 * Hand-drawn version of the site icon (a bunny and a heart).
 * The heart beats; the ears tilt on hover (see .home-logo in globals.css).
 * Tapping the heart makes it hop onto the bunny's back: the bunny blushes and
 * wiggles its ears, then the heart hops home.
 */

const HEART =
  "M104 44 C 90 34, 86 24, 92 18 C 97 13, 103 16, 104 21 C 106 15, 113 13, 117 18 C 122 25, 116 35, 104 44 Z";
/** Where the heart lands on the bunny's back, relative to its usual spot (SVG units). */
const ON_BACK = "translate(-24px, 21px)";
const MINI_HEARTS = 3;

type Frames = Keyframe[];

async function play(el: Element | null, frames: Frames, options: KeyframeAnimationOptions) {
  if (el) await el.animate(frames, { fill: "forwards", ...options }).finished;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Crouch, jump in an arc, land with a squish. The way home mirrors it.
const hopThere: Frames = [
  { transform: "translate(0, 0) scale(1, 1)" },
  { transform: "translate(0, 2px) scale(1.14, 0.82)", offset: 0.18 },
  { transform: "translate(-8px, -14px) scale(0.9, 1.12)", offset: 0.45 },
  { transform: "translate(-17px, -10px) scale(0.95, 1.05)", offset: 0.62 },
  { transform: `${ON_BACK} scale(1, 1)`, offset: 0.84 },
  { transform: "translate(-24px, 23px) scale(1.18, 0.78)", offset: 0.92 },
  { transform: `${ON_BACK} scale(1, 1)` },
];

const hopHome: Frames = [
  { transform: `${ON_BACK} scale(1, 1)` },
  { transform: "translate(-24px, 23px) scale(1.14, 0.82)", offset: 0.16 },
  { transform: "translate(-15px, -12px) scale(0.9, 1.12)", offset: 0.45 },
  { transform: "translate(-6px, -12px) scale(0.95, 1.05)", offset: 0.62 },
  { transform: "translate(0, 0) scale(1, 1)", offset: 0.84 },
  { transform: "translate(0, 2px) scale(1.14, 0.82)", offset: 0.92 },
  { transform: "translate(0, 0) scale(1, 1)" },
];

// Two happy beats while it sits on the bunny's back.
const beatOnBack: Frames = [
  { transform: `${ON_BACK} scale(1)` },
  { transform: `${ON_BACK} scale(1.16)` },
  { transform: `${ON_BACK} scale(1)` },
  { transform: `${ON_BACK} scale(1.1)` },
  { transform: `${ON_BACK} scale(1)` },
];

const earWiggle: Frames = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(-7deg)" },
  { transform: "rotate(6deg)" },
  { transform: "rotate(-4deg)" },
  { transform: "rotate(3deg)" },
  { transform: "rotate(0deg)" },
];

/** A tiny heart floating up from the bunny's head. */
const floatUp = (i: number): Frames => [
  { transform: `translate(${-62 + i * 7}px, ${18 - i * 2}px) scale(0.12)`, opacity: 0 },
  { transform: `translate(${-64 + i * 7}px, ${6 - i * 2}px) scale(0.24)`, opacity: 1, offset: 0.35 },
  { transform: `translate(${-60 + i * 7}px, ${-14 - i * 3}px) scale(0.18)`, opacity: 0 },
];

export function BunnyLogo() {
  const svgRef = useRef<SVGSVGElement>(null);
  const busy = useRef(false);

  async function hop() {
    const svg = svgRef.current;
    if (!svg || busy.current) return;
    busy.current = true;
    svg.dataset.busy = "";

    const heart = svg.querySelector(".home-logo__hop");
    const ears = svg.querySelector(".home-logo__ears");
    const blush = svg.querySelector(".home-logo__blush");
    const minis = [...svg.querySelectorAll(".home-logo__mini")];

    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // No jumping: the bunny just blushes while the heart glows.
        await Promise.all([
          play(blush, [{ opacity: 0 }, { opacity: 0.95 }, { opacity: 0.95 }, { opacity: 0 }], { duration: 1400 }),
          play(heart, [{ opacity: 1 }, { opacity: 0.4 }, { opacity: 1 }], { duration: 1400, easing: "ease-in-out" }),
        ]);
        return;
      }

      await play(heart, hopThere, { duration: 820, easing: "linear" });
      play(blush, [{ opacity: 0, transform: "scale(0.4)" }, { opacity: 0.95, transform: "scale(1)" }], {
        duration: 300,
        easing: "ease-out",
      });
      play(ears, earWiggle, { duration: 900, easing: "ease-in-out" });
      minis.forEach((mini, i) =>
        wait(150 + i * 220).then(() => play(mini, floatUp(i), { duration: 1000, easing: "ease-out" })),
      );
      await play(heart, beatOnBack, { duration: 900, easing: "ease-in-out" });
      await wait(250);
      play(blush, [{ opacity: 0.95 }, { opacity: 0 }], { duration: 500, easing: "ease-in" });
      await play(heart, hopHome, { duration: 820, easing: "linear" });
    } finally {
      svg.querySelectorAll("*").forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
      delete svg.dataset.busy;
      busy.current = false;
    }
  }

  return (
    <div className="home-logo-wrap">
      <svg ref={svgRef} className="home-logo" viewBox="0 0 132 132" role="img" aria-label="a bunny and a heart">
        <g className="home-logo__ears">
          <path
            d="M50 60 C 42 40, 40 20, 47 10 C 52 18, 56 38, 58 56"
            fill="var(--bunny)"
            stroke="var(--bunny-line)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 58 C 60 38, 64 22, 74 14 C 76 26, 72 42, 66 58"
            fill="var(--bunny)"
            stroke="var(--bunny-line)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M49 22 C 50 32, 52 42, 54 50" fill="none" stroke="var(--bunny-shade)" strokeWidth="2" strokeLinecap="round" />
          <path d="M70 24 C 67 34, 65 42, 63 50" fill="none" stroke="var(--bunny-shade)" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path
          d="M30 76 C 22 66, 30 54, 44 54 C 56 54, 64 62, 66 70 C 74 64, 92 64, 102 76 C 112 88, 110 106, 100 114
             L 72 116 C 70 110, 64 108, 58 112 L 46 114 C 40 112, 42 104, 50 102 C 44 96, 40 90, 38 86 C 32 84, 28 82, 30 76 Z"
          fill="var(--bunny)"
          stroke="var(--bunny-line)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <circle cx="106" cy="98" r="6" fill="var(--bunny)" stroke="var(--bunny-line)" strokeWidth="2.2" />
        <ellipse className="home-logo__blush" cx="37" cy="77" rx="4.6" ry="2.6" fill="var(--blush)" opacity="0" />
        <circle cx="42" cy="68" r="2.6" fill="var(--bunny-line)" />
        <circle cx="30.5" cy="74" r="1.8" fill="var(--bunny-line)" />
        <path
          d="M24 120 C 50 117, 84 122, 116 118"
          fill="none"
          stroke="var(--dim)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="3 5"
        />
        {/* Drawn after the bunny so it can land on its back. */}
        <g className="home-logo__heart">
          <g className="home-logo__hop">
            <path d={HEART} fill="var(--heart)" stroke="var(--bunny-line)" strokeWidth="2.2" strokeLinejoin="round" />
          </g>
        </g>
        {Array.from({ length: MINI_HEARTS }, (_, i) => (
          <path
            key={i}
            className="home-logo__mini"
            d={HEART}
            fill="var(--heart)"
            stroke="var(--bunny-line)"
            strokeWidth="4"
            strokeLinejoin="round"
            opacity="0"
          />
        ))}
      </svg>
      <button type="button" className="home-logo__tap" onClick={hop} aria-label="give the bunny some love" />
    </div>
  );
}
