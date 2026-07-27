// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yer`) / export `v4`.

export type DeferredAccountV4Peers = {
  Pm: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountV4Peers | null = null;

/** Wire deferredAccountV4 peers once companions land. */
export function setDeferredAccountV4Peers(next: DeferredAccountV4Peers): void {
  peers = next;
}

/**
 * Bundle export `v4` / internal `yer`.
 */
export function deferredAccountV4() {
  if (peers == null) {
    throw new Error("deferredAccountV4 peers are not configured");
  }
  return peers.Pm(`realtime-voice-mode-debug-disabled`, !1);
}
