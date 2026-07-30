// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `urs`) / export `AC`.

export type BindDeferredUiACPeers = {
  Ma: (...args: unknown[]) => unknown;
  Ox: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  lrs: (...args: unknown[]) => unknown;
  srs: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiACPeers | null = null;

/** Wire bindDeferredUiAC peers once companions land. */
export function setBindDeferredUiACPeers(next: BindDeferredUiACPeers): void {
  peers = next;
}

/**
 * Bundle export `AC` / internal `urs`.
 */
export function bindDeferredUiAC() {
  if (peers == null) {
    throw new Error("bindDeferredUiAC peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => {
    let t = e(peers.Ox);
    return t.phase === `inactive` || !t.outputMuted ? null : peers.lrs(e(peers.srs, t.locator));
  });
}

// --- missing-relative-export aliases ---
export { bindDeferredUiAC as deferredUiAC };
