// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pts`) / export `tw`.

export type DeferredTwPeers = {
  Au: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  yX: (...args: unknown[]) => unknown;
};

let peers: DeferredTwPeers | null = null;

/** Wire deferredTw peers once companions land. */
export function setDeferredTwPeers(next: DeferredTwPeers): void {
  peers = next;
}

/**
 * Bundle export `tw` / internal `pts`.
 */
export function deferredTw() {
  if (peers == null) {
    throw new Error("deferredTw peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers._p(),
      peers.ed(),
      peers.Gf(),
      (yX = peers.Ta(peers.Q, null)));
  });
}
