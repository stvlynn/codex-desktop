// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hqn`) / export `J8`.

export type CollectDebugPanelTurnFilesPeers = {
  Bqn: (...args: unknown[]) => unknown;
  Kat: (...args: unknown[]) => unknown;
  MSt: (...args: unknown[]) => unknown;
  PSt: (...args: unknown[]) => unknown;
  Rat: (...args: unknown[]) => unknown;
  Rqn: (...args: unknown[]) => unknown;
  Vqn: (...args: unknown[]) => unknown;
  artifactScanContent: (...args: unknown[]) => unknown;
  zqn: (...args: unknown[]) => unknown;
};

let peers: CollectDebugPanelTurnFilesPeers | null = null;

/** Wire collectDebugPanelTurnFiles peers once companions land. */
export function setCollectDebugPanelTurnFilesPeers(next: CollectDebugPanelTurnFilesPeers): void {
  peers = next;
}

/**
 * Bundle export `J8` / internal `Hqn`.
 */
export function collectDebugPanelTurnFiles(e: unknown) {
  if (peers == null) {
    throw new Error("collectDebugPanelTurnFiles peers are not configured");
  }

  let t = peers.Rqn(),
    n = peers.Kat(e),
    r = peers.MSt(e.items);
  for (let [i, a] of e.items.entries()) if (a) {
    if (a.type === `fileChange`) peers.zqn(t, a);else if (a.type === `agentMessage`) {
      let o = e.status === `inProgress` && i === r,
        s = peers.PSt(a.text, o);
      if (s.removed && s.content.length === 0) continue;
      peers.Bqn(t, (o ? null : peers.Rat({
        content: s.content,
        isHeartbeatAutomationTurn: n
      }))?.artifactScanContent ?? s.content);
    }
  }
  return peers.Vqn(t);
}
