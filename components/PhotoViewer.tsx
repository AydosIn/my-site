"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import type { Photo } from "@data/photos";
import { MotionProvider } from "@components/motion/MotionProvider";
import { MOTION } from "@lib/motion";

const SWIPE_THRESHOLD = 40;
const IMAGE_SIZES = "(max-width: 640px) 100vw, 480px";

/** next/image can't optimise SVGs, so the placeholders skip optimisation. */
const isSvg = (src: string) => src.endsWith(".svg");

function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

/** One photo at a time, Instagram-post style. Stops at both ends instead of looping. */
export function PhotoViewer({ photos }: { photos: Photo[] }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion();

  const photo = photos[index];
  const next = photos[index + 1];
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  const go = useCallback(
    (step: 1 | -1) => {
      setState(([current]) => {
        const target = current + step;
        if (target < 0 || target >= photos.length) return [current, 0];
        return [target, step];
      });
    },
    [photos.length],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || isTyping(event.target)) return;
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    go(dx < 0 ? 1 : -1);
  }

  const slide = {
    enter: (dir: number) => ({ opacity: 0, x: reduced ? 0 : `${dir * 100}%` }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduced ? 0 : `${dir * -100}%` }),
  };

  return (
    <MotionProvider>
      <section className="photo-viewer" aria-roledescription="carousel" aria-label="photos">
        <div
          className="photo-viewer__frame"
          onTouchStart={(event) => {
            touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
          }}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <m.div
              key={photo.id}
              className="photo-viewer__slide"
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={MOTION.medium}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={IMAGE_SIZES}
                priority={index === 0}
                unoptimized={isSvg(photo.src)}
                className="photo-viewer__img"
              />
            </m.div>
          </AnimatePresence>

          {/* Loads the next photo early so the next arrow press is instant. */}
          {next && (
            <div className="photo-viewer__preload" aria-hidden="true">
              <Image
                src={next.src}
                alt=""
                fill
                sizes={IMAGE_SIZES}
                unoptimized={isSvg(next.src)}
              />
            </div>
          )}

          {hasPrev && (
            <button
              type="button"
              className="photo-viewer__arrow photo-viewer__arrow--prev"
              onClick={() => go(-1)}
              aria-label="previous photo"
            >
              &lt;
            </button>
          )}
          {hasNext && (
            <button
              type="button"
              className="photo-viewer__arrow photo-viewer__arrow--next"
              onClick={() => go(1)}
              aria-label="next photo"
            >
              &gt;
            </button>
          )}
        </div>

        <div className="photo-viewer__bar">
          <ol className="photo-viewer__dots" aria-hidden="true">
            {photos.map((item, i) => (
              <li key={item.id} data-active={i === index || undefined} />
            ))}
          </ol>
          <p className="photo-viewer__count" aria-live="polite">
            {index + 1} / {photos.length}
          </p>
        </div>

        {(photo.place || photo.date) && (
          <p className="photo-viewer__meta">
            {[photo.place, photo.date].filter(Boolean).join(" · ")}
          </p>
        )}
        {photo.caption && <p className="photo-viewer__caption">{photo.caption}</p>}
        {!hasNext && photos.length > 1 && (
          <p className="photo-viewer__end">— end of photos —</p>
        )}
      </section>
    </MotionProvider>
  );
}
