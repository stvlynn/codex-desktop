// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Pn } from "../presentation-protobuf";

export const layoutModeNameToProto = {
  edge: Pn.LAYOUT_MODE_EDGE,
  factor: Pn.LAYOUT_MODE_FACTOR,
} as const;

export const layoutModeProtoToName = {
  [Pn.LAYOUT_MODE_EDGE]: "edge",
  [Pn.LAYOUT_MODE_FACTOR]: "factor",
  [Pn.LAYOUT_MODE_UNSPECIFIED]: undefined,
  [Pn.UNRECOGNIZED]: undefined,
} as const;
