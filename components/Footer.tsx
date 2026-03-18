import { site } from "@data/site";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-neutral-200">
      <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.ownerName}</div>
          <div className="flex gap-4">
            <a href="/achievements" className="no-underline">Achievements</a>
            <a href="/books" className="no-underline">Books</a>
            <a href="/reflections" className="no-underline">Reflections</a>
            <a href="/contact" className="no-underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}