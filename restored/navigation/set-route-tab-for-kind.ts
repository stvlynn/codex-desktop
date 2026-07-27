// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `aor`) / export `s0`.

export type SetRouteTabForKindPeers = {
  resolveTabForKind: (kind: unknown) => unknown;
  normalizeRouteKind: (routeKind: unknown) => unknown;
  writeRouteOverlay: (
    store: unknown,
    atom: unknown,
    value: { routeKind: unknown; tab: unknown },
  ) => void;
  routeOverlayAtom: unknown;
};

let peers: SetRouteTabForKindPeers | null = null;

/** Wire set-route-tab peers once companions land. */
export function setSetRouteTabForKindPeers(
  next: SetRouteTabForKindPeers,
): void {
  peers = next;
}

/**
 * Bundle export `s0` / internal `aor`.
 * Set the route tab for the current route kind when resolvable.
 */
export function setRouteTabForKind(
  store: { value: { routeKind: unknown } },
  kind: unknown,
): void {
  if (peers == null) {
    throw new Error("SetRouteTabForKind peers are not configured");
  }
  const tab = peers.resolveTabForKind(kind);
  if (tab == null) return;
  peers.writeRouteOverlay(store, peers.routeOverlayAtom, {
    routeKind: peers.normalizeRouteKind(store.value.routeKind),
    tab,
  });
}
