// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jEu`) / export `r`.

export type DeferredHostsRPeers = {
  Au: (...args: unknown[]) => unknown;
  C2r: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  NSo: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  __: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredHostsRPeers | null = null;

/** Wire deferredHostsR peers once companions land. */
export function setDeferredHostsRPeers(next: DeferredHostsRPeers): void {
  peers = next;
}

/**
 * Bundle export `r` / internal `jEu`.
 */
export function deferredHostsR() {
  if (peers == null) {
    throw new Error("deferredHostsR peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Vf(), peers.C2r(), peers.__(), peers.NSo(), peers.Gf(), peers.ap();
  });
}
