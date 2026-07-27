// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g0t`) / export `q9`.

export type CodexManagedPeers = {
  Gb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Wb: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  h0t: (...args: unknown[]) => unknown;
};

let peers: CodexManagedPeers | null = null;

/** Wire codexManaged peers once companions land. */
export function setCodexManagedPeers(next: CodexManagedPeers): void {
  peers = next;
}

/**
 * Bundle export `q9` / internal `g0t`.
 */
export function codexManaged() {
  if (peers == null) {
    throw new Error("codexManaged peers are not configured");
  }
  return peers.e(() => {
    peers.Ho(), peers.ed(), Wb = {
      logProductEvent: () => {},
      logEventWithStatsig: () => {},
      trackCounter: async () => {},
      flush: async () => {},
      submitCodexAnalyticsEvent: null
    }, Gb = peers.Ta(peers.Q, peers.Wb), h0t = peers.Ta(peers.Q, !1);
  });
}
