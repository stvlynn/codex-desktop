// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sw`) / export `L5`.

export type GetRouteContextValuePeers = {
  DBn: (...args: unknown[]) => unknown;
};

let peers: GetRouteContextValuePeers | null = null;

/** Wire getRouteContextValue peers once companions land. */
export function setGetRouteContextValuePeers(
  next: GetRouteContextValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `L5` / internal `Sw`.
 */
export function getRouteContextValue(e: unknown) {
  if (peers == null) {
    throw new Error("getRouteContextValue peers are not configured");
  }

  return peers.DBn(e.context);
}
