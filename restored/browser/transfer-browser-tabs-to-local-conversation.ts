// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `Txo`) / export `DA`.

export type BrowserTabTransferPayload = {
  tabs: unknown[];
  targetBrowserConversationId: unknown;
  [key: string]: unknown;
};

export type TransferBrowserTabsPeers = {
  transferTab: (
    store: unknown,
    targetConversationId: unknown,
    tab: unknown,
    options: unknown,
  ) => void;
  rememberTabs: (store: unknown, atom: unknown, tabs: unknown[]) => void;
  recentTabsAtom: unknown;
  recentTabsAtomAlt: unknown;
  finalizeTransfer: (
    store: unknown,
    payload: BrowserTabTransferPayload,
  ) => void;
  linkAtom: unknown;
};

let peers: TransferBrowserTabsPeers | null = null;

/** Wire tab-transfer helpers once companions land. */
export function setTransferBrowserTabsPeers(
  next: TransferBrowserTabsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `DA` / internal `Txo`.
 * Copy browser tabs onto the active local-thread conversation route.
 */
export function transferBrowserTabsToLocalConversation(
  store: {
    value: { routeKind?: string; conversationId?: unknown };
    set: (atom: unknown, key: unknown, value: unknown) => void;
  },
  payload: BrowserTabTransferPayload,
  options?: unknown,
): void {
  if (peers == null) {
    throw new Error("TransferBrowserTabs peers are not configured");
  }
  if (store.value.routeKind !== "local-thread") {
    throw new Error("Expected local conversation route");
  }
  for (const tab of payload.tabs) {
    peers.transferTab(store, payload.targetBrowserConversationId, tab, options);
  }
  peers.rememberTabs(store, peers.recentTabsAtom, payload.tabs);
  peers.rememberTabs(store, peers.recentTabsAtomAlt, payload.tabs);
  peers.finalizeTransfer(store, payload);
  store.set(peers.linkAtom, store.value.conversationId, null);
}
