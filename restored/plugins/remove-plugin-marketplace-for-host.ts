// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `k3i`) / export `uz`.

export type RemovePluginMarketplaceForHostPeers = {
  buildRemover: (input: {
    hostId: unknown;
  }) => (args: { marketplaceName: unknown }) => Promise<void>;
};

let peers: RemovePluginMarketplaceForHostPeers | null = null;

/** Wire removePluginMarketplaceForHost peers once companions land. */
export function setRemovePluginMarketplaceForHostPeers(
  next: RemovePluginMarketplaceForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uz` / internal `k3i`.
 * Return an async remover for a host marketplace + local refresh.
 */
export function removePluginMarketplaceForHost(options?: {
  hostId?: unknown;
}): (args: { marketplaceName: unknown }) => Promise<void> {
  if (peers == null) {
    throw new Error("RemovePluginMarketplaceForHost peers are not configured");
  }
  return peers.buildRemover({ hostId: options?.hostId ?? "local" });
}
