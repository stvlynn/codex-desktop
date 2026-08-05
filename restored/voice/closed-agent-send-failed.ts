// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$et`) / export `glt`.

export type BindClosedAgentSendFailedPeers = {
  Gf: (...args: unknown[]) => unknown;
  Qet: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eQe: (...args: unknown[]) => unknown;
};

let peers: BindClosedAgentSendFailedPeers | null = null;

/** Wire bindClosedAgentSendFailed peers once companions land. */
export function setBindClosedAgentSendFailedPeers(
  next: BindClosedAgentSendFailedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `glt` / internal `$et`.
 */
export function bindClosedAgentSendFailed() {
  if (peers == null) {
    throw new Error("bindClosedAgentSendFailed peers are not configured");
  }

  return peers.e(() => {
    (peers.eQe(), peers.Gf(), (Qet = `closed_agent_send_failed`));
  });
}
