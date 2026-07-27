// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ome`) / export `Kgt`.

export type BindBindAgentModeByHostIdPeers = {
  Sl: (...args: unknown[]) => unknown;
  Zpe: (...args: unknown[]) => unknown;
  ame: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ime: (...args: unknown[]) => unknown;
  rme: (...args: unknown[]) => unknown;
  tpe: (...args: unknown[]) => unknown;
};

let peers: BindBindAgentModeByHostIdPeers | null = null;

/** Wire bindBindAgentModeByHostId peers once companions land. */
export function setBindBindAgentModeByHostIdPeers(next: BindBindAgentModeByHostIdPeers): void {
  peers = next;
}

/**
 * Bundle export `Kgt` / internal `ome`.
 */
export function bindBindAgentModeByHostId() {
  if (peers == null) {
    throw new Error("bindBindAgentModeByHostId peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.rme(),
      (ime = `agent-mode-by-host-id`),
      (ame = peers.tpe.enum(peers.Zpe)));
  });
}
