// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Un,
} from "../presentation-protobuf";

export const tickLabelPositionNameToProto = {
  high: Un.TICK_LABEL_POSITION_HIGH,
  low: Un.TICK_LABEL_POSITION_LOW,
  nextTo: Un.TICK_LABEL_POSITION_NEXT_TO,
  none: Un.TICK_LABEL_POSITION_NONE,
} as const;

export const tickLabelPositionProtoToName = {
  [Un.TICK_LABEL_POSITION_HIGH]: "high",
  [Un.TICK_LABEL_POSITION_LOW]: "low",
  [Un.TICK_LABEL_POSITION_NEXT_TO]: "nextTo",
  [Un.TICK_LABEL_POSITION_NONE]: "none",
  [Un.TICK_LABEL_POSITION_UNSPECIFIED]: undefined,
  [Un.UNRECOGNIZED]: undefined,
} as const;
