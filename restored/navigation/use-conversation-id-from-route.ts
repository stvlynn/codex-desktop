// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T3`) / export `ql`.

export type UseConversationIdFromRoutePeers = {
  X1c: (...args: unknown[]) => unknown;
  conversationId: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  params: (...args: unknown[]) => unknown;
  yw: (...args: unknown[]) => unknown;
};

let peers: UseConversationIdFromRoutePeers | null = null;

/** Wire useConversationIdFromRoute peers once companions land. */
export function setUseConversationIdFromRoutePeers(next: UseConversationIdFromRoutePeers): void {
  peers = next;
}

/**
 * Bundle export `ql` / internal `T3`.
 */
export function useConversationIdFromRoute() {
  if (peers == null) {
    throw new Error("useConversationIdFromRoute peers are not configured");
  }

  let e = (0, peers.X1c.c)(2),
    t = peers.yw(`/local/:conversationId`),
    n = peers.yw(`/remote/:conversationId`),
    r = peers.yw(`/hotkey-window/thread/:conversationId`),
    i =
      t?.params.conversationId ??
      n?.params.conversationId ??
      r?.params.conversationId,
    a;
  return (
    e[0] === i
      ? (a = e[1])
      : ((a = i ? peers.kl(i) : null), (e[0] = i), (e[1] = a)),
    a
  );
}
