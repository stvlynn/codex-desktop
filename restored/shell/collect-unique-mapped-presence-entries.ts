// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Qvu`) / export `X`.

export type CollectUniqueMappedPresenceEntriesPeers = {
  mapProcessMetrics: (
    process: unknown,
    options: unknown,
    context: unknown,
  ) => { pid: unknown } | null | undefined;
  scorePresence: (
    entry: { metrics: unknown; process: unknown },
    context: unknown,
  ) => number | null | undefined;
  minScore: number;
};

let peers: CollectUniqueMappedPresenceEntriesPeers | null = null;

/** Wire unique presence-entry peers once companions land. */
export function setCollectUniqueMappedPresenceEntriesPeers(
  next: CollectUniqueMappedPresenceEntriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `X` / internal `Qvu`.
 * Map processes to unique presence entries, dropping low scores / dup pids.
 */
export function collectUniqueMappedPresenceEntries(
  processes: unknown[],
  options: unknown,
  context: unknown,
): Array<{ metrics: { pid: unknown }; process: unknown }> {
  if (peers == null) {
    throw new Error(
      "CollectUniqueMappedPresenceEntries peers are not configured",
    );
  }
  const out: Array<{ metrics: { pid: unknown }; process: unknown }> = [];
  const seen = new Set<unknown>();
  for (const process of processes) {
    const metrics = peers.mapProcessMetrics(process, options, context);
    if (metrics == null) continue;
    const score = peers.scorePresence({ metrics, process }, context);
    if ((score != null && score < peers.minScore) || seen.has(metrics.pid)) {
      continue;
    }
    seen.add(metrics.pid);
    out.push({ metrics, process });
  }
  return out;
}
