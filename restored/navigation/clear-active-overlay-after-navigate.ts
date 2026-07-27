// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `J1o`) / export `ZT`.

export type ClearActiveOverlayAfterNavigatePeers = {
  clearOverlayState: (
    store: { set: (atom: unknown, value: unknown) => void },
    route: unknown,
    overlay: unknown,
  ) => void;
  defaultOverlayFromRoute: (routeKind: unknown) => unknown;
  activeOverlayAtom: unknown;
};

let peers: ClearActiveOverlayAfterNavigatePeers | null = null;

/** Wire overlay-clear peers once companions land. */
export function setClearActiveOverlayAfterNavigatePeers(
  next: ClearActiveOverlayAfterNavigatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZT` / internal `J1o`.
 * Clear the active overlay after a navigation completes.
 */
export function clearActiveOverlayAfterNavigate(
  store: { set: (atom: unknown, value: unknown) => void },
  route: unknown,
  overlay: unknown | null | undefined,
  routeKind: unknown,
): void {
  if (peers == null) {
    throw new Error("ClearActiveOverlayAfterNavigate peers are not configured");
  }
  peers.clearOverlayState(
    store,
    route,
    overlay ?? peers.defaultOverlayFromRoute(routeKind),
  );
  store.set(peers.activeOverlayAtom, null);
}
