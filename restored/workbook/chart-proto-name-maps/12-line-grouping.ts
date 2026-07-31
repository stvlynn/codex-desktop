// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Nn,
} from "../presentation-protobuf";

export const lineGroupingNameToProto = {
  standard: Nn.LINE_GROUPING_STANDARD,
  stacked: Nn.LINE_GROUPING_STACKED,
  percentStacked: Nn.LINE_GROUPING_PERCENT_STACKED,
} as const;

export const lineGroupingProtoToName = {
  [Nn.LINE_GROUPING_STANDARD]: "standard",
  [Nn.LINE_GROUPING_STACKED]: "stacked",
  [Nn.LINE_GROUPING_PERCENT_STACKED]: "percentStacked",
  [Nn.LINE_GROUPING_UNSPECIFIED]: undefined,
  [Nn.UNRECOGNIZED]: undefined,
} as const;
