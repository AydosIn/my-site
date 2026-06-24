"use client";

import { site } from "@data/site";
import { HomeBottomInfo } from "@components/HomeBottomInfo";

export function HomeContent() {
  return (
    <div className="home-scroll">
      <section className="home-screen-quote">
        <div className="home-quote__wrap">
          <p className="home-quote__text">{site.homeQuote}</p>
        </div>
      </section>

      <div className="home-scroll-spacer" aria-hidden="true" />

      <HomeBottomInfo />
    </div>
  );
}
