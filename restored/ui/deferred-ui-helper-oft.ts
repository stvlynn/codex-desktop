// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OJe`) / export `oft`.

export type BindDeferredUiHelperOftPeers = {
  DJe: (...args: unknown[]) => unknown;
  TJe: (...args: unknown[]) => unknown;
  Ud: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  vJe: (...args: unknown[]) => unknown;
  zze: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperOftPeers | null = null;

/** Wire bindDeferredUiHelperOft peers once companions land. */
export function setBindDeferredUiHelperOftPeers(next: BindDeferredUiHelperOftPeers): void {
  peers = next;
}

/**
 * Bundle export `oft` / internal `OJe`.
 */
export function bindDeferredUiHelperOft() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperOft peers are not configured");
  }

  return peers.e(() => {
    peers.Ud(), DJe = peers.r(peers.o(), 1), peers.zze(), peers.vJe(), peers.TJe();
  });
}
