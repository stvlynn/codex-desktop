// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kw` / export `c5` (simplified title-case without acronym tables).

export type TitleCaseStyle = "title" | "sentence";

/** Title-case a slug/segment string (best-effort readable restore). */
export function titleCaseSegment(
  value: string,
  options: { style?: TitleCaseStyle } = {},
): string {
  const style = options.style ?? "title";
  return value
    .replace(/[_-]+/g, " ")
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const lower = part.toLowerCase();
      if (style === "title") {
        return lower.replace(/^[a-z]/, (ch) => ch.toUpperCase());
      }
      return index === 0
        ? lower.replace(/^[a-z]/, (ch) => ch.toUpperCase())
        : lower;
    })
    .join(" ");
}
