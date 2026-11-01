"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domMax,
  m,
  useMotionValue,
  useTransform,
  type PanInfo,
  type Transition,
  type Variants,
} from "framer-motion";
import type { Photo } from "@data/photos";
import { useFadeNavigate } from "@components/FadeLink";

/**
 * /photos as a pile of instants: the photo on top is flicked away (drag, tap, arrow
 * button or ← →) to reveal the one beneath it, and can be brought back the same way.
 */

/** Cards visible in the pile at once, top card included. */
const PILE_DEPTH = 3;
/** Each photo's resting angle while it lies in the pile. The top card always straightens. */
const TILTS = [-4, 5, -3.5, 4.5, -5, 3.5];
/** How far down each card under the top one sits, in px, so the pile shows its edges. */
const PEEK = 12;
/** A drag counts as a swipe past this distance (px) or flick speed (px/s). */
const SWIPE_OFFSET = 90;
const SWIPE_VELOCITY = 500;
/** Taps on the left part of the photo go back, like Instagram stories. */
const TAP_BACK_ZONE = 0.35;
/** Pointer travel (px) above which a press is a drag, not a tap. */
const TAP_SLOP = 6;
/** Like Instagram, the dot indicator shows at most this many dots and slides along. */
const MAX_DOTS = 5;
const CARD_SIZES = "(max-width: 480px) 92vw, 400px";

const SETTLE: Transition = { type: "spring", visualDuration: 0.45, bounce: 0.18 };
const FLING: Transition = { type: "spring", visualDuration: 0.5, bounce: 0 };

type Step = -1 | 1;
type Dir = Step | 0;
type CardContext = { dir: Dir; depth?: number; tilt?: number };

const isSvg = (src: string) => src.endsWith(".svg");
const tiltOf = (photoIndex: number) => TILTS[photoIndex % TILTS.length];
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

/** Far enough left that a card centred on screen is completely out of view. */
const offscreenLeft = () => -(window.innerWidth / 2 + 340);

function restingPose(depth: number, tilt: number) {
  return {
    x: 0,
    y: depth * PEEK,
    scale: 1 - depth * 0.03,
    rotate: depth === 0 ? 0 : tilt,
    opacity: 1,
  };
}

