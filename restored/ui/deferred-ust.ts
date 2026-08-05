// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uxt`) / export `ust`.

export type DeferredUstPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  cxt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lxt: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: DeferredUstPeers | null = null;

/** Wire deferredUst peers once companions land. */
export function setDeferredUstPeers(next: DeferredUstPeers): void {
  peers = next;
}

/**
 * Bundle export `ust` / internal `uxt`.
 */
export function deferredUst() {
  if (peers == null) {
    throw new Error("deferredUst peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (cxt = peers.sl({
        role: peers.X(),
        text: peers.X(),
      })),
      (lxt = peers.sl({
        type: peers.ml(`handoff_request`),
        handoff_id: peers.X(),
        input_transcript: peers.X(),
        active_transcript: peers.ol(peers.cxt),
      })));
  });
}
