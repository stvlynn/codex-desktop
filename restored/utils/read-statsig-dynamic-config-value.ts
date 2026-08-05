// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tPl` / export `_s`.

export type StatsigClientLike = {
  getDynamicConfig?: (name: string) => { value?: unknown } | null | undefined;
};

let dynamicConfigName = "";
let normalizeConfigValue: (value: unknown) => unknown = (value) => value;

/** Wire Statsig config name + normalizer used by `_s`. */
export function bindStatsigDynamicConfigReader(options: {
  configName: string;
  normalize?: (value: unknown) => unknown;
}): void {
  dynamicConfigName = options.configName;
  if (options.normalize) normalizeConfigValue = options.normalize;
}

/** Read + normalize a Statsig dynamic config value from a client. */
export function readStatsigDynamicConfigValue(
  client: StatsigClientLike | null | undefined,
): unknown {
  return normalizeConfigValue(
    client?.getDynamicConfig?.(dynamicConfigName)?.value ?? {},
  );
}
