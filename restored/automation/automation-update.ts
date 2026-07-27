// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qqn`) / export `q8`.

export type AutomationUpdatePeers = {
  Il: (...args: unknown[]) => unknown;
  Zqn: (...args: unknown[]) => unknown;
  c_: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: AutomationUpdatePeers | null = null;

/** Wire automationUpdate peers once companions land. */
export function setAutomationUpdatePeers(next: AutomationUpdatePeers): void {
  peers = next;
}

/**
 * Bundle export `q8` / internal `Qqn`.
 */
export function automationUpdate() {
  if (peers == null) {
    throw new Error("automationUpdate peers are not configured");
  }

  return peers.e(() => {
    Zqn = peers.r(peers.Il(), 1), peers.c_();
  });
}
