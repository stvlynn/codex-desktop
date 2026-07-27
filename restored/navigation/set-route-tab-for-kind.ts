// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aor`) / export `setRouteTabForKind`.

export type RouteTabForKindPeers = {
  Ub: (...args: unknown[]) => unknown;
  a0t: (...args: unknown[]) => unknown;
  nor: (...args: unknown[]) => unknown;
  ror: (...args: unknown[]) => unknown;
};
let peers: RouteTabForKindPeers | null = null;

/** Wire setRouteTabForKind peers once companions land. */
export function setRouteTabForKindPeers(next: RouteTabForKindPeers): void {
  peers = next;
}

/**
 * Bundle export `setRouteTabForKind` / internal `aor`.
 */
export function setRouteTabForKind(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setRouteTabForKind peers are not configured");
  }
  let n = peers.nor(t);
  n != null &&
    peers.Ub(e, peers.a0t, {
      routeKind: peers.ror(e.value.routeKind),
      tab: n,
    });
}
