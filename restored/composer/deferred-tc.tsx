// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `AX`) / export `TC`.

export type BindBindDeferredTCPeers = {
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  Kj: (...args: unknown[]) => unknown;
  Xrs: (...args: unknown[]) => unknown;
  Yrs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hj: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredTCPeers | null = null;

/** Wire bindBindDeferredTC peers once companions land. */
export function setBindBindDeferredTCPeers(
  next: BindBindDeferredTCPeers,
): void {
  peers = next;
}

/**
 * Bundle export `TC` / internal `AX`.
 */
export function bindBindDeferredTC() {
  if (peers == null) {
    throw new Error("bindBindDeferredTC peers are not configured");
  }

  return peers.e(() => {
    ((Yrs = peers.c()),
      peers.Ho(),
      (Xrs = peers.r(peers.o(), 1)),
      peers.hj(),
      peers.Kj(),
      peers.KM());
  });
}
