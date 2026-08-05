// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Enu`) / export `sr`.

export type DeferredConversationSrPeers = {
  Tnu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  wnu: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationSrPeers | null = null;

/** Wire deferredConversationSr peers once companions land. */
export function setDeferredConversationSrPeers(
  next: DeferredConversationSrPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sr` / internal `Enu`.
 */
export function deferredConversationSr() {
  if (peers == null) {
    throw new Error("deferredConversationSr peers are not configured");
  }

  return peers.e(() => {
    ((wnu = `3026692602`), (Tnu = `3502101112`));
  });
}
