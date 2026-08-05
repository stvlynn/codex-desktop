// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IGr`) / export `UX`.

export type UseIsLoginMethodAvailablePeers = {
  RGr: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  available: (...args: unknown[]) => unknown;
};

let peers: UseIsLoginMethodAvailablePeers | null = null;

/** Wire useIsLoginMethodAvailable peers once companions land. */
export function setUseIsLoginMethodAvailablePeers(
  next: UseIsLoginMethodAvailablePeers,
): void {
  peers = next;
}

/**
 * Bundle export `UX` / internal `IGr`.
 */
export function useIsLoginMethodAvailable() {
  if (peers == null) {
    throw new Error("useIsLoginMethodAvailable peers are not configured");
  }

  let { data: e } = peers.Y(peers.RGr);
  return e?.available ?? !1;
}
