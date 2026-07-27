// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Zw` — pure helper.

/** Title-case the last non-`root` path segment (underscores/hyphens → spaces). */
export function titleCaseLastPathSegment(pathValue: string): string | null {
  const last = pathValue
    .split("/")
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && part !== "root")
    .at(-1);
  if (last == null) return null;
  const normalized = last
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  if (normalized.length === 0) return null;
  return normalized[0].toUpperCase() + normalized.slice(1);
}
