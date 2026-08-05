// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UIt`) / export `zit`.

export type BindZitPeers = {
  FIt: (...args: unknown[]) => unknown;
  HIt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindZitPeers | null = null;

/** Wire bindZit peers once companions land. */
export function setBindZitPeers(next: BindZitPeers): void {
  peers = next;
}

/**
 * Bundle export `zit` / internal `UIt`.
 */
export function bindZit() {
  if (peers == null) {
    throw new Error("bindZit peers are not configured");
  }

  return peers.e(() => {
    (peers.HIt(), peers.FIt());
  });
}
