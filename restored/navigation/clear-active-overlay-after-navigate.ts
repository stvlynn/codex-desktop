// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J1o`) / export `ZT`.

export type ClearActiveOverlayAfterNavigatePeers = {
  EY: (...args: unknown[]) => unknown;
  Y1o: (...args: unknown[]) => unknown;
  zcn: (...args: unknown[]) => unknown;
};

let peers: ClearActiveOverlayAfterNavigatePeers | null = null;

/** Wire clearActiveOverlayAfterNavigate peers once companions land. */
export function setClearActiveOverlayAfterNavigatePeers(next: ClearActiveOverlayAfterNavigatePeers): void {
  peers = next;
}

/**
 * Bundle export `ZT` / internal `J1o`.
 */
export function clearActiveOverlayAfterNavigate(e: unknown, t: unknown, n: unknown, r: unknown) {
  if (peers == null) {
    throw new Error("clearActiveOverlayAfterNavigate peers are not configured");
  }

  peers.Y1o(e, t, n ?? peers.zcn(r)), e.set(peers.EY, null);
}
