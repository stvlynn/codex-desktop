// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B1`) / export `Jp`.

export type BindCodexThreadPeers = {
  HA: (...args: unknown[]) => unknown;
  L1: (...args: unknown[]) => unknown;
  TK: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hic: (...args: unknown[]) => unknown;
  o0o: (...args: unknown[]) => unknown;
};

let peers: BindCodexThreadPeers | null = null;

/** Wire bindCodexThread peers once companions land. */
export function setBindCodexThreadPeers(next: BindCodexThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `Jp` / internal `B1`.
 */
export function bindCodexThread() {
  if (peers == null) {
    throw new Error("bindCodexThread peers are not configured");
  }

  return peers.e(() => {
    peers.L1(), peers.o0o(), peers.HA(), peers.TK(), hic = `codex:thread:`;
  });
}
