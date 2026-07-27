// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `TQl` for `qZl` / export `ta`.

/** Trim a string; empty / nullish → null. */
export function trimToNull(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed == null || trimmed.length === 0 ? null : trimmed;
}
