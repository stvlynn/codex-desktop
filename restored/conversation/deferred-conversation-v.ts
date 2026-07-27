// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zWi`) / export `$V`.

export type DeferredConversationVPeers = {
  Au: (...args: unknown[]) => unknown;
  IWi: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationVPeers | null = null;

/** Wire deferredConversationV peers once companions land. */
export function setDeferredConversationVPeers(next: DeferredConversationVPeers): void {
  peers = next;
}

/**
 * Bundle export `$V` / internal `zWi`.
 */
export function deferredConversationV() {
  if (peers == null) {
    throw new Error("deferredConversationV peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Vf(), peers.nO(), peers.jI(), peers.IWi();
  });
}
