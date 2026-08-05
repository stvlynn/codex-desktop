// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xms`) / export `jx`.

export type BindHasOpenedQuickChatV1Peers = {
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindHasOpenedQuickChatV1Peers | null = null;

/** Wire bindHasOpenedQuickChatV1 peers once companions land. */
export function setBindHasOpenedQuickChatV1Peers(
  next: BindHasOpenedQuickChatV1Peers,
): void {
  peers = next;
}

/**
 * Bundle export `jx` / internal `xms`.
 */
export function bindHasOpenedQuickChatV1() {
  if (peers == null) {
    throw new Error("bindHasOpenedQuickChatV1 peers are not configured");
  }

  return peers.Pm(`has-opened-quick-chat-v1`, !1);
}
