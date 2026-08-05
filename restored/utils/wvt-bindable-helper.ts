// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Mt`) / export `wvt`.

export type WvtBindableHelperPeers = {
  At: (...args: unknown[]) => unknown;
  Ze: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: WvtBindableHelperPeers | null = null;

/** Wire wvtBindableHelper peers once companions land. */
export function setWvtBindableHelperPeers(next: WvtBindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `wvt` / internal `Mt`.
 */
export function wvtBindableHelper() {
  if (peers == null) {
    throw new Error("wvtBindableHelper peers are not configured");
  }

  return peers.e(() => {
    (peers.Ze(), peers.At());
  });
}
