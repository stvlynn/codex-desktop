// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vzi`) / export `sU`.

export type ResolvePanelSessionTargetPeers = {
  Hzi: (...args: unknown[]) => unknown;
  Xzi: (...args: unknown[]) => unknown;
  Zzi: (...args: unknown[]) => unknown;
};

let peers: ResolvePanelSessionTargetPeers | null = null;

/** Wire resolvePanelSessionTarget peers once companions land. */
export function setResolvePanelSessionTargetPeers(next: ResolvePanelSessionTargetPeers): void {
  peers = next;
}

/**
 * Bundle export `sU` / internal `Vzi`.
 */
export function resolvePanelSessionTarget(e: unknown, t: unknown, n: unknown = peers.Xzi(e),
) {
  if (peers == null) {
    throw new Error("resolvePanelSessionTarget peers are not configured");
  }

  return peers.Hzi(e, t == null ? n : peers.Zzi(e, t, n), t);
}
