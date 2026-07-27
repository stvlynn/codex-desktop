// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `WJr`) / export `rX`.

export type SyncUltraReasoningEffortGatePeers = {
  readEnabledEfforts: (
    get: (atom: unknown) => unknown,
    key: unknown,
  ) => unknown[];
  enabledReasoningEffortsKey: unknown;
  clearUltraEffortIfNeeded: (
    scope: unknown,
    hostId: unknown,
    listModelsData: unknown,
    effort: unknown,
  ) => Promise<unknown>;
  writeEnabledEfforts: (
    scope: unknown,
    key: unknown,
    value: unknown[],
  ) => Promise<unknown>;
};

let peers: SyncUltraReasoningEffortGatePeers | null = null;

/** Wire ultra reasoning-effort gate peers once companions land. */
export function setSyncUltraReasoningEffortGatePeers(
  next: SyncUltraReasoningEffortGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rX` / internal `WJr`.
 * Sync enabled reasoning efforts when ultra/max gate toggles.
 */
export async function syncUltraReasoningEffortGate(
  scope: { get: (atom: unknown) => unknown },
  args: {
    enabled: boolean;
    hostId: unknown;
    listModelsData: unknown;
    reasoningEffort: unknown;
  },
): Promise<void> {
  if (peers == null) {
    throw new Error("SyncUltraReasoningEffortGate peers are not configured");
  }
  const { enabled, hostId, listModelsData, reasoningEffort } = args;
  const current = peers.readEnabledEfforts(
    scope.get,
    peers.enabledReasoningEffortsKey,
  );
  let next = current;
  if (enabled && !current.includes(reasoningEffort)) {
    next = [...current, reasoningEffort];
  } else if (!enabled && current.includes(reasoningEffort)) {
    next = current.filter((effort) => effort !== reasoningEffort);
  }
  if (next !== current) {
    if (
      !enabled &&
      (reasoningEffort === "max" || reasoningEffort === "ultra")
    ) {
      await peers.clearUltraEffortIfNeeded(
        scope,
        hostId,
        listModelsData,
        reasoningEffort,
      );
    }
    await peers.writeEnabledEfforts(
      scope,
      peers.enabledReasoningEffortsKey,
      next,
    );
  }
}
