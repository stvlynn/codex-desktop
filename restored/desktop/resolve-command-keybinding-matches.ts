// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oEr`) / export `t1`.

export type ResolveCommandKeybindingMatchesPeers = {
  HTr: (...args: unknown[]) => unknown;
  cEr: (...args: unknown[]) => unknown;
  zk: (...args: unknown[]) => unknown;
};

let peers: ResolveCommandKeybindingMatchesPeers | null = null;

/** Wire resolveCommandKeybindingMatches peers once companions land. */
export function setResolveCommandKeybindingMatchesPeers(next: ResolveCommandKeybindingMatchesPeers): void {
  peers = next;
}

/**
 * Bundle export `t1` / internal `oEr`.
 */
export function resolveCommandKeybindingMatches(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("resolveCommandKeybindingMatches peers are not configured");
  }

  return peers.cEr(e, peers.HTr({
    commandId: e,
    keymapState: t,
    isMacOS: n === `macOS`
  }), n).map(e => ({
    accelerator: e,
    label: peers.zk(e, n === `macOS`, n === `linux`)
  }));
}
