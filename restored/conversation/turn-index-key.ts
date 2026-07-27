// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ips` / export `eS`.

/** Stable turn key, falling back to `turn-index-${index}`. */
export function turnIndexKey(turnId: string | null | undefined, index: number): string {
  return turnId ?? `turn-index-${index}`;
}
