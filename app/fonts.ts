import { JetBrains_Mono, Neucha, Roboto_Condensed } from "next/font/google";

/** Only for small details: dates, tags, handles. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Hand-drawn headings, everywhere. */
export const neucha = Neucha({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

/** Body text, everywhere. */
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-condensed",
  display: "swap",
});
