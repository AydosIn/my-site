import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { ThemeProvider } from "@components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@data/site";
import { inter, syne } from "./fonts";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: "q2cNtrHN00O2fgyjc2Q4-pwMb2IOqgeFakf5irbE6xs",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("aydos-theme");document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="page-root">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
