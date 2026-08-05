// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zws`) / export `Ry`.

export type DeferredAccountRyPeers = {
  Au: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Iws: (...args: unknown[]) => unknown;
  Lws: (...args: unknown[]) => unknown;
  Rws: (...args: unknown[]) => unknown;
  URL: (...args: unknown[]) => unknown;
  Uo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountRyPeers | null = null;

/** Wire DeferredAccountRy peers once companions land. */
export function setDeferredAccountRyPeers(next: DeferredAccountRyPeers): void {
  peers = next;
}

/**
 * Bundle export `Ry` / internal `zws`.
 */
export function DeferredAccountRy() {
  if (peers == null) {
    throw new Error("DeferredAccountRy peers are not configured");
  }
  return peers.e(() => {
    (peers.Au(),
      peers.Fh(),
      (Iws = new peers.URL(peers.Uo)),
      (Lws = `${peers.Iws.pathname}/purchase/`),
      (Rws = `3800100299`));
  });
}
