"use client";

/** Opens the browser's print dialog, where "save as pdf" turns the cv into a file. */
export function PrintButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="text-button" onClick={() => window.print()}>
      {children}
    </button>
  );
}
