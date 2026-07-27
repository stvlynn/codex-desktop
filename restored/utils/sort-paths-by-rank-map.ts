// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `j4n` / export `X3`.

/** Sort path-bearing items by descending rank from `ranks` (unknowns last). */
export function sortPathsByRankMap<T extends { path: string }>(
  items: T[],
  ranks: Map<string, number>,
): T[] {
  return [...items].sort((a, b) => {
    const ra = ranks.get(a.path);
    const rb = ranks.get(b.path);
    return ra == null ? (rb == null ? 0 : 1) : rb == null ? -1 : rb - ra;
  });
}
