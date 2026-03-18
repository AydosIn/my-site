import { site } from "@data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/75 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <a href="/" className="font-semibold tracking-tight no-underline">
          {site.ownerName}
        </a>
        <nav className="flex gap-4 text-sm">
          <a href="/achievements" className="no-underline">Achievements</a>
          <a href="/books" className="no-underline">Books</a>
          <a href="/reflections" className="no-underline">Reflections</a>
          <a href="/contact" className="no-underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}