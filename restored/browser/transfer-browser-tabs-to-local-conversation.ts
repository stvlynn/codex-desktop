// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Txo`) / export `DA`.

export type TransferBrowserTabsToLocalConversationPeers = {
  Fxo: (...args: unknown[]) => unknown;
  Ixo: (...args: unknown[]) => unknown;
  Lxo: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  tO: (...args: unknown[]) => unknown;
  zxo: (...args: unknown[]) => unknown;
};

let peers: TransferBrowserTabsToLocalConversationPeers | null = null;

/** Wire transferBrowserTabsToLocalConversation peers once companions land. */
export function setTransferBrowserTabsToLocalConversationPeers(next: TransferBrowserTabsToLocalConversationPeers): void {
  peers = next;
}

/**
 * Bundle export `DA` / internal `Txo`.
 */
export function transferBrowserTabsToLocalConversation(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("transferBrowserTabsToLocalConversation peers are not configured");
  }

  if (e.value.routeKind !== `local-thread`) throw Error(`Expected local conversation route`);
  for (let r of t.tabs) peers.Fxo(e, t.targetBrowserConversationId, r, n);
  peers.Ixo(e, peers.eO, t.tabs), peers.Ixo(e, peers.tO, t.tabs), peers.Lxo(e, t), e.set(peers.zxo, e.value.conversationId, null);
}
