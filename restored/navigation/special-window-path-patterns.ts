// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qHn` companion for export `N5` (path-to-regexp match deferred to prefix/exact).

export const SPECIAL_WINDOW_PATH_PATTERNS = [
  "/global-dictation",
  "/global-dictation/",
  "/hotkey-window",
  "/hotkey-window/",
] as const;

/** Loose match for special overlay/dictation/hotkey window paths. */
export function isSpecialWindowPath(value: string | null | undefined): boolean {
  if (!value) return false;
  return SPECIAL_WINDOW_PATH_PATTERNS.some(
    (pattern) =>
      value === pattern.replace(/\/$/, "") ||
      value === pattern ||
      value.startsWith(pattern.endsWith("/") ? pattern : `${pattern}/`),
  );
}
