// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iQl`) / export `ia`.

export type UsageHeatmapColumnsPeers = {
  CQl: (...args: unknown[]) => unknown;
  fQl: (...args: unknown[]) => unknown;
  vQl: (...args: unknown[]) => unknown;
  yQl: (...args: unknown[]) => unknown;
};

let peers: UsageHeatmapColumnsPeers | null = null;

/** Wire usageHeatmapColumns peers once companions land. */
export function setUsageHeatmapColumnsPeers(
  next: UsageHeatmapColumnsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ia` / internal `iQl`.
 */
export function usageHeatmapColumns({
  dailyUsage: e,
  todayIso: t,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("usageHeatmapColumns peers are not configured");
  }
  let n = peers.CQl(peers.yQl(t), -175);
  return peers
    .fQl(
      peers.vQl({
        columnCount: 26,
        dailyUsage: e,
        startDateIso: n,
        todayIso: t,
      }),
    )
    .map((e, r) => (peers.CQl(n, r) > t ? null : e));
}
