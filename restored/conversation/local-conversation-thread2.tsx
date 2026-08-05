// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YFi`) / export `QU`.

export type BindBindLocalConversationThread2Peers = {
  DI: (...args: unknown[]) => unknown;
  GFi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  mFi: (...args: unknown[]) => unknown;
  qFi: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalConversationThread2Peers | null = null;

/** Wire bindBindLocalConversationThread2 peers once companions land. */
export function setBindBindLocalConversationThread2Peers(
  next: BindBindLocalConversationThread2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `QU` / internal `YFi`.
 */
export function bindBindLocalConversationThread2() {
  if (peers == null) {
    throw new Error(
      "bindBindLocalConversationThread2 peers are not configured",
    );
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    let t = e(peers.qFi).data ?? null;
    return peers.GFi({
      codexHome: e(peers.mFi),
      cwd: e(peers.DI),
      gitMetadata: t,
      hostId: e(peers.OI),
    });
  });
}
