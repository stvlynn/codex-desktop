// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nEr` companion for export `i1`.

/** Normalize one accelerator token for display. */
export function normalizeAcceleratorToken(
  token: string,
  isMac: boolean,
  isLinux: boolean,
): string {
  const upper = token.trim();
  if (/^cmd(?:orctrl)?$/i.test(upper) || /^command$/i.test(upper)) {
    return isMac ? "⌘" : "Ctrl";
  }
  if (/^ctrl$/i.test(upper) || /^control$/i.test(upper)) {
    return isMac ? "⌃" : "Ctrl";
  }
  if (/^alt$/i.test(upper) || /^option$/i.test(upper)) {
    return isMac ? "⌥" : "Alt";
  }
  if (/^shift$/i.test(upper)) return isMac ? "⇧" : "Shift";
  if (/^meta$/i.test(upper) || /^super$/i.test(upper) || /^win$/i.test(upper)) {
    return isLinux ? "Super" : isMac ? "⌘" : "Win";
  }
  if (upper.length === 1) return upper.toUpperCase();
  return upper;
}
