// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: chart label align tokens (legacy Binding1369).

export const chartLabelAlign = {
  center: "center",
  topLeft: "topLeft",
  topCenter: "topCenter",
  topRight: "topRight",
  left: "left",
  right: "right",
  bottomLeft: "bottomLeft",
  bottomCenter: "bottomCenter",
  bottomRight: "bottomRight",
} as const;

export type ChartLabelAlign =
  (typeof chartLabelAlign)[keyof typeof chartLabelAlign];

export function ensureChartLabelAlignInit(): void {
  void chartLabelAlign;
}
