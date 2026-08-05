// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `b$r`) / export `HJ`.

export type DeferredConversationHJPeers = {
  Ia: (...args: unknown[]) => unknown;
  fQr: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationHJPeers | null = null;

/** Wire deferredConversationHJ peers once companions land. */
export function setDeferredConversationHJPeers(
  next: DeferredConversationHJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HJ` / internal `b$r`.
 */
export function deferredConversationHJ() {
  if (peers == null) {
    throw new Error("deferredConversationHJ peers are not configured");
  }

  return peers.Ia(peers.hT, ({ scope: e }) =>
    peers.fQr(e.value.routeKind === `remote-thread` ? e.value.taskId : null),
  );
}
