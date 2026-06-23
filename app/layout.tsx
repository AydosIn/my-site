import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@data/site";
import { jetbrainsMono, bitcountGrid, pressStart } from "./fonts";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: "q2cNtr.gbapal00O2fgyjc2Q4-pwMb2IOqgeFakf5irbE6xs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${bitcountGrid.variable} ${pressStart.variable}`}>
      <body>
        <Navbar />
        <main className="page-root">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
