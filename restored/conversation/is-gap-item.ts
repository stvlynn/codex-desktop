// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ops` / export `Zx`.

/** True when value is a turn-list gap sentinel. */
export function isGapItem(value: object): boolean {
  return "type" in value && (value as { type?: unknown }).type === "gap";
}
