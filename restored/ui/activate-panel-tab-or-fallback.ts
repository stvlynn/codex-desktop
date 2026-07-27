// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `QI`) / export `VU`.
// Panel tab atom peers bind via setPanelTabController (conversation-page style).

export type PanelSide = "bottom" | "right" | string;

export type PanelTabController = {
  activateTab: (store: PanelStore, tabId: string | null) => void;
  activeTab$: unknown;
  tabs$: unknown;
};

export type PanelTabPeers = {
  bottomSurfaceAtom: unknown;
  closeOverlay: (store: PanelStore) => void;
  focusChrome: () => void;
  openBottom: (store: PanelStore, open: boolean) => void;
  openRight: (store: PanelStore, open: boolean) => void;
  previousBottomSurfaceAtom: unknown;
  resolveController: (side: PanelSide) => PanelTabController;
  setSurface: (store: PanelStore, surface: string) => void;
  surfaceAtom: unknown;
};

export type PanelStore = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

let peers: PanelTabPeers | null = null;

/** Wire panel tab atoms / open-close helpers once companions land. */
export function setPanelTabController(next: PanelTabPeers): void {
  peers = next;
}

/**
 * Bundle export `VU` / internal `QI`.
 * Activate a panel side, optionally selecting the first tab when empty.
 */
export function activatePanelTabOrFallback(
  store: PanelStore,
  side: PanelSide,
  options: { activateFallbackTab?: boolean; allowEmpty?: boolean } = {},
): boolean {
  if (peers == null) {
    throw new Error("Panel tab controller is not configured");
  }
  const { activateFallbackTab, allowEmpty } = options;
  const controller = peers.resolveController(side);
  const tabs = store.get(controller.tabs$) as Array<{ tabId?: string }> | null;
  const list = Array.isArray(tabs) ? tabs : [];
  let previousSurface: string | null = null;
  if (side === "bottom") {
    const surface = store.get(peers.surfaceAtom);
    previousSurface = surface === "bottom-panel" ? null : (surface as string);
  }
  if (list.length === 0 && allowEmpty !== true) return false;
  if (
    activateFallbackTab === true &&
    store.get(controller.activeTab$) == null
  ) {
    controller.activateTab(store, list[0]?.tabId ?? null);
  }
  if (side === "bottom") {
    if (previousSurface != null) {
      store.set(peers.previousBottomSurfaceAtom, previousSurface);
    }
    peers.openBottom(store, true);
    peers.setSurface(store, "bottom-panel");
  } else {
    peers.openRight(store, true);
    peers.setSurface(store, "right-panel");
  }
  return true;
}
