// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `$I`) / export `LU`.
// Bottom/right close peers bind via setClosePanelPeers.

export type PanelStore = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

export type ClosePanelPeers = {
  closeRightOverlay: (store: PanelStore, open: boolean) => void;
  focusChrome: () => void;
  openBottom: (store: PanelStore, open: boolean) => void;
  previousBottomSurfaceAtom: unknown;
  setSurface: (store: PanelStore, surface: string | null) => void;
  surfaceAtom: unknown;
};

let peers: ClosePanelPeers | null = null;

/** Wire close-panel atoms / helpers once companions land. */
export function setClosePanelPeers(next: ClosePanelPeers): void {
  peers = next;
}

/**
 * Bundle export `LU` / internal `$I`.
 * Close the bottom panel (restoring prior surface) or the right overlay.
 */
export function closeBottomPanelOrOverlay(
  store: PanelStore,
  side: "bottom" | "right" | string,
): void {
  if (peers == null) {
    throw new Error("Close panel peers are not configured");
  }
  if (side === "bottom") {
    const previous =
      store.get(peers.surfaceAtom) === "bottom-panel"
        ? (store.get(peers.previousBottomSurfaceAtom) as string | null)
        : null;
    peers.openBottom(store, false);
    if (previous != null) peers.setSurface(store, previous);
    peers.focusChrome();
    return;
  }
  peers.closeRightOverlay(store, false);
}
