// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `D5n`) / export `I4`.

export type ResolveForcedHostLayersPeers = {
  O5n: (...args: unknown[]) => unknown;
  u5n: (...args: unknown[]) => unknown;
};

let peers: ResolveForcedHostLayersPeers | null = null;

/** Wire resolveForcedHostLayers peers once companions land. */
export function setResolveForcedHostLayersPeers(next: ResolveForcedHostLayersPeers): void {
  peers = next;
}

/**
 * Bundle export `I4` / internal `D5n`.
 */
async function resolveForcedHostLayers(e, t) {
  if (peers == null) {
    throw new Error("resolveForcedHostLayers peers are not configured");
  }

  let {
    layers: n
  } = await peers.u5n(e, t, null, !0);
  return peers.O5n(n);
}
