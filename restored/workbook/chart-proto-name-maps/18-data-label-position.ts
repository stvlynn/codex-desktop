// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { En } from "../presentation-protobuf";

export const dataLabelPositionNameToProto = {
  center: En.DATA_LABEL_POSITION_CENTER,
  inEnd: En.DATA_LABEL_POSITION_IN_END,
  outEnd: En.DATA_LABEL_POSITION_OUT_END,
  left: En.DATA_LABEL_POSITION_LEFT,
  right: En.DATA_LABEL_POSITION_RIGHT,
  top: En.DATA_LABEL_POSITION_TOP,
  bottom: En.DATA_LABEL_POSITION_BOTTOM,
  insideBase: En.DATA_LABEL_POSITION_INSIDE_BASE,
  bestFit: En.DATA_LABEL_POSITION_BEST_FIT,
} as const;

export const dataLabelPositionProtoToName = {
  [En.DATA_LABEL_POSITION_CENTER]: "center",
  [En.DATA_LABEL_POSITION_IN_END]: "inEnd",
  [En.DATA_LABEL_POSITION_OUT_END]: "outEnd",
  [En.DATA_LABEL_POSITION_LEFT]: "left",
  [En.DATA_LABEL_POSITION_RIGHT]: "right",
  [En.DATA_LABEL_POSITION_TOP]: "top",
  [En.DATA_LABEL_POSITION_BOTTOM]: "bottom",
  [En.DATA_LABEL_POSITION_INSIDE_BASE]: "insideBase",
  [En.DATA_LABEL_POSITION_BEST_FIT]: "bestFit",
  [En.DATA_LABEL_POSITION_UNSPECIFIED]: undefined,
  [En.UNRECOGNIZED]: undefined,
} as const;
