// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bR` / export `mV`.

/** djb2-style hash rendered as base36. */
export function hashStringToBase36(value: string): string {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33 + value.charCodeAt(i)) % 4294967296;
  }
  return hash.toString(36);
}
