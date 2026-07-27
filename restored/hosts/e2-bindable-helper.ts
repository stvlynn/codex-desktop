// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jnr`) / export `E2`.

export type BindE2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
  Utr: (...args: unknown[]) => unknown;
  sg: (...args: unknown[]) => unknown;
};

let peers: BindE2BindableHelperPeers | null = null;

/** Wire bindE2BindableHelper peers once companions land. */
export function setBindE2BindableHelperPeers(next: BindE2BindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `E2` / internal `Jnr`.
 */
export function bindE2BindableHelper() {
  if (peers == null) {
    throw new Error("bindE2BindableHelper peers are not configured");
  }

  return peers.JE(e => peers.Utr(peers.sg(e)).diff);
}
