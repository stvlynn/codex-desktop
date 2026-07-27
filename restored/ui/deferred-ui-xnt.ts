// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nqt`) / export `Xnt`.

export type BindDeferredUiXntPeers = {
  Mqt: (...args: unknown[]) => unknown;
  WGt: (...args: unknown[]) => unknown;
  jqt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXntPeers | null = null;

/** Wire bindDeferredUiXnt peers once companions land. */
export function setBindDeferredUiXntPeers(next: BindDeferredUiXntPeers): void {
  peers = next;
}

/**
 * Bundle export `Xnt` / internal `Nqt`.
 */
export function bindDeferredUiXnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiXnt peers are not configured");
  }

  return peers.WGt.bind(null, peers.jqt, peers.Mqt);
}
