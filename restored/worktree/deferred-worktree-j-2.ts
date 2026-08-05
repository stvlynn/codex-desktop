// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WPs`) / export `J_`.

export type BindDeferredWorktreeJPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  UPs: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWorktreeJPeers | null = null;

/** Wire bindDeferredWorktreeJ peers once companions land. */
export function setBindDeferredWorktreeJPeers(
  next: BindDeferredWorktreeJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `J_` / internal `WPs`.
 */
export function bindDeferredWorktreeJ() {
  if (peers == null) {
    throw new Error("bindDeferredWorktreeJ peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) =>
    t(peers.UPs, {
      conversationId: e,
      cwd: t(peers.oD, e),
      hostId: t(peers.wD, e),
    }),
  );
}
