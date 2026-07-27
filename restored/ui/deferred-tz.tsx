// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WBr`) / export `TZ`.

export type BindDeferredTZPeers = {
  BBr: (...args: unknown[]) => unknown;
  HBr: (...args: unknown[]) => unknown;
  IBr: (...args: unknown[]) => unknown;
  LBr: (...args: unknown[]) => unknown;
  Nj: (...args: unknown[]) => unknown;
  Pj: (...args: unknown[]) => unknown;
  RBr: (...args: unknown[]) => unknown;
  UBr: (...args: unknown[]) => unknown;
  VBr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zBr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredTZPeers | null = null;

/** Wire bindDeferredTZ peers once companions land. */
export function setBindDeferredTZPeers(next: BindDeferredTZPeers): void {
  peers = next;
}

/**
 * Bundle export `TZ` / internal `WBr`.
 */
export function bindDeferredTZ() {
  if (peers == null) {
    throw new Error("bindDeferredTZ peers are not configured");
  }

  return peers.e(() => {
    IBr = new Map(), LBr = new Map(), RBr = new Map(), zBr = new Map(), BBr = new Map(), Nj = new Map(), VBr = new Set(), HBr = 0, Pj = new Map(), UBr = new Map();
  });
}
