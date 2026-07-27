// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `sxo`) / export `RA`.

export type FilePanelStore = {
  get: (atom: unknown) => any;
};

export type OpenOrFocusFilePanelTabOptions = {
  hostId?: unknown;
  tabId?: unknown;
  [key: string]: unknown;
};

export type OpenOrFocusFilePanelTabPeers = {
  resolveTabId: (path: unknown, hostId: unknown, tabId: unknown) => unknown;
  locatePanel: (
    store: FilePanelStore,
    tabId: unknown,
  ) => "bottom" | "right" | null;
  isBottomOpenAtom: unknown;
  isRightOpenAtom: unknown;
  panelController: (side: "bottom" | "right") => {
    activeTab$: unknown;
  };
  closePanel: (store: FilePanelStore, side: "bottom" | "right") => void;
  openFileInPanelTab: (
    store: FilePanelStore,
    path: unknown,
    options: OpenOrFocusFilePanelTabOptions,
  ) => unknown;
};

let peers: OpenOrFocusFilePanelTabPeers | null = null;

/** Wire panel tab helpers once companions land. */
export function setOpenOrFocusFilePanelTabPeers(
  next: OpenOrFocusFilePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `RA` / internal `sxo`.
 * Focus an existing file panel tab, or open a new one.
 */
export function openOrFocusFilePanelTab(
  store: FilePanelStore,
  filePath: unknown,
  options: OpenOrFocusFilePanelTabOptions = {},
): unknown {
  if (peers == null) {
    throw new Error("OpenOrFocusFilePanelTab peers are not configured");
  }
  const tabId = peers.resolveTabId(filePath, options.hostId, options.tabId);
  const side = peers.locatePanel(store, tabId);
  if (
    side != null &&
    (side === "bottom"
      ? store.get(peers.isBottomOpenAtom)
      : store.get(peers.isRightOpenAtom)) &&
    store.get(peers.panelController(side).activeTab$)?.tabId === tabId
  ) {
    peers.closePanel(store, side);
    return;
  }
  return peers.openFileInPanelTab(store, filePath, options);
}
