// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oxu`) / export `B`.

export type DeferredUiBPeers = {
  Vf: (...args: unknown[]) => unknown;
  cE: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredUiBPeers | null = null;

/** Wire deferredUiB peers once companions land. */
export function setDeferredUiBPeers(next: DeferredUiBPeers): void {
  peers = next;
}

/**
 * Bundle export `B` / internal `oxu`.
 */
export function deferredUiB() {
  if (peers == null) {
    throw new Error("deferredUiB peers are not configured");
  }

  return peers.e(() => {
    peers.cE(), peers.Vf();
  });
}

// Semantic export aliases (split/export lane)
export { deferredUiB as DeferredUiB };
