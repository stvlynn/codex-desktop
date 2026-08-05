// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Mn } from "../presentation-protobuf";

export const legendPositionNameToProto = {
  left: Mn.LEGEND_POSITION_LEFT,
  top: Mn.LEGEND_POSITION_TOP,
  topRight: Mn.LEGEND_POSITION_TOP_RIGHT,
  right: Mn.LEGEND_POSITION_RIGHT,
  bottom: Mn.LEGEND_POSITION_BOTTOM,
} as const;

export const legendPositionProtoToName = {
  [Mn.LEGEND_POSITION_LEFT]: "left",
  [Mn.LEGEND_POSITION_TOP]: "top",
  [Mn.LEGEND_POSITION_TOP_RIGHT]: "topRight",
  [Mn.LEGEND_POSITION_RIGHT]: "right",
  [Mn.LEGEND_POSITION_BOTTOM]: "bottom",
  [Mn.LEGEND_POSITION_UNSPECIFIED]: undefined,
  [Mn.UNRECOGNIZED]: undefined,
} as const;
