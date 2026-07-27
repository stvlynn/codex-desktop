// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Lcn`) / export `o9`.

export type MemoriesConfigOverlay = {
  generateMemories: unknown;
  useMemories: unknown;
  disableOnExternalContext: unknown;
  maxRawMemoriesForConsolidation: unknown;
  maxUnusedDays: unknown;
  maxRolloutAgeDays: unknown;
  maxRolloutsPerStartup: unknown;
  minRolloutIdleHours: unknown;
  extractModel: unknown;
  consolidationModel: unknown;
};

export type ParseMemoriesConfigOverlayPeers = {
  defaults: MemoriesConfigOverlay;
  safeParse: (value: unknown) => {
    success: boolean;
    data?: {
      generate_memories?: unknown;
      use_memories?: unknown;
      disable_on_external_context?: unknown;
      no_memories_if_mcp_or_web_search?: unknown;
      max_raw_memories_for_consolidation?: unknown;
      max_unused_days?: unknown;
      max_rollout_age_days?: unknown;
      max_rollouts_per_startup?: unknown;
      min_rollout_idle_hours?: unknown;
      extract_model?: unknown;
      consolidation_model?: unknown;
    };
  };
};

let peers: ParseMemoriesConfigOverlayPeers | null = null;

/** Wire memories overlay schema once companions land. */
export function setParseMemoriesConfigOverlayPeers(
  next: ParseMemoriesConfigOverlayPeers,
): void {
  peers = next;
}

/**
 * Bundle export `o9` / internal `Lcn`.
 * Parse a config overlay's memories section into UI defaults.
 */
export function parseMemoriesConfigOverlay(
  config?: { memories?: unknown } | null,
): MemoriesConfigOverlay {
  if (peers == null) {
    throw new Error("ParseMemoriesConfigOverlay peers are not configured");
  }
  if (config == null) return peers.defaults;
  const parsed = peers.safeParse(config.memories);
  if (!parsed.success || parsed.data == null) return peers.defaults;
  const data = parsed.data;
  return {
    generateMemories: data.generate_memories ?? peers.defaults.generateMemories,
    useMemories: data.use_memories ?? peers.defaults.useMemories,
    disableOnExternalContext:
      data.disable_on_external_context ??
      data.no_memories_if_mcp_or_web_search ??
      peers.defaults.disableOnExternalContext,
    maxRawMemoriesForConsolidation:
      data.max_raw_memories_for_consolidation ??
      peers.defaults.maxRawMemoriesForConsolidation,
    maxUnusedDays: data.max_unused_days ?? peers.defaults.maxUnusedDays,
    maxRolloutAgeDays:
      data.max_rollout_age_days ?? peers.defaults.maxRolloutAgeDays,
    maxRolloutsPerStartup:
      data.max_rollouts_per_startup ?? peers.defaults.maxRolloutsPerStartup,
    minRolloutIdleHours:
      data.min_rollout_idle_hours ?? peers.defaults.minRolloutIdleHours,
    extractModel: data.extract_model ?? peers.defaults.extractModel,
    consolidationModel:
      data.consolidation_model ?? peers.defaults.consolidationModel,
  };
}
