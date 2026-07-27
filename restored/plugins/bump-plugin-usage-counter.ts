// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `$Al`) / export `nc`.

export type BumpPluginUsageCounterPeers = {
  counterMap: {
    get: (pluginId: unknown) => number | undefined;
    set: (pluginId: unknown, value: number) => void;
  };
  resolveNotifyTarget: (pluginId: unknown) => unknown | null | undefined;
  notify: (target: unknown) => void;
};

let peers: BumpPluginUsageCounterPeers | null = null;

/** Wire plugin usage counter map once companions land. */
export function setBumpPluginUsageCounterPeers(
  next: BumpPluginUsageCounterPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nc` / internal `$Al`.
 * Bump plugin usage counter and notify listeners.
 */
export function bumpPluginUsageCounter(pluginId: unknown): void {
  if (peers == null) {
    throw new Error("BumpPluginUsageCounter peers are not configured");
  }
  peers.counterMap.set(pluginId, (peers.counterMap.get(pluginId) ?? 0) + 1);
  const target = peers.resolveNotifyTarget(pluginId);
  if (target != null) peers.notify(target);
}
