// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Wn as _presentationWn,
} from "../presentation-protobuf";

export const crossBetweenNameToProto = {
  between: _presentationWn.CROSS_BETWEEN_BETWEEN,
  midpointCategory: _presentationWn.CROSS_BETWEEN_MIDPOINT_CATEGORY,
} as const;

export const crossBetweenProtoToName = {
  [_presentationWn.CROSS_BETWEEN_BETWEEN]: "between",
  [_presentationWn.CROSS_BETWEEN_MIDPOINT_CATEGORY]: "midpointCategory",
  [_presentationWn.CROSS_BETWEEN_UNSPECIFIED]: undefined,
  [_presentationWn.UNRECOGNIZED]: undefined,
} as const;
