import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@data/site";
import { themeInitScript } from "@components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.ownerName}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
  },
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
    // suppressHydrationWarning: themeInitScript may set data-theme on <html> before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
