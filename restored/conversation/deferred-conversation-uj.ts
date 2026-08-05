// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x$r`) / export `UJ`.

export type DeferredConversationUJPeers = {
  Ia: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  pQr: (...args: unknown[]) => unknown;
};

let peers: DeferredConversationUJPeers | null = null;

/** Wire deferredConversationUJ peers once companions land. */
export function setDeferredConversationUJPeers(
  next: DeferredConversationUJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `UJ` / internal `x$r`.
 */
export function deferredConversationUJ() {
  if (peers == null) {
    throw new Error("deferredConversationUJ peers are not configured");
  }

  return peers.Ia(peers.hT, ({ scope: e }) =>
    peers.pQr(e.value.routeKind === `remote-thread` ? e.value.taskId : null),
  );
}
