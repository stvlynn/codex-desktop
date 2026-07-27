// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `B_`) / export `jot`.

export type UseStatsigConfigValuePairPeers = {
  useScope: () => unknown;
  useConfigValue: (configKey: unknown, name: unknown) => unknown;
  configKey: unknown;
  writeConfigValue: (scope: unknown, name: unknown, value: unknown) => void;
};

let peers: UseStatsigConfigValuePairPeers | null = null;

/** Wire useStatsigConfigValuePair peers once companions land. */
export function setUseStatsigConfigValuePairPeers(
  next: UseStatsigConfigValuePairPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jot` / internal `B_`.
 * Return a Statsig config value plus a setter bound to scope.
 */
export function useStatsigConfigValuePair(
  name: unknown,
): [unknown, (value: unknown) => void] {
  if (peers == null) {
    throw new Error("UseStatsigConfigValuePair peers are not configured");
  }
  const scope = peers.useScope();
  const value = peers.useConfigValue(peers.configKey, name);
  const setValue = (next: unknown) => {
    peers!.writeConfigValue(scope, name, next);
  };
  return [value, setValue];
}
