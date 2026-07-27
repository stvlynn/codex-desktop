// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mFi`) / export `hW`.

export type DeferredConversationHWPeers = {
  J8n: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  codexHome: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationHWPeers | null = null;

/** Wire deferredConversationHW peers once companions land. */
export function setDeferredConversationHWPeers(next: DeferredConversationHWPeers): void {
  peers = next;
}

/**
 * Bundle export `hW` / internal `mFi`.
 */
export function deferredConversationHW() {
  if (peers == null) {
    throw new Error("deferredConversationHW peers are not configured");
  }

  return peers.Ma(peers.hT, ({
    get: e,
    scope: t
  }) => {
    switch (t.value.routeKind) {
      case `home`:
      case `new-thread-panel`:
      case `client-local-thread`:
      case `local-thread`:
      case `remote-thread`:
      case `chatgpt-thread`:
        return e(peers.J8n).data?.codexHome ?? null;
      case `other`:
        throw Error(`Thread context is unavailable for non-thread routes`);
    }
  });
}
