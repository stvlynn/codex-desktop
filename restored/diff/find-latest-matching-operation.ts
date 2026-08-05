// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fJs`) / export `zg`.

export type FindLatestMatchingOperationPeers = {
  dJs: (...args: unknown[]) => unknown;
};

let peers: FindLatestMatchingOperationPeers | null = null;

/** Wire findLatestMatchingOperation peers once companions land. */
export function setFindLatestMatchingOperationPeers(
  next: FindLatestMatchingOperationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zg` / internal `fJs`.
 */
export function findLatestMatchingOperation(e: unknown) {
  if (peers == null) {
    throw new Error("findLatestMatchingOperation peers are not configured");
  }

  let { operations: t } = peers.dJs();
  if (e == null) return null;
  for (let n = t.length - 1; n >= 0; --n) {
    let r = t[n];
    if (r.sourceConversationId === e || r.targetConversationId === e) return r;
  }
  return null;
}
