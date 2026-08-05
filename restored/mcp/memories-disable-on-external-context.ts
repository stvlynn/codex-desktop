// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qcn`) / export `s9`.

export type MemoriesDisableOnExternalContextPeers = {
  Bx: (...args: unknown[]) => unknown;
  Gcn: (...args: unknown[]) => unknown;
  Kcn: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Ucn: (...args: unknown[]) => unknown;
  Uue: (...args: unknown[]) => unknown;
  Wcn: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _l: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  ul: (...args: unknown[]) => unknown;
};

let peers: MemoriesDisableOnExternalContextPeers | null = null;

/** Wire memoriesDisableOnExternalContext peers once companions land. */
export function setMemoriesDisableOnExternalContextPeers(
  next: MemoriesDisableOnExternalContextPeers,
): void {
  peers = next;
}

/**
 * Bundle export `s9` / internal `qcn`.
 */
export function memoriesDisableOnExternalContext() {
  if (peers == null) {
    throw new Error(
      "memoriesDisableOnExternalContext peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Sl(),
      (Bx = {
        generateMemories: !0,
        useMemories: !0,
        disableOnExternalContext: !1,
        maxRawMemoriesForConsolidation: 256,
        maxUnusedDays: 30,
        maxRolloutAgeDays: 30,
        maxRolloutsPerStartup: 16,
        minRolloutIdleHours: 6,
        extractModel: null,
        consolidationModel: null,
      }),
      (Ucn = {
        "memories.generate_memories": `generate_memories`,
        "memories.use_memories": `use_memories`,
        "memories.disable_on_external_context": `disable_on_external_context`,
        "memories.no_memories_if_mcp_or_web_search": `no_memories_if_mcp_or_web_search`,
        "memories.max_raw_memories_for_consolidation": `max_raw_memories_for_consolidation`,
        "memories.max_unused_days": `max_unused_days`,
        "memories.max_rollout_age_days": `max_rollout_age_days`,
        "memories.max_rollouts_per_startup": `max_rollouts_per_startup`,
        "memories.min_rollout_idle_hours": `min_rollout_idle_hours`,
        "memories.extract_model": `extract_model`,
        "memories.consolidation_model": `consolidation_model`,
      }),
      (Wcn = peers
        .ul([peers.rl(), peers.Uue()])
        .transform((e) => Number(peers.e))
        .pipe(peers.rl().int().nonnegative())),
      (Gcn = peers
        .sl({
          generate_memories: peers
            .il()
            .optional()
            .catch(void 0),
          use_memories: peers
            .il()
            .optional()
            .catch(void 0),
          disable_on_external_context: peers
            .il()
            .optional()
            .catch(void 0),
          no_memories_if_mcp_or_web_search: peers
            .il()
            .optional()
            .catch(void 0),
          max_raw_memories_for_consolidation:
            peers.Wcn.optional().catch(void 0),
          max_unused_days: peers.Wcn.optional().catch(void 0),
          max_rollout_age_days: peers.Wcn.optional().catch(void 0),
          max_rollouts_per_startup: peers.Wcn.optional().catch(void 0),
          min_rollout_idle_hours: peers.Wcn.optional().catch(void 0),
          extract_model: peers
            .X()
            .nullable()
            .optional()
            .catch(void 0),
          consolidation_model: peers
            .X()
            .nullable()
            .optional()
            .catch(void 0),
        })
        .partial()),
      (Kcn = peers.fl(peers.X(), peers._l())));
  });
}
