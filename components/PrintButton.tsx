"use client";

/** Opens the browser's print dialog, where "Save as PDF" turns the CV into a file. */
export function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="more" onClick={() => window.print()}>
      {children}
    </button>
  );
}
