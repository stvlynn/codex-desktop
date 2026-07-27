// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xet` / export `hlt`.

/** Append trimmed text with a single separating space when needed. */
export function appendTrimmedWithSpace(base: string, addition: string): string {
  const trimmed = addition.trim();
  return trimmed.length === 0
    ? base
    : base.length === 0 || /\s$/u.test(base)
      ? `${base}${trimmed}`
      : `${base} ${trimmed}`;
}
