// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oN`) / export `PJ`.

export type BindDeferredUiPJPeers = {
  D$r: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiPJPeers | null = null;

/** Wire bindDeferredUiPJ peers once companions land. */
export function setBindDeferredUiPJPeers(next: BindDeferredUiPJPeers): void {
  peers = next;
}

/**
 * Bundle export `PJ` / internal `oN`.
 */
export function bindDeferredUiPJ() {
  if (peers == null) {
    throw new Error("bindDeferredUiPJ peers are not configured");
  }

  return peers.Ma(peers.GM, ({
    get: e,
    scope: t
  }) => {
    switch (t.value.kind) {
      case `local`:
        return t.value.conversationId == null ? void 0 : {
          type: `local`,
          localConversationId: t.value.conversationId
        };
      case `cloud`:
        return e(peers.D$r);
      case `chatgpt`:
      case `new`:
      case `other`:
        return;
    }
  });
}
