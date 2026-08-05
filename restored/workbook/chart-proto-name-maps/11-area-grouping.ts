// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Pn as _presentationPn } from "../presentation-protobuf";

export const areaGroupingNameToProto = {
  standard: _presentationPn.AREA_GROUPING_STANDARD,
  stacked: _presentationPn.AREA_GROUPING_STACKED,
  percentStacked: _presentationPn.AREA_GROUPING_PERCENT_STACKED,
} as const;

export const areaGroupingProtoToName = {
  [_presentationPn.AREA_GROUPING_STANDARD]: "standard",
  [_presentationPn.AREA_GROUPING_STACKED]: "stacked",
  [_presentationPn.AREA_GROUPING_PERCENT_STACKED]: "percentStacked",
  [_presentationPn.AREA_GROUPING_UNSPECIFIED]: undefined,
  [_presentationPn.UNRECOGNIZED]: undefined,
} as const;
