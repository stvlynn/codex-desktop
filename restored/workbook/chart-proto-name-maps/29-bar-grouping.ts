// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Yn as _presentationYn } from "../presentation-protobuf";

export const barGroupingNameToProto = {
  clustered: _presentationYn.BAR_GROUPING_CLUSTERED,
  stacked: _presentationYn.BAR_GROUPING_STACKED,
  percentStacked: _presentationYn.BAR_GROUPING_PERCENT_STACKED,
} as const;

export const barGroupingProtoToName = {
  [_presentationYn.BAR_GROUPING_CLUSTERED]: "clustered",
  [_presentationYn.BAR_GROUPING_STACKED]: "stacked",
  [_presentationYn.BAR_GROUPING_PERCENT_STACKED]: "percentStacked",
  [_presentationYn.BAR_GROUPING_UNSPECIFIED]: undefined,
  [_presentationYn.UNRECOGNIZED]: undefined,
} as const;
