// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `its`) / export `sw`.

export type DeferredSwPeers = {
  Zes: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nts: (...args: unknown[]) => unknown;
  rts: (...args: unknown[]) => unknown;
};

let peers: DeferredSwPeers | null = null;

/** Wire deferredSw peers once companions land. */
export function setDeferredSwPeers(next: DeferredSwPeers): void {
  peers = next;
}

/**
 * Bundle export `sw` / internal `its`.
 */
export function deferredSw() {
  if (peers == null) {
    throw new Error("deferredSw peers are not configured");
  }

  return peers.e(() => {
    (peers.Zes(),
      (nts = 1500),
      (rts = `Codex capabilities available this session:`));
  });
}
