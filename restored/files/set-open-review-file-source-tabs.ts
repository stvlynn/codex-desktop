// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LWi`) / export `eH`.

export type EHPeers = {
  Bf: (...args: unknown[]) => unknown;
  Mor: (...args: unknown[]) => unknown;
  OWi: (...args: unknown[]) => unknown;
};
let peers: EHPeers | null = null;

/** Wire eH peers once companions land. */
export function setEHPeers(next: EHPeers): void {
  peers = next;
}

/**
 * Bundle export `eH` / internal `LWi`.
 */
export function eH(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("eH peers are not configured");
  }
  e.value.routeKind === "local-thread" &&
    peers.Bf("set-open-review-file-source-tabs", {
      conversationId: e.value.conversationId,
      openFiles: peers.OWi(peers.Mor(e, t)),
    });
}
