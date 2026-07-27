// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `d2l`) / export `fi`.

export type PrefetchKeyedResourcePeers = {
  p2l: (...args: unknown[]) => unknown;
};

let peers: PrefetchKeyedResourcePeers | null = null;

/** Wire prefetchKeyedResource peers once companions land. */
export function setPrefetchKeyedResourcePeers(next: PrefetchKeyedResourcePeers): void {
  peers = next;
}

/**
 * Bundle export `fi` / internal `d2l`.
 */
async function prefetchKeyedResource(e) {
  if (peers == null) {
    throw new Error("prefetchKeyedResource peers are not configured");
  }

  await peers.p2l[e].prefetch();
}
