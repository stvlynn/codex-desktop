// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lcn`) / export `o9`.

export type ParseMemoriesConfigOverlayPeers = {
  Bx: (...args: unknown[]) => unknown;
  Gcn: (...args: unknown[]) => unknown;
};

let peers: ParseMemoriesConfigOverlayPeers | null = null;

/** Wire parseMemoriesConfigOverlay peers once companions land. */
export function setParseMemoriesConfigOverlayPeers(next: ParseMemoriesConfigOverlayPeers): void {
  peers = next;
}

/**
 * Bundle export `o9` / internal `Lcn`.
 */
export function parseMemoriesConfigOverlay(e: unknown) {
  if (peers == null) {
    throw new Error("parseMemoriesConfigOverlay peers are not configured");
  }

  if (e == null) return peers.Bx;
  let t = peers.Gcn.safeParse(e.memories);
  if (!t.success) return peers.Bx;
  let n = t.data;
  return {
    generateMemories: n.generate_memories ?? peers.Bx.generateMemories,
    useMemories: n.use_memories ?? peers.Bx.useMemories,
    disableOnExternalContext:
      n.disable_on_external_context ??
      n.no_memories_if_mcp_or_web_search ??
      peers.Bx.disableOnExternalContext,
    maxRawMemoriesForConsolidation:
      n.max_raw_memories_for_consolidation ??
      peers.Bx.maxRawMemoriesForConsolidation,
    maxUnusedDays: n.max_unused_days ?? peers.Bx.maxUnusedDays,
    maxRolloutAgeDays: n.max_rollout_age_days ?? peers.Bx.maxRolloutAgeDays,
    maxRolloutsPerStartup:
      n.max_rollouts_per_startup ?? peers.Bx.maxRolloutsPerStartup,
    minRolloutIdleHours:
      n.min_rollout_idle_hours ?? peers.Bx.minRolloutIdleHours,
    extractModel: n.extract_model ?? peers.Bx.extractModel,
    consolidationModel: n.consolidation_model ?? peers.Bx.consolidationModel,
  };
}
