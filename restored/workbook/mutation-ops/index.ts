// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: mutation-ops barrel (thread / chart / conditional-format).

export type * from "./types";
export {
  buildThreadAddOp,
  buildThreadSelector,
  normalizeThreadTarget,
} from "./thread-ops";
export {
  buildChartAddOp,
  buildChartSetOp,
  buildChartProps,
  buildChartSelector,
  cloneChartAnchor,
} from "./chart-ops";
export {
  mapChartSeries,
  serializeChartSeriesItem,
  serializeChartStroke,
  serializeChartMarker,
} from "./chart-series-serialize";
export {
  serializeDataLabels,
  serializeBarOptions,
  serializePieOptions,
  serializeDoughnutOptions,
  serializeChartAreaStyle,
} from "./chart-options-serialize";
export { fillToConfig } from "./chart-fill-config";
export {
  serializeConditionalFormatRule,
  buildConditionalFormatAddOp,
  formatCfRangeAddress,
  serializeCfFormat,
  serializeCfFont,
  serializeCfBorder,
  cloneThresholdValue,
} from "./conditional-format-ops";
export {
  serializeCfFill,
  serializeFillConfig,
  serializeFillFromProto,
  serializePatternFillConfig,
  serializeColorValue,
  colorInputToConfig,
} from "./fill-color-serialize";
