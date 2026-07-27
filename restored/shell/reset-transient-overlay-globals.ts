// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Oi`) / export `ovt`.

export type ResetTransientOverlayGlobalsPeers = {
  Ci: (...args: unknown[]) => unknown;
  Di: (...args: unknown[]) => unknown;
  Ei: (...args: unknown[]) => unknown;
  Ti: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  wi: (...args: unknown[]) => unknown;
};

let peers: ResetTransientOverlayGlobalsPeers | null = null;

/** Wire resetTransientOverlayGlobals peers once companions land. */
export function setResetTransientOverlayGlobalsPeers(next: ResetTransientOverlayGlobalsPeers): void {
  peers = next;
}

/**
 * Bundle export `ovt` / internal `Oi`.
 */
export function resetTransientOverlayGlobals() {
  if (peers == null) {
    throw new Error("resetTransientOverlayGlobals peers are not configured");
  }

  return peers.e(() => {
    Ci = peers.r(peers.o(), 1), wi = new WeakMap(), Ti = new WeakMap(), Ei = new WeakMap(), Di = 0;
  });
}
