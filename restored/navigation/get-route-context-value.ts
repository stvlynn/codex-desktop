// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `Sw`) / export `L5`.

export type GetRouteContextValuePeers = {
  readContext: (context: unknown) => unknown;
};

let peers: GetRouteContextValuePeers | null = null;

/** Wire route-context peers once companions land. */
export function setGetRouteContextValuePeers(
  next: GetRouteContextValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `L5` / internal `Sw`.
 * Read the active route context value.
 */
export function getRouteContextValue(route: { context: unknown }): unknown {
  if (peers == null) {
    throw new Error("GetRouteContextValue peers are not configured");
  }
  return peers.readContext(route.context);
}
