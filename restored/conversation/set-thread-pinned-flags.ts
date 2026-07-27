// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HKi`) / export `xV`.

export type BindSetThreadPinnedFlagsWriterPeers = {
  UKi: (...args: unknown[]) => unknown;
};

let peers: BindSetThreadPinnedFlagsWriterPeers | null = null;

/** Wire bindSetThreadPinnedFlagsWriter peers once companions land. */
export function setBindSetThreadPinnedFlagsWriterPeers(next: BindSetThreadPinnedFlagsWriterPeers): void {
  peers = next;
}

/**
 * Bundle export `xV` / internal `HKi`.
 */
export function bindSetThreadPinnedFlagsWriter(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("bindSetThreadPinnedFlagsWriter peers are not configured");
  }

  peers.UKi(e, t, n ? [{
    type: `isPinned`,
    isPinned: n
  }] : [{
    type: `isPinned`,
    isPinned: n
  }, {
    type: `pinnedBeforeThreadId`,
    beforeThreadId: null
  }]);
}
