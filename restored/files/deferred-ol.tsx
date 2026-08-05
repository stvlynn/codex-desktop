// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_la`) / export `OL`.

export type BindBindDeferredOLPeers = {
  J: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gla: (...args: unknown[]) => unknown;
  hla: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredOLPeers | null = null;

/** Wire bindBindDeferredOL peers once companions land. */
export function setBindBindDeferredOLPeers(
  next: BindBindDeferredOLPeers,
): void {
  peers = next;
}

/**
 * Bundle export `OL` / internal `_la`.
 */
export function bindBindDeferredOL() {
  if (peers == null) {
    throw new Error("bindBindDeferredOL peers are not configured");
  }

  return peers.e(() => {
    ((hla = peers.r(peers.o(), 1)),
      peers.J(),
      (gla = (0, peers.hla.createContext)(void 0)));
  });
}
