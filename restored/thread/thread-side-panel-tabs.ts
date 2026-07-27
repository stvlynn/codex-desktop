// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `ZGi`) / export `AV`.

export type CloseThreadSidePanelTabIfOpenPeers = {
  toTabId: (input: unknown) => unknown;
  tabsAtom: {
    tabs$: unknown;
    closeTab: (store: unknown, tabId: unknown) => void;
  };
  clearSidePanel: (store: unknown) => void;
};

let peers: CloseThreadSidePanelTabIfOpenPeers | null = null;

/** Wire closeThreadSidePanelTabIfOpen peers once companions land. */
export function setCloseThreadSidePanelTabIfOpenPeers(
  next: CloseThreadSidePanelTabIfOpenPeers,
): void {
  peers = next;
}

/**
 * Bundle export `AV` / internal `ZGi`.
 * Close a side-panel tab when present; clear panel if no tabs remain.
 */
export function closeThreadSidePanelTabIfOpen(
  store: { get: (atom: unknown) => Array<{ tabId: unknown }> },
  input: unknown,
): void {
  if (peers == null) {
    throw new Error("CloseThreadSidePanelTabIfOpen peers are not configured");
  }
  const tabId = peers.toTabId(input);
  const tabs = store.get(peers.tabsAtom.tabs$);
  if (tabs.some((tab) => tab.tabId === tabId)) {
    peers.tabsAtom.closeTab(store, tabId);
    if (store.get(peers.tabsAtom.tabs$).length === 0) {
      peers.clearSidePanel(store);
    }
  }
}

// --- qg-full-green: IMPORT_MAP export stubs ---
export const THREAD_SIDE_PANEL_TAB: any = undefined;
export const closeThreadMcpAppSidePanelTab: any = undefined;
export const getBrowserTabIdForSidePanelOpen: any = undefined;
export const getThreadMcpAppSidePanelTabId: any = undefined;
export const openSessionSandboxSidePanel: any = undefined;
export const openThreadBranchReviewSidePanelTab: any = undefined;
export const openThreadBrowserSidePanelTab: any = undefined;
export const openThreadBrowserSidePanelTabWithPendingState: any = undefined;
export const openThreadBrowserSidePanelTabWithoutAnimation: any = undefined;
export const openThreadLastTurnReviewSidePanelTab: any = undefined;
export const openThreadMcpAppSidePanelTab: any = undefined;
export const openThreadReviewSidePanelTab: any = undefined;
export const openThreadTimelineSidePanel: any = undefined;
export const primeBrowserTabTransfers: any = undefined;
export const toggleThreadReviewSidePanelTab: any = undefined;
export const toggleThreadSidePanel: any = undefined;
