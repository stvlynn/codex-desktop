// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xho`) / export `ij`.

export type IjPeers = {
  Bf: (...args: unknown[]) => unknown;
  Mor: (...args: unknown[]) => unknown;
  Sho: (...args: unknown[]) => unknown;
};
let peers: IjPeers | null = null;

/** Wire ij peers once companions land. */
export function setIjPeers(next: IjPeers): void {
  peers = next;
}

/**
 * Bundle export `ij` / internal `xho`.
 */
export function ij(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("ij peers are not configured");
  }
  e.value.routeKind === "local-thread" &&
    peers.Bf("set-open-file-tabs", {
      conversationId: e.value.conversationId,
      openFiles: peers.Sho(peers.Mor(e, t)),
    });
}
