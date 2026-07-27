// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `TQl` companion (optional string trim).

/** Trim; return null when empty/missing. */
export function trimToNullOptional(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed == null || trimmed.length === 0 ? null : trimmed;
}
