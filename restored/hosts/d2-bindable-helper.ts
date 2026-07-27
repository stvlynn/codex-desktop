// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ynr`) / export `D2`.

export type BindD2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
  Utr: (...args: unknown[]) => unknown;
  sg: (...args: unknown[]) => unknown;
};

let peers: BindD2BindableHelperPeers | null = null;

/** Wire bindD2BindableHelper peers once companions land. */
export function setBindD2BindableHelperPeers(next: BindD2BindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `D2` / internal `Ynr`.
 */
export function bindD2BindableHelper() {
  if (peers == null) {
    throw new Error("bindD2BindableHelper peers are not configured");
  }

  return peers.JE(e => peers.Utr(peers.sg(e)).cwd);
}
