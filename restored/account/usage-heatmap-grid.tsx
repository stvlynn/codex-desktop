// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `rQl`) / export `la`.
// Heavy grid renderers bind via setUsageHeatmapGridRenderers (conversation-page style).

import type { ReactElement, ReactNode } from "react";

export type UsageHeatmapView = "cumulative" | "daily" | "weekly" | string;

export type UsageHeatmapGridModel = {
  columnCount: number;
  dailyUsage: unknown;
  startDateIso: string;
  todayIso: string;
  [key: string]: unknown;
};

export type UsageHeatmapGridProps = {
  dailyUsage?: unknown;
  todayIso?: string;
  view?: UsageHeatmapView;
};

export type UsageHeatmapGridHelpers = {
  buildModel: (input: {
    columnCount: number;
    dailyUsage: unknown;
    startDateIso: string;
    todayIso: string;
  }) => UsageHeatmapGridModel;
  columnCountForToday: (todayIso: string) => number;
  renderCumulative: (model: UsageHeatmapGridModel) => ReactNode;
  renderDaily: (model: UsageHeatmapGridModel) => ReactNode;
  renderWeekly: (model: UsageHeatmapGridModel) => ReactNode;
  startDateIsoForToday: (todayIso: string) => string;
};

let helpers: UsageHeatmapGridHelpers | null = null;

/** Wire heatmap model + view renderers once companions land. */
export function setUsageHeatmapGridRenderers(
  next: UsageHeatmapGridHelpers,
): void {
  helpers = next;
}

/**
 * Bundle export `la` / internal `rQl`.
 * Routes dailyUsage through cumulative/daily/weekly heatmap views.
 */
export function UsageHeatmapGrid(props: UsageHeatmapGridProps): ReactElement {
  const { dailyUsage, todayIso = "", view } = props;
  if (helpers == null) {
    throw new Error("UsageHeatmapGrid renderers are not configured");
  }
  const model = helpers.buildModel({
    columnCount: helpers.columnCountForToday(todayIso),
    dailyUsage,
    startDateIso: helpers.startDateIsoForToday(todayIso),
    todayIso,
  });
  switch (view) {
    case "cumulative":
      return helpers.renderCumulative(model) as ReactElement;
    case "daily":
      return helpers.renderDaily(model) as ReactElement;
    case "weekly":
      return helpers.renderWeekly(model) as ReactElement;
    default:
      throw new Error(`Unknown UsageHeatmapGrid view: ${String(view)}`);
  }
}
