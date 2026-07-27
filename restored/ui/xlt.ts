// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Iet`) / export `xlt`.

export type XltPeers = {
  Fet: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pet: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jet: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: XltPeers | null = null;

/** Wire xlt peers once companions land. */
export function setXltPeers(next: XltPeers): void {
  peers = next;
}

/**
 * Bundle export `xlt` / internal `Iet`.
 */
export function xlt() {
  if (peers == null) {
    throw new Error("xlt peers are not configured");
  }

  return peers.e(() => {
    Pet = peers.c(), peers.sd(), peers.jet(), Fet = peers.J();
  });
}
