// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uhs`) / export `Ex`.

export type BindBindDeferredExPeers = {
  FHa: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  chs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lhs: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  ohs: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  shs: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredExPeers | null = null;

/** Wire bindBindDeferredEx peers once companions land. */
export function setBindBindDeferredExPeers(
  next: BindBindDeferredExPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ex` / internal `uhs`.
 */
export function bindBindDeferredEx() {
  if (peers == null) {
    throw new Error("bindBindDeferredEx peers are not configured");
  }

  return peers.e(() => {
    ((ohs = peers.c()),
      peers.sd(),
      (shs = peers.r(peers.o(), 1)),
      peers.FHa(),
      (chs = peers.J()),
      (lhs = (0, peers.shs.createContext)({
        expandedTopTray: !1,
      })));
  });
}
