// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kln`) / export `G7`.

export type DebugOverridePeers = {
  Au: (...args: unknown[]) => unknown;
  Dln: (...args: unknown[]) => unknown;
  Eln: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Oln: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Tln: (...args: unknown[]) => unknown;
  Yx: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  wln: (...args: unknown[]) => unknown;
};

let peers: DebugOverridePeers | null = null;

/** Wire debugOverride peers once companions land. */
export function setDebugOverridePeers(next: DebugOverridePeers): void {
  peers = next;
}

/**
 * Bundle export `G7` / internal `kln`.
 */
export function debugOverride() {
  if (peers == null) {
    throw new Error("debugOverride peers are not configured");
  }
  return peers.e(() => {
    peers.Ho(), peers.Au(), peers.ed(), peers.Yx(), wln = {
      status: `allowed`,
      debugOverride: !0
    }, Tln = {
      status: `denied`,
      debugOverride: !0,
      reason: `debug-override`
    }, Eln = peers.Ta(peers.Q, null), Dln = peers.Ta(peers.Q, null), Oln = peers.Ta(peers.Q, null);
  });
}
