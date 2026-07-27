// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `iQl`) / export `ia`.

export type UsageHeatmapColumnsPeers = {
  shiftIso: (iso: string, days: number) => string;
  parseToday: (iso: string) => string;
  buildGrid: (args: {
    columnCount: number;
    dailyUsage: unknown;
    startDateIso: string;
    todayIso: string;
  }) => unknown[];
  mapColumns: (grid: unknown[]) => Array<number | null>;
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
 * Project daily usage into 26 heatmap columns (null after today).
 */
export type UsageHeatmapColumnArgs = {
  dailyUsage: unknown;
  todayIso: string;
};

export function usageHeatmapColumns(
  args: UsageHeatmapColumnArgs,
): Array<number | null> {
  if (peers == null) {
    throw new Error("UsageHeatmapColumns peers are not configured");
  }
  const startDateIso = peers.shiftIso(peers.parseToday(args.todayIso), -175);
  const grid = peers.mapColumns(
    peers.buildGrid({
      columnCount: 26,
      dailyUsage: args.dailyUsage,
      startDateIso,
      todayIso: args.todayIso,
    }),
  );
  return grid.map((value, index) =>
    peers!.shiftIso(startDateIso, index) > args.todayIso ? null : value,
  );
}
