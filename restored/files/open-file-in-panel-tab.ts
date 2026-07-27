// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `hK`) / export `LA`.
// Heavy panel/controller peers bind via setOpenFileInPanelTabPeers.

export type OpenFileInPanelTabOptions = {
  activate?: boolean;
  controller?: unknown;
  endLine?: unknown;
  hostId?: unknown;
  icon?: unknown;
  isPreview?: boolean;
  line?: unknown;
  onClose?: () => void;
  resetTabState?: boolean;
  syncOpenTabs?: boolean;
  target?: "right" | "left" | "bottom" | string;
  tabId?: unknown;
  title?: unknown;
  workspaceRoot?: unknown;
};

export type OpenFileInPanelTabPeers = {
  open: (
    store: unknown,
    filePath: unknown,
    options: OpenFileInPanelTabOptions,
  ) => unknown;
};

let peers: OpenFileInPanelTabPeers | null = null;

/** Wire the full open-file panel implementation once companions land. */
export function setOpenFileInPanelTabPeers(
  next: OpenFileInPanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LA` / internal `hK`.
 * Open a file into a left/right/bottom panel tab with host/workspace roots.
 */
export function openFileInPanelTab(
  store: unknown,
  filePath: unknown,
  options: OpenFileInPanelTabOptions = {},
): unknown {
  if (peers == null) {
    throw new Error("OpenFileInPanelTab peers are not configured");
  }
  return peers.open(store, filePath, options);
}
