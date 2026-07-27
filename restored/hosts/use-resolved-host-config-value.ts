// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `kX`) / export `EC`.

export type UseResolvedHostConfigValuePeers = {
  readHostConfigScope: () => { value: unknown };
  normalizeHostConfig: (value: unknown) => unknown;
  isActiveForConfig: (config: unknown) => boolean;
  useResolvedValue: (
    key: unknown,
    fallback: unknown,
    options: Record<string, unknown>,
  ) => unknown;
};

let peers: UseResolvedHostConfigValuePeers | null = null;

/** Wire useResolvedHostConfigValue peers once companions land. */
export function setUseResolvedHostConfigValuePeers(
  next: UseResolvedHostConfigValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `EC` / internal `kX`.
 * Resolve a host-config value with an isActive predicate from scope.
 */
export function useResolvedHostConfigValue(
  key: unknown,
  fallback: unknown,
  options: Record<string, unknown> = {},
): unknown {
  if (peers == null) {
    throw new Error("UseResolvedHostConfigValue peers are not configured");
  }
  const scope = peers.readHostConfigScope();
  const config = peers.normalizeHostConfig(scope.value);
  return peers.useResolvedValue(key, fallback, {
    ...options,
    isActive: () => peers!.isActiveForConfig(config),
  });
}
