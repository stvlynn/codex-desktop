// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xho`) / export `setOpenFileTabsForLocalThread`.

export type OpenFileTabsForLocalThreadPeers = {
  Bf: (...args: unknown[]) => unknown;
  Mor: (...args: unknown[]) => unknown;
  Sho: (...args: unknown[]) => unknown;
};
let peers: OpenFileTabsForLocalThreadPeers | null = null;

/** Wire setOpenFileTabsForLocalThread peers once companions land. */
export function setOpenFileTabsForLocalThreadPeers(
  next: OpenFileTabsForLocalThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `setOpenFileTabsForLocalThread` / internal `xho`.
 */
export function setOpenFileTabsForLocalThread(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("setOpenFileTabsForLocalThread peers are not configured");
  }
  e.value.routeKind === "local-thread" &&
    peers.Bf("set-open-file-tabs", {
      conversationId: e.value.conversationId,
      openFiles: peers.Sho(peers.Mor(e, t)),
    });
}
