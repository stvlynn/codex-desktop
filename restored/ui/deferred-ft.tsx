// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eVe`) / export `_ft`.

export type BindDeferredFtPeers = {
  $Be: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QBe: (...args: unknown[]) => unknown;
  XBe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  ud: (...args: unknown[]) => unknown;
  zze: (...args: unknown[]) => unknown;
};

let peers: BindDeferredFtPeers | null = null;

/** Wire bindDeferredFt peers once companions land. */
export function setBindDeferredFtPeers(next: BindDeferredFtPeers): void {
  peers = next;
}

/**
 * Bundle export `_ft` / internal `eVe`.
 */
export function bindDeferredFt() {
  if (peers == null) {
    throw new Error("bindDeferredFt peers are not configured");
  }

  return peers.e(() => {
    ((QBe = peers.J()),
      ($Be = peers.r(peers.o(), 1)),
      peers.zze(),
      peers.XBe(),
      peers.ud());
  });
}
