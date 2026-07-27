// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WKc`) / export `_d`.

export type BindConversationTurnPresentationScopePeers = {
  GM: (...args: unknown[]) => unknown;
  HKc: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UKc: (...args: unknown[]) => unknown;
  VKc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  pT: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindConversationTurnPresentationScopePeers | null = null;

/** Wire bindConversationTurnPresentationScope peers once companions land. */
export function setBindConversationTurnPresentationScopePeers(next: BindConversationTurnPresentationScopePeers): void {
  peers = next;
}

/**
 * Bundle export `_d` / internal `WKc`.
 */
export function bindConversationTurnPresentationScope() {
  if (peers == null) {
    throw new Error("bindConversationTurnPresentationScope peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.KM(), peers.gT(), VKc = peers.Ta(peers.hT, null), HKc = peers.Oa(peers.hT, (e, {
      get: t,
      scope: n
    }) => t(peers.VKc) ?? (peers.e ?? peers.pT(n.value), !1)), UKc = peers.wa(`ConversationTurnPresentationScope`, {
      key: ({
        turnKey: e
      }) => peers.e,
      parent: peers.GM
    });
  });
}
