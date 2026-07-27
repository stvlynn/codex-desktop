// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ucn` companion for export `a9`.

/** Map dotted memory config key paths to memories object keys. */
export const MEMORY_CONFIG_KEY_BY_PATH: Record<string, string> = {
  "memories.generate_memories": "generate_memories",
  "memories.use_memories": "use_memories",
  "memories.disable_on_external_context": "disable_on_external_context",
  "memories.no_memories_if_mcp_or_web_search":
    "no_memories_if_mcp_or_web_search",
  "memories.max_raw_memories_for_consolidation":
    "max_raw_memories_for_consolidation",
  "memories.max_unused_days": "max_unused_days",
  "memories.max_rollout_age_days": "max_rollout_age_days",
  "memories.max_rollouts_per_startup": "max_rollouts_per_startup",
  "memories.min_rollout_idle_hours": "min_rollout_idle_hours",
  "memories.extract_model": "extract_model",
  "memories.consolidation_model": "consolidation_model",
};

export function memoryConfigKeyByPath(keyPath: string): string | undefined {
  return MEMORY_CONFIG_KEY_BY_PATH[keyPath];
}
