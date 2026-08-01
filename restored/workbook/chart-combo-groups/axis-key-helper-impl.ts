// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: combo group axis key (legacy bxe).
// Stage-3 wave-142.

export function bxe(whIn9195: any) {
  return whIn9195.yAxis?.id === undefined
    ? whIn9195.isPrimaryValueAxis
      ? "axis:primary"
      : `group:${whIn9195.firstSeriesIndex}`
    : `axis:${whIn9195.yAxis.id}`;
}
