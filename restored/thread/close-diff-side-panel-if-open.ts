// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `Y$o`) / export `xE`.
// Diff/review panel peers bind via setCloseDiffSidePanelIfOpenPeers.

export type PanelStore = {
  get: (atom: unknown) => unknown;
};

export type CloseDiffSidePanelIfOpenPeers = {
  isRightPanelOpenAtom: unknown;
  getActiveSidePanelTab: (store: PanelStore) => unknown;
  diffTabId: unknown;
  closeRightPanel: (store: PanelStore, animated: boolean) => void;
  collapseReviewPanel: (store: PanelStore) => unknown;
};

let peers: CloseDiffSidePanelIfOpenPeers | null = null;

/** Wire diff/review panel atoms once companions land. */
export function setCloseDiffSidePanelIfOpenPeers(
  next: CloseDiffSidePanelIfOpenPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xE` / internal `Y$o`.
 * Close the diff side panel when active; otherwise collapse review panel.
 */
export function closeDiffSidePanelIfOpen(store: PanelStore): unknown {
  if (peers == null) {
    throw new Error("CloseDiffSidePanelIfOpen peers are not configured");
  }
  if (
    store.get(peers.isRightPanelOpenAtom) &&
    peers.getActiveSidePanelTab(store) === peers.diffTabId
  ) {
    peers.closeRightPanel(store, false);
    return true;
  }
  return peers.collapseReviewPanel(store);
}
