// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Vdl`) / export `Cc`.

export type UseRealtimeCallIdsBridgePeers = {
  useStore: (atom: unknown) => unknown;
  storeAtom: unknown;
  useMapAtom: (atom: unknown) => MapLike;
  sidePanelAtom: unknown;
  fullscreenAtom: unknown;
  toConversationKey: (callId: unknown) => unknown;
  ensureSidePanel: (store: unknown, key: unknown) => void;
  ensureFullscreen: (store: unknown, key: unknown) => void;
  useLayoutEffect: (effect: () => void, deps: unknown[]) => void;
};

let peers: UseRealtimeCallIdsBridgePeers | null = null;

/** Wire useRealtimeCallIdsBridge peers once companions land. */
export function setUseRealtimeCallIdsBridgePeers(
  next: UseRealtimeCallIdsBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cc` / internal `Vdl`.
 * Bridge realtime call ids into side-panel / fullscreen presentation state.
 */
export type MapLike = {
  get: (
    key: unknown,
  ) =>
    | { sidePanelSourceMcpAppId?: unknown; isFullScreen?: boolean }
    | undefined;
};

export function useRealtimeCallIdsBridge(args: { callIds: unknown[] }): null {
  if (peers == null) {
    throw new Error("UseRealtimeCallIdsBridge peers are not configured");
  }
  const { callIds } = args;
  const store = peers.useStore(peers.storeAtom);
  const sidePanel = peers.useMapAtom(peers.sidePanelAtom);
  const fullscreen = peers.useMapAtom(peers.fullscreenAtom);
  peers.useLayoutEffect(() => {
    for (const callId of callIds) {
      const key = peers!.toConversationKey(callId);
      const side = sidePanel.get(key);
      const full = fullscreen.get(key);
      if (
        side?.sidePanelSourceMcpAppId != null &&
        full?.isFullScreen === true
      ) {
        continue;
      }
      peers!.ensureSidePanel(store, key);
      peers!.ensureFullscreen(store, key);
    }
  }, [callIds, sidePanel, fullscreen, store]);
  return null;
}
