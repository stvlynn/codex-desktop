// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Mps`) / export `$x`.

export type BindBindDeferredUiXPeers = {
  Jfs: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sps: (...args: unknown[]) => unknown;
  jps: (...args: unknown[]) => unknown;
  lps: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiXPeers | null = null;

/** Wire bindBindDeferredUiX peers once companions land. */
export function setBindBindDeferredUiXPeers(
  next: BindBindDeferredUiXPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$x` / internal `Mps`.
 */
export function bindBindDeferredUiX() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiX peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    (e, { get: t }) => {
      let n = e.conversationId == null ? null : t(peers.Jfs, e.conversationId);
      return peers.lps(t(peers.jps, e), n != null);
    },
    {
      isEqual: peers.Sps.default,
    },
  );
}
