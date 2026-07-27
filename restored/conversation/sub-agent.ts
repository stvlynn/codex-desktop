// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dg`) / export `ect`.

export type BindSubAgentPeers = {
  Aot: (...args: unknown[]) => unknown;
  cu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  got: (...args: unknown[]) => unknown;
  og: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  xot: (...args: unknown[]) => unknown;
};

let peers: BindSubAgentPeers | null = null;

/** Wire bindSubAgent peers once companions land. */
export function setBindSubAgentPeers(next: BindSubAgentPeers): void {
  peers = next;
}

/**
 * Bundle export `ect` / internal `dg`.
 */
export function bindSubAgent() {
  if (peers == null) {
    throw new Error("bindSubAgent peers are not configured");
  }

  return peers.e(() => {
    Aot = peers.r(peers.cu(), 1), peers.got(), peers.og(), peers.xot();
  });
}
