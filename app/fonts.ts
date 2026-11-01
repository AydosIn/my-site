import { JetBrains_Mono, Bitcount_Grid_Double, Neucha, Roboto_Condensed } from "next/font/google";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const bitcountGrid = Bitcount_Grid_Double({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

/** Hand-drawn headings on the home page. */
export const neucha = Neucha({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

/** Body text on the home page. */
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-condensed",
  display: "swap",
});
