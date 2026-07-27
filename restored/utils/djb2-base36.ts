// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bR` — djb2 hash to base36 (used by activity-item key allocation).

export function djb2Base36(value: string): string {
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 33 + value.charCodeAt(i)) % 4294967296;
  }
  return hash.toString(36);
}
