"use client";

import { m, useReducedMotion } from "framer-motion";
import { site, homeContactLinks } from "@data/site";

export function HomeContent() {
  const reduced = useReducedMotion();

  return (
    <div className="home-scroll">
      <section className="home-screen-quote">
        <div className="home-quote__wrap">
          <p className="home-quote__text">{site.homeQuote}</p>
        </div>
      </section>

      <section className="home-screen-details">
        <m.div
          className="home-details"
          initial={reduced ? false : { opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="home-details__line">
            <span className="home-details__label">current condition:</span> {site.homeStatus}
          </p>
          <p className="home-details__line">
            <span className="home-details__label">my location:</span> {site.homeLocation}
          </p>
          <p className="home-details__line">
            <span className="home-details__label">my contact:</span>{" "}
            {homeContactLinks.map((item, index) => (
              <span key={item.label}>
                {index > 0 ? " · " : null}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="home-details__link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="home-details__nolink">{item.label}</span>
                )}
              </span>
            ))}
          </p>
        </m.div>
      </section>

      <div className="home-scroll-spacer" aria-hidden="true" />
    </div>
  );
}
