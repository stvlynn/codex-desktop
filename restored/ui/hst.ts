// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Got`) / export `Hst`.

export type HstPeers = {
  Wot: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: HstPeers | null = null;

/** Wire hst peers once companions land. */
export function setHstPeers(next: HstPeers): void {
  peers = next;
}

/**
 * Bundle export `Hst` / internal `Got`.
 */
export function hst() {
  if (peers == null) {
    throw new Error("hst peers are not configured");
  }

  return peers.e(() => {
    Wot = {};
  });
}
