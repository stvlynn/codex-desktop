// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `wY` — pure helper.

/** Trim, lower-case, and rewrite `_` to `-`; empty → null. */
export function normalizeUnderscoreToKebab(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.replace(/_/g, "-").toLowerCase() : null;
}
