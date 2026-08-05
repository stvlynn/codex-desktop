// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LFr`) / export `BZ`.

export type BindDeferredUiBZPeers = {
  FFr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IFr: (...args: unknown[]) => unknown;
  NFr: (...args: unknown[]) => unknown;
  PFr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiBZPeers | null = null;

/** Wire bindDeferredUiBZ peers once companions land. */
export function setBindDeferredUiBZPeers(next: BindDeferredUiBZPeers): void {
  peers = next;
}

/**
 * Bundle export `BZ` / internal `LFr`.
 */
export function bindDeferredUiBZ() {
  if (peers == null) {
    throw new Error("bindDeferredUiBZ peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.ed(),
      (NFr = peers.Ta(peers.Q, !1)),
      (PFr = peers.Ta(peers.Q, !1)),
      (FFr = peers.Ta(peers.Q, null)),
      (IFr = peers.Ta(peers.Q, null)));
  });
}
