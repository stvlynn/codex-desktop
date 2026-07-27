// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Read a boolean feature flag from config.toml-shaped objects (`Ope` / export `Ygt`).

/**
 * Prefer `features.<name>` then nested `features[name]`.
 * Bundle `Ope` / export `Ygt`.
 */
export function readConfigFeatureFlag(
  config: Record<string, unknown> | null | undefined,
  featureName: string,
): boolean | undefined {
  const dotted = config?.[`features.${featureName}`];
  if (typeof dotted === "boolean") return dotted;

  const features = config?.features;
  if (typeof features != "object" || !features || Array.isArray(features)) {
    return undefined;
  }

  const value = Object.getOwnPropertyDescriptor(features, featureName)?.value;
  return typeof value === "boolean" ? value : undefined;
}
