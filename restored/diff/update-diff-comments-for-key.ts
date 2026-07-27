// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `Bpo`) / export `bj`.

export type UpdateDiffCommentsForKeyPeers = {
  emptyComments: unknown[];
  updateStore: (
    store: unknown,
    key: string,
    updater: (
      prev: Record<string, unknown[]> | undefined,
    ) => Record<string, unknown[]> | undefined,
  ) => void;
};

let peers: UpdateDiffCommentsForKeyPeers | null = null;

/** Wire updateDiffCommentsForKey peers once companions land. */
export function setUpdateDiffCommentsForKeyPeers(
  next: UpdateDiffCommentsForKeyPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bj` / internal `Bpo`.
 * Update or clear diff comments for a conversation key.
 */
export function updateDiffCommentsForKey(
  store: unknown,
  commentKey: string,
  next: unknown[] | ((prev: unknown[]) => unknown[]),
): void {
  if (peers == null) {
    throw new Error("UpdateDiffCommentsForKey peers are not configured");
  }
  peers.updateStore(store, "diff_comments", (prev) => {
    const current = prev?.[commentKey] ?? peers!.emptyComments;
    const value = typeof next === "function" ? next(current) : next;
    if (value === current) return prev;
    if (value.length > 0) return { ...prev, [commentKey]: value };
    if (prev?.[commentKey] == null) return prev;
    const copy = { ...prev };
    delete copy[commentKey];
    return Object.keys(copy).length === 0 ? undefined : copy;
  });
}
