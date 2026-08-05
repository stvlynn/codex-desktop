// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wY` / export `sE`.

/** Normalize locale-like tags (`en_US` → `en-us`). */
export function normalizeLocaleTag(
  value: string | null | undefined,
): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.replace(/_/gu, "-").toLowerCase() : null;
}
