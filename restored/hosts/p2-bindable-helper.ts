// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xnr`) / export `P2`.

export type BindP2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
  turnId: (...args: unknown[]) => unknown;
  ug: (...args: unknown[]) => unknown;
};

let peers: BindP2BindableHelperPeers | null = null;

/** Wire bindP2BindableHelper peers once companions land. */
export function setBindP2BindableHelperPeers(
  next: BindP2BindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `P2` / internal `Xnr`.
 */
export function bindP2BindableHelper() {
  if (peers == null) {
    throw new Error("bindP2BindableHelper peers are not configured");
  }

  return peers.JE((e) => peers.ug(e)?.turnId ?? null);
}
