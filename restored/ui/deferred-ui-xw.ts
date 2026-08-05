// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CI`) / export `xW`.

export type BindDeferredUiXWPeers = {
  FAi: (...args: unknown[]) => unknown;
  LPi: (...args: unknown[]) => unknown;
  Nji: (...args: unknown[]) => unknown;
  Rki: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  qPi: (...args: unknown[]) => unknown;
  uI: (...args: unknown[]) => unknown;
  yF: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXWPeers | null = null;

/** Wire bindDeferredUiXW peers once companions land. */
export function setBindDeferredUiXWPeers(next: BindDeferredUiXWPeers): void {
  peers = next;
}

/**
 * Bundle export `xW` / internal `CI`.
 */
export function bindDeferredUiXW() {
  if (peers == null) {
    throw new Error("bindDeferredUiXW peers are not configured");
  }

  return peers.e(() => {
    (peers.yF(),
      peers.uI(),
      peers.Rki(),
      peers.FAi(),
      peers.Nji(),
      peers.LPi(),
      peers.qPi());
  });
}
