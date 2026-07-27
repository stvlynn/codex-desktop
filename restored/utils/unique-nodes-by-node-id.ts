// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `T8s` / export `Am`.

/** Flatten nested `items` and keep first occurrence of each `nodeId`. */
export function uniqueNodesByNodeId<T extends { nodeId: string }>(
  groups: Array<{ items: T[] }> | null | undefined,
): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const group of groups ?? []) {
    for (const item of group.items) {
      if (seen.has(item.nodeId)) continue;
      seen.add(item.nodeId);
      out.push(item);
    }
  }
  return out;
}
