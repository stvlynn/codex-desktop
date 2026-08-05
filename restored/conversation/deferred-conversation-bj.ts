// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `C$r`) / export `BJ`.

export type BindDeferredConversationBJPeers = {
  Ma: (...args: unknown[]) => unknown;
  b$r: (...args: unknown[]) => unknown;
  current_assistant_turn: (...args: unknown[]) => unknown;
  current_user_turn: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  l$r: (...args: unknown[]) => unknown;
  x$r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationBJPeers | null = null;

/** Wire bindDeferredConversationBJ peers once companions land. */
export function setBindDeferredConversationBJPeers(
  next: BindDeferredConversationBJPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BJ` / internal `C$r`.
 */
export function bindDeferredConversationBJ() {
  if (peers == null) {
    throw new Error("bindDeferredConversationBJ peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e }) => {
    let { data: t } = e(peers.b$r);
    return peers.l$r({
      taskTurns: e(peers.x$r).data,
      fallbackUserTurn: t?.current_user_turn ?? null,
      fallbackAssistantTurn: t?.current_assistant_turn ?? null,
    });
  });
}
