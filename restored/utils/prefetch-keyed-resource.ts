// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `d2l`) / export `fi`.

export type PrefetchKeyedResourcePeers = {
  registry: Record<string, { prefetch: () => Promise<unknown> }>;
};

let peers: PrefetchKeyedResourcePeers | null = null;

/** Wire prefetchKeyedResource peers once companions land. */
export function setPrefetchKeyedResourcePeers(
  next: PrefetchKeyedResourcePeers,
): void {
  peers = next;
}

/**
 * Bundle export `fi` / internal `d2l`.
 * Prefetch a keyed resource from the registry.
 */
export async function prefetchKeyedResource(key: string): Promise<void> {
  if (peers == null) {
    throw new Error("PrefetchKeyedResource peers are not configured");
  }
  await peers.registry[key].prefetch();
}
