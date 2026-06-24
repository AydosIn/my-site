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
  openGraph: {
    siteName: site.searchSiteName,
    type: "website",
    url: site.url,
  },
  verification: {
    google: "q2cNtr.gbapal00O2fgyjc2Q4-pwMb2IOqgeFakf5irbE6xs",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.searchSiteName,
  alternateName: [site.ownerName, "aydosinyatdinov.dev"],
  url: site.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${bitcountGrid.variable} ${pressStart.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="page-root">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
