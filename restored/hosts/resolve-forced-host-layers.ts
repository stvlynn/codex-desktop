// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `D5n`) / export `I4`.

export type ResolveForcedHostLayersPeers = {
  loadLayers: (
    store: unknown,
    hostId: unknown,
    overlay: null,
    forced: boolean,
  ) => Promise<{ layers: unknown }>;
  resolveLayers: (layers: unknown) => unknown;
};

let peers: ResolveForcedHostLayersPeers | null = null;

/** Wire resolveForcedHostLayers peers once companions land. */
export function setResolveForcedHostLayersPeers(
  next: ResolveForcedHostLayersPeers,
): void {
  peers = next;
}

/**
 * Bundle export `I4` / internal `D5n`.
 * Load forced host config layers and resolve them.
 */
export async function resolveForcedHostLayers(
  store: unknown,
  hostId: unknown,
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ResolveForcedHostLayers peers are not configured");
  }
  const { layers } = await peers.loadLayers(store, hostId, null, true);
  return peers.resolveLayers(layers);
}
