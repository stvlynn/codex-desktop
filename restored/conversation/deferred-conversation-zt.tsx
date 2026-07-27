// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `X0o`) / export `zT`.

export type BindBindDeferredConversationZTPeers = {
  E0o: (...args: unknown[]) => unknown;
  H0o: (...args: unknown[]) => unknown;
  J0o: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  W0o: (...args: unknown[]) => unknown;
  ij: (...args: unknown[]) => unknown;
  q0o: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredConversationZTPeers | null = null;

/** Wire bindBindDeferredConversationZT peers once companions land. */
export function setBindBindDeferredConversationZTPeers(next: BindBindDeferredConversationZTPeers): void {
  peers = next;
}

/**
 * Bundle export `zT` / internal `X0o`.
 */
export function bindBindDeferredConversationZT() {
  if (peers == null) {
    throw new Error("bindBindDeferredConversationZT peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e, scope: t }) => {
    let n = peers.H0o(
      peers.J0o.get(t.node) ?? peers.q0o,
      peers.W0o({
        get: e,
        threadKeys: e(peers.ij),
        pinnedThreadIds: e(peers.E0o),
      }),
    );
    return (peers.J0o.set(t.node, n), n);
  });
}
