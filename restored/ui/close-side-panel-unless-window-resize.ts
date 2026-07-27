// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `KD`) / export `S0`.

export type SidePanelStore = {
  get: (atom: unknown) => any;
  set: (atom: unknown, value: unknown) => void;
};

export type CloseSidePanelUnlessWindowResizeOptions = {
  animate?: boolean;
  closeReason?: string;
  restoreFullWidthOnNextOpen?: boolean;
};

export type CloseSidePanelUnlessWindowResizePeers = {
  suppressCloseAtom: unknown;
  rightPanelOpenAtom: unknown;
  restoreFullWidthAtom: unknown;
  fullWidthAtom: unknown;
  pendingFocusAtom: unknown;
  openAtom: unknown;
  motionControllerAtom: unknown;
  stopMotion: (controller: {
    stop: () => void;
    set: (v: number) => void;
  }) => void;
  animateMotion: (
    controller: { stop: () => void; set: (v: number) => void },
    open: boolean,
    reducedMotion: unknown,
  ) => void;
  reducedMotionAtom: unknown;
};

let peers: CloseSidePanelUnlessWindowResizePeers | null = null;

/** Wire side-panel atoms once companions land. */
export function setCloseSidePanelUnlessWindowResizePeers(
  next: CloseSidePanelUnlessWindowResizePeers,
): void {
  peers = next;
}

/**
 * Bundle export `S0` / internal `KD`.
 * Toggle/close the side panel unless the close reason is window-resize.
 */
export function closeSidePanelUnlessWindowResize(
  store: SidePanelStore,
  open: boolean,
  options: CloseSidePanelUnlessWindowResizeOptions = {},
): void {
  if (peers == null) {
    throw new Error(
      "CloseSidePanelUnlessWindowResize peers are not configured",
    );
  }
  if (
    !open &&
    options.closeReason !== "window-resize" &&
    store.get(peers.suppressCloseAtom)
  ) {
    store.set(peers.rightPanelOpenAtom, false);
    store.set(peers.restoreFullWidthAtom, false);
    store.set(peers.fullWidthAtom, false);
    return;
  }
  if (options.closeReason !== "window-resize") {
    store.set(peers.pendingFocusAtom, null);
  }
  store.set(peers.openAtom, open);
  const controller = store.get(peers.motionControllerAtom);
  if (controller != null) {
    peers.stopMotion(controller);
    if (options.animate === false) {
      controller.set(+!!open);
    } else {
      peers.animateMotion(controller, open, store.get(peers.reducedMotionAtom));
    }
  }
  if (open) {
    if (store.get(peers.restoreFullWidthAtom)) {
      store.set(peers.fullWidthAtom, true);
      store.set(peers.restoreFullWidthAtom, false);
    }
    return;
  }
  store.set(peers.rightPanelOpenAtom, false);
  store.set(
    peers.restoreFullWidthAtom,
    options.restoreFullWidthOnNextOpen === true &&
      store.get(peers.fullWidthAtom),
  );
  store.set(peers.fullWidthAtom, false);
}
