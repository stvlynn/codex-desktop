// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oiu`) / export `Xn`.

export type BindIsUpdatePhaseInProgressPeers = {
  Gf: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Zru: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  riu: (...args: unknown[]) => unknown;
};

let peers: BindIsUpdatePhaseInProgressPeers | null = null;

/** Wire bindIsUpdatePhaseInProgress peers once companions land. */
export function setBindIsUpdatePhaseInProgressPeers(
  next: BindIsUpdatePhaseInProgressPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Xn` / internal `oiu`.
 */
export function bindIsUpdatePhaseInProgress() {
  if (peers == null) {
    throw new Error("bindIsUpdatePhaseInProgress peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(), peers.Gf(), peers.Zru(), peers.riu());
  });
}
