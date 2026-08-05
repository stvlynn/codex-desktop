// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WKa`) / export `yM`.

export type BindMacOS2Peers = {
  Ho: (...args: unknown[]) => unknown;
  K3r: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  UKa: (...args: unknown[]) => unknown;
  _ti: (...args: unknown[]) => unknown;
  bXr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fN: (...args: unknown[]) => unknown;
  kXr: (...args: unknown[]) => unknown;
  pUn: (...args: unknown[]) => unknown;
  zw: (...args: unknown[]) => unknown;
};

let peers: BindMacOS2Peers | null = null;

/** Wire bindMacOS2 peers once companions land. */
export function setBindMacOS2Peers(next: BindMacOS2Peers): void {
  peers = next;
}

/**
 * Bundle export `yM` / internal `WKa`.
 */
export function bindMacOS2() {
  if (peers == null) {
    throw new Error("bindMacOS2 peers are not configured");
  }

  return peers.e(() => {
    ((UKa = peers.c()),
      peers.Ho(),
      peers._ti(),
      peers.pUn(),
      peers.bXr(),
      peers.kXr(),
      peers.K3r(),
      peers.zw(),
      peers.ed(),
      peers.KM(),
      peers.fN());
  });
}
