// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dqr`) / export `SX`.

export type BindMcpCapabilityHostViewPeers = {
  Eqr: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindMcpCapabilityHostViewPeers | null = null;

/** Wire bindMcpCapabilityHostView peers once companions land. */
export function setBindMcpCapabilityHostViewPeers(next: BindMcpCapabilityHostViewPeers): void {
  peers = next;
}

/**
 * Bundle export `SX` / internal `Dqr`.
 */
export function bindMcpCapabilityHostView() {
  if (peers == null) {
    throw new Error("bindMcpCapabilityHostView peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Eqr).filter(e => e.entrypoint === `global`));
}
