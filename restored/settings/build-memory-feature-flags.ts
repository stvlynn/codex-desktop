// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Mfu`) / export `Ut`.

export type BuildMemoryFeatureFlagsPeers = {
  /* no free peers */
};
let peers: BuildMemoryFeatureFlagsPeers | null = null;

/** Wire buildMemoryFeatureFlags peers once companions land. */
export function setBuildMemoryFeatureFlagsPeers(
  next: BuildMemoryFeatureFlagsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ut` / internal `Mfu`.
 */
export function buildMemoryFeatureFlags({
  isMemoryFeatureEnabled,
  memoryConfig,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("buildMemoryFeatureFlags peers are not configured");
  }
  return {
    memoryFeatureEnabled: isMemoryFeatureEnabled,
    generateMemoriesEnabled: memoryConfig.generateMemories,
    useMemoriesEnabled: memoryConfig.useMemories,
    memoriesEnabled:
      isMemoryFeatureEnabled &&
      memoryConfig.generateMemories &&
      memoryConfig.useMemories,
  };
}
