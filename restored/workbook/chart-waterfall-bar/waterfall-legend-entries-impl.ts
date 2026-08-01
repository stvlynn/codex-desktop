// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall legend entry list (legacy ebe / Binding898).
// Stage-3 wave-140.

import { Cn } from "../presentation-protobuf";

/** Legacy Binding898 */
export const WATERFALL_LEGEND_ENTRIES = [
  { label: "Increase", slot: "accent1", fallback: "#5b9bd5" },
  { label: "Decrease", slot: "accent2", fallback: "#ed7d31" },
  { label: "Total", slot: "accent3", fallback: "#a5a5a5" },
] as const;

export function ebe(cwbIn8770: any) {
  return WATERFALL_LEGEND_ENTRIES.map((item) => ({
    label: item.label,
    seriesIndex: 0,
    chartType: Cn.CHART_TYPE_WATERFALL,
    fillColor: cwbIn8770.colorMap?.[item.slot] ?? item.fallback,
  }));
}
