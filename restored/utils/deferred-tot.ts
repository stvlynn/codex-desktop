// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dAt`) / export `tot`.

export type DeferredTotPeers = {
  Hkt: (...args: unknown[]) => unknown;
  Kkt: (...args: unknown[]) => unknown;
  Qkt: (...args: unknown[]) => unknown;
  Wkt: (...args: unknown[]) => unknown;
  Xkt: (...args: unknown[]) => unknown;
  aAt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lAt: (...args: unknown[]) => unknown;
  sAt: (...args: unknown[]) => unknown;
  tAt: (...args: unknown[]) => unknown;
  uAt: (...args: unknown[]) => unknown;
};

let peers: DeferredTotPeers | null = null;

/** Wire deferredTot peers once companions land. */
export function setDeferredTotPeers(next: DeferredTotPeers): void {
  peers = next;
}

/**
 * Bundle export `tot` / internal `dAt`.
 */
export function deferredTot() {
  if (peers == null) {
    throw new Error("deferredTot peers are not configured");
  }

  return peers.e(() => {
    (peers.Hkt(),
      peers.Wkt(),
      peers.Kkt(),
      peers.Xkt(),
      peers.Qkt(),
      peers.aAt(),
      peers.tAt(),
      peers.sAt(),
      (lAt = Array.prototype.map),
      (uAt = [
        `y`,
        `z`,
        `a`,
        `f`,
        `p`,
        `n`,
        `µ`,
        `m`,
        ``,
        `k`,
        `M`,
        `G`,
        `T`,
        `P`,
        `E`,
        `Z`,
        `Y`,
      ]));
  });
}
