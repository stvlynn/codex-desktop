// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JVl`) / export `_o`.

export type DeferredConversationO2Peers = {
  Au: (...args: unknown[]) => unknown;
  Gk: (...args: unknown[]) => unknown;
  KVl: (...args: unknown[]) => unknown;
  _3o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationO2Peers | null = null;

/** Wire deferredConversationO2 peers once companions land. */
export function setDeferredConversationO2Peers(
  next: DeferredConversationO2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `_o` / internal `JVl`.
 */
export function deferredConversationO2() {
  if (peers == null) {
    throw new Error("deferredConversationO2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), peers._3o(), peers.Gk(), peers.KVl());
  });
}