const cardVariants: Variants = {
  // Going back, the previous photo returns from where it was flicked to.
  // Going forward, a new photo slides in at the bottom of the pile.
  enter: ({ dir, depth = 0, tilt = 0 }: CardContext) =>
    dir < 0
      ? { x: offscreenLeft(), y: -24, rotate: -14, scale: 1, opacity: 1 }
      : { ...restingPose(depth, tilt), y: depth * PEEK + 24, scale: 0.85, opacity: 0 },
  // Going forward, the top photo is flicked off to the left, keeping any swipe speed.
  // Going back, the bottom photo of the pile quietly drops away.
  exit: ({ dir }: CardContext) =>
    dir > 0
      ? { x: offscreenLeft(), y: -24, rotate: -14, transition: FLING }
      : { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

function Instant({
  photo,
  photoIndex,
  depth,
  total,
  dir,
  priority,
  onSwipe,
  onTap,
}: {
  photo: Photo;
  photoIndex: number;
  depth: number;
  total: number;
  dir: Dir;
  priority: boolean;
  onSwipe: (info: PanInfo) => void;
  onTap: (clientX: number) => void;
}) {
  const x = useMotionValue(0);
  // While dragged, the card leans into the movement like a photo held by its edge.
  const lean = useTransform(x, [-320, 0, 320], [-9, 0, 9]);
  const pressX = useRef<number | null>(null);
  const isTop = depth === 0;
  const tilt = tiltOf(photoIndex);

  return (
    <m.div
      className="instant"
      data-photo={photo.id}
      data-depth={depth}
      custom={{ dir, depth, tilt } satisfies CardContext}
      variants={cardVariants}
      initial="enter"
      animate={restingPose(depth, tilt)}
      exit="exit"
      transition={SETTLE}
      // Earlier photos lie on top, so a card being flicked away stays above the rest.
      style={{ x, zIndex: total - photoIndex }}
      // Every card is draggable; only the top one receives pointer events (see CSS).
      drag="x"
      dragSnapToOrigin
      whileDrag={{ scale: 1.02 }}
      onDragEnd={(_, info) => onSwipe(info)}
      onPointerDown={(event) => {
        pressX.current = event.clientX;
      }}
      onClick={(event) => {
        const start = pressX.current;
        pressX.current = null;
        if (!isTop || start === null || Math.abs(event.clientX - start) > TAP_SLOP) return;
        onTap(event.clientX);
      }}
      aria-hidden={!isTop || undefined}
    >
      {/* Plays the opening fan-out: cards start squared up behind the top photo. */}
      <div
        className="instant__intro"
        style={
          {
            "--intro-rotate": `${isTop ? 0 : -tilt}deg`,
            "--intro-y": `${-depth * PEEK}px`,
          } as React.CSSProperties
        }
      >
        <m.div className="instant__card" style={{ rotate: lean }}>
          <Image
            src={photo.src}
            alt={isTop ? photo.alt : ""}
            fill
            sizes={CARD_SIZES}
            priority={priority}
            unoptimized={isSvg(photo.src)}
            draggable={false}
            className="instant__img"
            data-fit={photo.fit}
          />
        </m.div>
      </div>
    </m.div>
  );
}

/** The current photo's colours, blurred into the background like light off a print. */
function Glow({ photo }: { photo: Photo }) {
  return (
    <div className="instants-glow" aria-hidden="true">
      <AnimatePresence initial={false}>
        <m.div
          key={photo.id}
          className="instants-glow__layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={photo.src} alt="" fill sizes="48px" unoptimized={isSvg(photo.src)} />
        </m.div>
      </AnimatePresence>
    </div>
  );
}

/** Instagram-style dots: a short window that slides along, with smaller dots at cut-off edges. */
function Dots({ count, index }: { count: number; index: number }) {
  const start = Math.min(Math.max(index - Math.floor(MAX_DOTS / 2), 0), Math.max(count - MAX_DOTS, 0));
  const end = Math.min(start + MAX_DOTS, count);
  const visible = Array.from({ length: end - start }, (_, i) => start + i);

  return (
    <ol className="instants__dots" aria-hidden="true">
      <AnimatePresence initial={false} mode="popLayout">
        {visible.map((i) => (
          <m.li
            key={i}
            layout="position"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            data-active={i === index || undefined}
            data-edge={(i === start && start > 0) || (i === end - 1 && end < count) || undefined}
          />
        ))}
      </AnimatePresence>
    </ol>
  );
}

export function PhotoViewer({ photos }: { photos: Photo[] }) {
  const [{ index, dir }, setNav] = useState<{ index: number; dir: Dir }>({ index: 0, dir: 0 });
  const deckRef = useRef<HTMLDivElement>(null);
  const fadeTo = useFadeNavigate();

  const count = photos.length;
  const photo = photos[index];

  // At either end of the pile the top photo gives a small shake instead of doing nothing.
  const nudge = useCallback(
    (step: Step) => {
      if (prefersReducedMotion()) return;
      const card = deckRef.current?.querySelector<HTMLElement>(
        `[data-photo="${CSS.escape(photo.id)}"] .instant__card`,
      );
      card?.animate(
        [
          { translate: "0 0" },
          { translate: `${-12 * step}px 0` },
          { translate: `${8 * step}px 0` },
          { translate: `${-3 * step}px 0` },
          { translate: "0 0" },
        ],
        { duration: 400, easing: "ease-out" },
      );
    },
    [photo.id],
  );

  const go = useCallback(
    (step: Step) => {
      const target = index + step;
      if (target < 0 || target >= count) {
        nudge(step);
        return;
      }
      setNav({ index: target, dir: step });
    },
    [index, count, nudge],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || isTyping(event.target)) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "Escape") {
        fadeTo("/");
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go, fadeTo]);

  function onSwipe({ offset, velocity }: PanInfo) {
    if (offset.x < -SWIPE_OFFSET || velocity.x < -SWIPE_VELOCITY) go(1);
    else if (offset.x > SWIPE_OFFSET || velocity.x > SWIPE_VELOCITY) go(-1);
  }

  function onTap(clientX: number) {
    const rect = deckRef.current?.getBoundingClientRect();
    if (!rect) return;
    go(clientX < rect.left + rect.width * TAP_BACK_ZONE ? -1 : 1);
  }

  // Top card first. Stacking comes from z-index, so moving through the pile only ever
  // adds or removes cards at the ends: React never has to move a card in the DOM,
  // which would remount it mid-animation and freeze it in its old pose.
  const pile = photos
    .slice(index, index + PILE_DEPTH)
    .map((item, depth) => ({ item, depth, photoIndex: index + depth }));
  const overlayZ = { zIndex: count + 1 };
  const hasMany = count > 1;

  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <Glow photo={photo} />

        <section className="instants" aria-roledescription="carousel" aria-label="photos">
          <div ref={deckRef} className="instants__deck" data-intro={dir === 0 || undefined}>
            <AnimatePresence initial={false} custom={{ dir } satisfies CardContext}>
              {pile.map(({ item, depth, photoIndex }) => (
                <Instant
                  key={item.id}
                  photo={item}
                  photoIndex={photoIndex}
                  depth={depth}
                  total={count}
                  dir={dir}
                  priority={photoIndex === 0}
                  onSwipe={onSwipe}
                  onTap={onTap}
                />
              ))}
            </AnimatePresence>

            {hasMany && (
              <>
                <p className="instants__count" style={overlayZ} aria-hidden="true">
                  {index + 1}/{count}
                </p>
                <button
                  type="button"
                  className="instants__arrow instants__arrow--prev"
                  style={overlayZ}
                  onClick={() => go(-1)}
                  disabled={index === 0}
                  aria-label="previous photo"
                >
                  <Chevron dir="left" />
                </button>
                <button
                  type="button"
                  className="instants__arrow instants__arrow--next"
                  style={overlayZ}
                  onClick={() => go(1)}
                  disabled={index === count - 1}
                  aria-label="next photo"
                >
                  <Chevron dir="right" />
                </button>
              </>
            )}
          </div>

          {hasMany && <Dots count={count} index={index} />}

          <p className="sr-only" aria-live="polite">
            {`photo ${index + 1} of ${count}${photo.caption ? `: ${photo.caption}` : ""}`}
          </p>

          <div className="instants__text">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={photo.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {photo.caption && <p className="instants__caption">{photo.caption}</p>}
                {(photo.place || photo.date) && (
                  <p className="instants__meta">{[photo.place, photo.date].filter(Boolean).join(" · ")}</p>
                )}
              </m.div>
            </AnimatePresence>
          </div>

          {/* Fades out after the first move but keeps its space, so nothing jumps. */}
          {hasMany && (
            <p
              className="instants__hint"
              data-hidden={dir !== 0 || undefined}
              aria-hidden={dir !== 0 || undefined}
            >
              <span className="instants__hint--pointer">drag, tap, or use the arrow keys</span>
              <span className="instants__hint--touch">swipe or tap</span>
            </p>
          )}
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}
