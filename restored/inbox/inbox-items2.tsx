// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mMr`) / export `AQ`.

export type BindInboxItems2Peers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  uMr: (...args: unknown[]) => unknown;
};

let peers: BindInboxItems2Peers | null = null;

/** Wire bindInboxItems2 peers once companions land. */
export function setBindInboxItems2Peers(next: BindInboxItems2Peers): void {
  peers = next;
}

/**
 * Bundle export `AQ` / internal `mMr`.
 */
export function bindInboxItems2() {
  if (peers == null) {
    throw new Error("bindInboxItems2 peers are not configured");
  }

  return peers.Da(peers.Q, (e) => null, {
    isEqual: peers.uMr.default,
  });
}
