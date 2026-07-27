// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UQi`) / export `SB`.

export type BindDeferredEnvironmentsSB2Peers = {
  Fl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredEnvironmentsSB2Peers | null = null;

/** Wire bindDeferredEnvironmentsSB2 peers once companions land. */
export function setBindDeferredEnvironmentsSB2Peers(next: BindDeferredEnvironmentsSB2Peers): void {
  peers = next;
}

/**
 * Bundle export `SB` / internal `UQi`.
 */
export function bindDeferredEnvironmentsSB2() {
  if (peers == null) {
    throw new Error("bindDeferredEnvironmentsSB2 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) =>
    peers.sp(e, peers.Fl.PROJECTLESS_THREAD_IDS),
  );
}
