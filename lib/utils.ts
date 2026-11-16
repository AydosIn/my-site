export function toSlug(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }
  
  export function excerptFromHtml(html: string, maxLength = 160): string {
    const text = html.replace(/<[^>]*>/g, "").trim();
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    return truncated.slice(0, truncated.lastIndexOf(" ")).concat("…");
  }


  
/** "2026-07-16" → "Jul 16, 2026". Empty input gives an empty string. */
export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
