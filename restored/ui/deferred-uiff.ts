// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uFc`) / export `ff`.

export type DeferredUiffPeers = {
  J: (...args: unknown[]) => unknown;
  RH: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cFc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lFc: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oFc: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sFc: (...args: unknown[]) => unknown;
};

let peers: DeferredUiffPeers | null = null;

/** Wire deferredUiff peers once companions land. */
export function setDeferredUiffPeers(next: DeferredUiffPeers): void {
  peers = next;
}

/**
 * Bundle export `ff` / internal `uFc`.
 */
export function deferredUiff() {
  if (peers == null) {
    throw new Error("deferredUiff peers are not configured");
  }

  return peers.e(() => {
    ((oFc = peers.c()),
      (sFc = peers.r(peers.o(), 1)),
      peers.RH(),
      (cFc = peers.J()),
      (lFc = 2500));
  });
}
