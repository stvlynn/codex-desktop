// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Vcn` / export `a9`.

import { memoryConfigKeyByPath } from "./memory-config-key-by-path";

export type MemorySettingOverride = { keyPath: string; value: unknown };

/** Merge memory setting overrides into a memory config snapshot. */
export function applyMemorySettingOverrides<T extends { memories: unknown }>(
  config: T,
  overrides: readonly MemorySettingOverride[],
): T {
  const patch = Object.fromEntries(
    overrides
      .map(({ keyPath, value }) => {
        const key = memoryConfigKeyByPath(keyPath);
        return key == null ? null : [key, value];
      })
      .filter((entry): entry is [string, unknown] => entry != null),
  );
  return {
    ...structuredClone(config),
    memories: mergeMemoryPatch(config.memories, patch),
  };
}

function mergeMemoryPatch(
  memories: unknown,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const base =
    memories != null && typeof memories === "object"
      ? { ...(memories as Record<string, unknown>) }
      : {};
  for (const [key, value] of Object.entries(patch)) {
    if (value == null) delete base[key];
    else base[key] = value;
  }
  return base;
}
