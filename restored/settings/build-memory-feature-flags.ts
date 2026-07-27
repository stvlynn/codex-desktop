// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Stage 3: Wave BY — small real body for memory feature flag projection.

export type MemoryConfigLike = {
  generateMemories?: boolean;
  useMemories?: boolean;
  [key: string]: unknown;
};

export type MemoryFeatureFlags = {
  memoryFeatureEnabled: boolean;
  generateMemoriesEnabled: boolean | undefined;
  useMemoriesEnabled: boolean | undefined;
};

/**
 * Project memory settings into a flat feature-flag bag.
 * Bundle export `Ut` / internal `Mfu`.
 */
export function buildMemoryFeatureFlags(input: {
  isMemoryFeatureEnabled: boolean;
  memoryConfig: MemoryConfigLike;
}): MemoryFeatureFlags {
  return {
    memoryFeatureEnabled: input.isMemoryFeatureEnabled,
    generateMemoriesEnabled: input.memoryConfig.generateMemories,
    useMemoriesEnabled: input.memoryConfig.useMemories,
  };
}
