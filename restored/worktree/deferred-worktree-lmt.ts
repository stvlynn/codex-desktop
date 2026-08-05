// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Exe`) / export `Lmt`.

export type BindDeferredWorktreeLmtPeers = {
  Txe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iu: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWorktreeLmtPeers | null = null;

/** Wire bindDeferredWorktreeLmt peers once companions land. */
export function setBindDeferredWorktreeLmtPeers(
  next: BindDeferredWorktreeLmtPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Lmt` / internal `Exe`.
 */
export function bindDeferredWorktreeLmt() {
  if (peers == null) {
    throw new Error("bindDeferredWorktreeLmt peers are not configured");
  }

  return peers.e(() => {
    ((iu = `durable`), (Txe = `remote-control`));
  });
}
