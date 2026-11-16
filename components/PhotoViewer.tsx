"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@data/photos";

type Pose = { tx: number; ty: number; rot: number; s: number; shade: number; o: number };

// The photo on top, then the next two peeking out behind it at a slight angle.
const BEHIND: Pose[] = [
  { tx: 0, ty: 0, rot: 0, s: 1, shade: 0, o: 1 },
  { tx: 14, ty: 8, rot: 3.5, s: 0.95, shade: 0.12, o: 1 },
  { tx: -12, ty: 12, rot: -3, s: 0.9, shade: 0.22, o: 1 },
];
// A photo already seen has flown off to the left; one further down waits out of sight.
const GONE: Pose = { tx: -520, ty: 30, rot: -14, s: 0.96, shade: 0, o: 0 };
const HIDDEN: Pose = { tx: 0, ty: 16, rot: 0, s: 0.86, shade: 0.3, o: 0 };

/** How far a photo has to be dragged before letting go moves to the next one. */
const SWIPE_PX = 70;

function poseFor(depth: number): Pose {
  if (depth < 0) return GONE;
  return BEHIND[depth] ?? HIDDEN;
}

function cardStyle(photo: Photo, depth: number): React.CSSProperties {
  const pose = poseFor(depth);
  return {
    "--ratio": photo.width / photo.height,
    "--tx": `${pose.tx}px`,
    "--ty": `${pose.ty}px`,
    "--rot": `${pose.rot}deg`,
    "--s": pose.s,
    "--shade": pose.shade,
    "--o": pose.o,
    zIndex: depth < 0 ? 50 : 40 - depth,
  } as React.CSSProperties;
}

/** One photo at a time, whole and uncropped, on a small pile of the ones still to come. */
export function PhotoViewer({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const drag = useRef<{ id: number; x: number; dx: number } | null>(null);
  const last = photos.length - 1;

  const go = useCallback(
    (step: number) => setIndex((i) => Math.max(0, Math.min(last, i + step))),
    [last],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement && e.target.closest("input, textarea, select")) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { id: e.pointerId, x: e.clientX, dx: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.setAttribute("data-dragging", "");
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const raw = e.clientX - d.x;
    // Past the first or last photo the pull gets heavy, so it is clear there is nothing more.
    const atEdge = (raw > 0 && index === 0) || (raw < 0 && index === last);
    d.dx = atEdge ? raw * 0.25 : raw;
    e.currentTarget.style.setProperty("--tx", `${d.dx}px`);
    e.currentTarget.style.setProperty("--rot", `${d.dx / 24}deg`);
  }

  function onPointerEnd(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    const card = e.currentTarget;
    card.removeAttribute("data-dragging");
    // Hand the pose back to React's values, which the next render may change.
    card.style.setProperty("--tx", "0px");
    card.style.setProperty("--rot", "0deg");
    if (d.dx < -SWIPE_PX) go(1);
    else if (d.dx > SWIPE_PX) go(-1);
  }

  const current = photos[index];

  return (
    <section className="viewer" aria-roledescription="carousel" aria-label="Photos">
      <div className="viewer__row">
        <button
          type="button"
          className="viewer__arrow viewer__arrow--prev"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="viewer__stage">
          {photos.map((photo, i) => {
            const depth = i - index;
            const top = depth === 0;
            return (
              <div
                key={photo.id}
                className="viewer__card"
                style={cardStyle(photo, depth)}
                data-top={top || undefined}
                aria-hidden={!top}
                onPointerDown={top ? onPointerDown : undefined}
                onPointerMove={top ? onPointerMove : undefined}
                onPointerUp={top ? onPointerEnd : undefined}
                onPointerCancel={top ? onPointerEnd : undefined}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 640px"
                  className="viewer__img"
                  draggable={false}
                  priority={i <= 1}
                />
                {top && (
                  <span className="viewer__count">
                    {index + 1}/{photos.length}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="viewer__arrow viewer__arrow--next"
          onClick={() => go(1)}
          disabled={index === last}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <ul className="viewer__dots" aria-hidden="true">
        {photos.map((photo, i) => (
          <li key={photo.id} data-on={i === index || undefined} />
        ))}
      </ul>

      <p className="viewer__caption label" aria-live="polite">
        {[`${index + 1} of ${photos.length}`, current.caption, current.place, current.date]
          .filter(Boolean)
          .join(" · ")}
      </p>
      <p className="viewer__hint viewer__hint--keys label">
        Drag the photo, or use <kbd>←</kbd> <kbd>→</kbd>
      </p>
      <p className="viewer__hint viewer__hint--touch label">Swipe to see the next one</p>
    </section>
  );
}
