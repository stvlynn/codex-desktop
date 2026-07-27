// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uye`) / export `nht`.

export type BindNodeReplAccessPeers = {
  Hye: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindNodeReplAccessPeers | null = null;

/** Wire bindNodeReplAccess peers once companions land. */
export function setBindNodeReplAccessPeers(next: BindNodeReplAccessPeers): void {
  peers = next;
}

/**
 * Bundle export `nht` / internal `Uye`.
 */
export function bindNodeReplAccess() {
  if (peers == null) {
    throw new Error("bindNodeReplAccess peers are not configured");
  }

  return peers.e(() => {
    Hye = `node_repl`;
  });
}
