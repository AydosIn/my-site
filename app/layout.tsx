import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@data/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  verification: {
    google: "q2cNtrHN00O2fgyjc2Q4-pwMb2IOqgeFakf5irbE6xs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}