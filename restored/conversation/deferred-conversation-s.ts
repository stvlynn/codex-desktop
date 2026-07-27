// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HAr`) / export `s$`.

export type DeferredConversationSPeers = {
  EA: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationSPeers | null = null;

/** Wire deferredConversationS peers once companions land. */
export function setDeferredConversationSPeers(next: DeferredConversationSPeers): void {
  peers = next;
}

/**
 * Bundle export `s$` / internal `HAr`.
 */
export function deferredConversationS() {
  if (peers == null) {
    throw new Error("deferredConversationS peers are not configured");
  }

  return peers.e(() => {
    (peers.ed(),
      peers.Uf(),
      peers.ap(),
      (EA = peers.ep(peers.Q, `list-automations`, {
        enabled: !0,
        refetchInterval: peers.Hf.ONE_MINUTE,
        staleTime: peers.Hf.ONE_MINUTE,
      })));
  });
}
