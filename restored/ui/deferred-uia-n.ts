// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BRa`) / export `aN`.

export type DeferredUiaNPeers = {
  $ga: (...args: unknown[]) => unknown;
  ARa: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jz: (...args: unknown[]) => unknown;
  LLa: (...args: unknown[]) => unknown;
  LRa: (...args: unknown[]) => unknown;
  Mga: (...args: unknown[]) => unknown;
  RRa: (...args: unknown[]) => unknown;
  Vga: (...args: unknown[]) => unknown;
  Xw: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nRa: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r_a: (...args: unknown[]) => unknown;
  tIa: (...args: unknown[]) => unknown;
  yRa: (...args: unknown[]) => unknown;
  yS: (...args: unknown[]) => unknown;
  yk: (...args: unknown[]) => unknown;
  zRa: (...args: unknown[]) => unknown;
  zga: (...args: unknown[]) => unknown;
};

let peers: DeferredUiaNPeers | null = null;

/** Wire deferredUiaN peers once companions land. */
export function setDeferredUiaNPeers(next: DeferredUiaNPeers): void {
  peers = next;
}

/**
 * Bundle export `aN` / internal `BRa`.
 */
export function deferredUiaN() {
  if (peers == null) {
    throw new Error("deferredUiaN peers are not configured");
  }

  return peers.e(() => {
    ((LRa = peers.c()),
      (RRa = peers.r(peers.o(), 1)),
      peers.Xw(),
      peers.Fh(),
      peers.tIa(),
      peers.yk(),
      peers.Mga(),
      peers.$ga(),
      peers.nRa(),
      peers.r_a(),
      peers.LLa(),
      peers.yRa(),
      peers.ARa(),
      peers.yS(),
      peers.zga(),
      peers.Vga(),
      peers.Jz(),
      (zRa = peers.J()));
  });
}
