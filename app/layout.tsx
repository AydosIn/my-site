import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { site } from "@data/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}