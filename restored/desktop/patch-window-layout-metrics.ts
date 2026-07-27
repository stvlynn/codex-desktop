// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `lz`) / export `bB`.

export type PatchWindowLayoutMetricsPeers = {
  windowLayoutMetricsAtom: unknown;
  defaultMetrics: Record<string, unknown>;
  onEnterFullscreen: (store: unknown, windowId: unknown) => void;
};

let peers: PatchWindowLayoutMetricsPeers | null = null;

/** Wire window layout metrics peers once companions land. */
export function setPatchWindowLayoutMetricsPeers(
  next: PatchWindowLayoutMetricsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bB` / internal `lz`.
 * Patch per-window layout metrics; notify on fullscreen enter.
 */
export function patchWindowLayoutMetrics(
  store: {
    set: (
      atom: unknown,
      updater: (
        current: Map<unknown, Record<string, unknown>>,
      ) => Map<unknown, Record<string, unknown>>,
    ) => void;
  },
  windowId: unknown,
  patch: Record<string, unknown>,
): void {
  if (peers == null) {
    throw new Error("PatchWindowLayoutMetrics peers are not configured");
  }
  if (patch.isFullScreen === true) {
    peers.onEnterFullscreen(store, windowId);
  }
  store.set(peers.windowLayoutMetricsAtom, (current) => {
    const prev = current.get(windowId) ?? peers!.defaultMetrics;
    const next = { ...prev, ...patch };
    if (
      prev.intrinsicHeight === next.intrinsicHeight &&
      prev.isFullScreen === next.isFullScreen &&
      prev.isInlineExpanded === next.isInlineExpanded &&
      prev.sandboxError === next.sandboxError
    ) {
      return current;
    }
    const copy = new Map(current);
    copy.set(windowId, next);
    return copy;
  });
}
