// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `bis`) / export `SC`.

export type OpenMainWindowThenContinuePeers = {
  mainWindowReadyAtom: unknown;
  pendingContinueAtom: unknown;
  dispatchOpenMainWindow: () => void;
  queueContinue: (
    store: unknown,
    atom: unknown,
    options: { onContinue: () => void },
  ) => void;
};

let peers: OpenMainWindowThenContinuePeers | null = null;

/** Wire open-main-window-then-continue peers once companions land. */
export function setOpenMainWindowThenContinuePeers(
  next: OpenMainWindowThenContinuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `SC` / internal `bis`.
 * Continue immediately if main window ready; otherwise open then continue.
 */
export function openMainWindowThenContinue(
  store: {
    get: (atom: unknown) => unknown;
    set: (atom: unknown, value: unknown) => void;
  },
  onContinue: () => void,
): void {
  if (peers == null) {
    throw new Error("OpenMainWindowThenContinue peers are not configured");
  }
  if (store.get(peers.mainWindowReadyAtom)) {
    onContinue();
    return;
  }
  peers.dispatchOpenMainWindow();
  peers.queueContinue(store, peers.pendingContinueAtom, {
    onContinue: () => {
      store.set(peers!.mainWindowReadyAtom, true);
      onContinue();
    },
  });
}
