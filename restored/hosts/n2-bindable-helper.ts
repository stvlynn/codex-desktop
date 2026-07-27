// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yD`) / export `N2`.

export type BindN2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
  ug: (...args: unknown[]) => unknown;
};

let peers: BindN2BindableHelperPeers | null = null;

/** Wire bindN2BindableHelper peers once companions land. */
export function setBindN2BindableHelperPeers(next: BindN2BindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `N2` / internal `yD`.
 */
export function bindN2BindableHelper() {
  if (peers == null) {
    throw new Error("bindN2BindableHelper peers are not configured");
  }

  return peers.JE(peers.ug);
}
