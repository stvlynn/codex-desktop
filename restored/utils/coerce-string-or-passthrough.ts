// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fX`) / export `Xw`.

export type BindCoerceStringOrPassthroughPeers = {
  $m: (...args: unknown[]) => unknown;
  F7o: (...args: unknown[]) => unknown;
  H7o: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  U7o: (...args: unknown[]) => unknown;
  W7o: (...args: unknown[]) => unknown;
  XH: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dX: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindCoerceStringOrPassthroughPeers | null = null;

/** Wire bindCoerceStringOrPassthrough peers once companions land. */
export function setBindCoerceStringOrPassthroughPeers(next: BindCoerceStringOrPassthroughPeers): void {
  peers = next;
}

/**
 * Bundle export `Xw` / internal `fX`.
 */
export function bindCoerceStringOrPassthrough() {
  if (peers == null) {
    throw new Error("bindCoerceStringOrPassthrough peers are not configured");
  }

  return peers.e(() => {
    H7o = peers.c(), peers.sd(), peers.XH(), U7o = peers.r(peers.o(), 1), peers.$m(), peers.F7o(), dX = peers.J(), W7o = 100;
  });
}
