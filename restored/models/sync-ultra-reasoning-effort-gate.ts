// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WJr`) / export `rX`.

export type SyncUltraReasoningEffortGatePeers = {
  GJr: (...args: unknown[]) => unknown;
  Sp: (...args: unknown[]) => unknown;
  Tu: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
};
let peers: SyncUltraReasoningEffortGatePeers | null = null;

/** Wire syncUltraReasoningEffortGate peers once companions land. */
export function setSyncUltraReasoningEffortGatePeers(
  next: SyncUltraReasoningEffortGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rX` / internal `WJr`.
 */
export async function syncUltraReasoningEffortGate(
  e: unknown,
  { enabled, hostId, listModelsData, reasoningEffort }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("syncUltraReasoningEffortGate peers are not configured");
  }
  let a = peers.xp(e.get, peers.Tu.enabledReasoningEfforts),
    o = a;
  enabled && !a.includes(reasoningEffort)
    ? (o = [...a, reasoningEffort])
    : !enabled &&
      a.includes(reasoningEffort) &&
      (o = a.filter((item) => {
        return item !== reasoningEffort;
      }));
  o !== a &&
    (!enabled &&
      (reasoningEffort === "max" || reasoningEffort === "ultra") &&
      (await peers.GJr(e, hostId, listModelsData, reasoningEffort)),
    await peers.Sp(e, peers.Tu.enabledReasoningEfforts, o));
}
