// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `ntu`) / export `mr`.

export type RefreshStatsigValuesWithDiagnosticsPeers = {
  nextGeneration: () => number;
  now: () => number;
  logDiagnostic: (event: string, payload: Record<string, unknown>) => void;
  refresh: (client: unknown, reason: unknown) => Promise<unknown>;
};

let peers: RefreshStatsigValuesWithDiagnosticsPeers | null = null;

/** Wire refreshStatsigValuesWithDiagnostics peers once companions land. */
export function setRefreshStatsigValuesWithDiagnosticsPeers(next: RefreshStatsigValuesWithDiagnosticsPeers): void {
  peers = next;
}

/**
 * Bundle export `mr` / internal `ntu`.
 * Refresh Statsig values and emit timing diagnostics.
 */
export async function refreshStatsigValuesWithDiagnostics(client: unknown, reason: unknown): Promise<unknown> {
  if (peers == null) {
    throw new Error(
      "RefreshStatsigValuesWithDiagnostics peers are not configured",
    );
  }
  const generation = peers.nextGeneration();
  const startedAt = peers.now();
  const mark = (phase: string) => {
    peers!.logDiagnostic("statsig_refresh", {
      generation,
      phase,
      reason,
      elapsedMs: peers!.now() - startedAt,
    });
  };
  mark("start");
  try {
    const result = await peers.refresh(client, reason);
    mark("success");
    return result;
  } catch (error) {
    mark("error");
    throw error;
  }
}
