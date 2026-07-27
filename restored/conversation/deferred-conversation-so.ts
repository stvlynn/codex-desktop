// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `So`) / export `So`.

export type DeferredConversationSoPeers = {
  i: (...args: unknown[]) => unknown;
  n: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationSoPeers | null = null;

/** Wire deferredConversationSo peers once companions land. */
export function setDeferredConversationSoPeers(next: DeferredConversationSoPeers): void {
  peers = next;
}

/**
 * Bundle export `So` / internal `So`.
 */
export function deferredConversationSo() {
  if (peers == null) {
    throw new Error("deferredConversationSo peers are not configured");
  }

  return peers.i((e, t) => {
    function n(e) {
      return typeof e == `object` && !!e;
    }
    t.exports = peers.n;
  });
}
