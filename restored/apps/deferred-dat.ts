// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tPt`) / export `dat`.

export type DeferredDatPeers = {
  CAt: (...args: unknown[]) => unknown;
  WNt: (...args: unknown[]) => unknown;
  dv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lv: (...args: unknown[]) => unknown;
  ov: (...args: unknown[]) => unknown;
};

let peers: DeferredDatPeers | null = null;

/** Wire deferredDat peers once companions land. */
export function setDeferredDatPeers(next: DeferredDatPeers): void {
  peers = next;
}

/**
 * Bundle export `dat` / internal `tPt`.
 */
export function deferredDat() {
  if (peers == null) {
    throw new Error("deferredDat peers are not configured");
  }

  return peers.e(() => {
    (peers.ov(), peers.CAt(), peers.WNt(), peers.dv(), peers.lv());
  });
}
