// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Kn } from "../presentation-protobuf";

export const trendlineTypeNameToProto = {
  linear: Kn.TRENDLINE_TYPE_LINEAR,
  exponential: Kn.TRENDLINE_TYPE_EXPONENTIAL,
  logarithmic: Kn.TRENDLINE_TYPE_LOGARITHMIC,
  polynomial: Kn.TRENDLINE_TYPE_POLYNOMIAL,
  power: Kn.TRENDLINE_TYPE_POWER,
  movingAverage: Kn.TRENDLINE_TYPE_MOVING_AVERAGE,
} as const;

export const trendlineTypeProtoToName = {
  [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
  [Kn.TRENDLINE_TYPE_EXPONENTIAL]: "exponential",
  [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
  [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
  [Kn.TRENDLINE_TYPE_POWER]: "power",
  [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
  [Kn.TRENDLINE_TYPE_UNSPECIFIED]: undefined,
  [Kn.UNRECOGNIZED]: undefined,
} as const;
