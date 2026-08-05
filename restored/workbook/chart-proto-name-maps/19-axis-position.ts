// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Hn as _presentationHn } from "../presentation-protobuf";

export const axisPositionNameToProto = {
  left: _presentationHn.AXIS_POSITION_LEFT,
  right: _presentationHn.AXIS_POSITION_RIGHT,
  top: _presentationHn.AXIS_POSITION_TOP,
  bottom: _presentationHn.AXIS_POSITION_BOTTOM,
} as const;

export const axisPositionProtoToName = {
  [_presentationHn.AXIS_POSITION_LEFT]: "left",
  [_presentationHn.AXIS_POSITION_RIGHT]: "right",
  [_presentationHn.AXIS_POSITION_TOP]: "top",
  [_presentationHn.AXIS_POSITION_BOTTOM]: "bottom",
  [_presentationHn.AXIS_POSITION_UNSPECIFIED]: undefined,
  [_presentationHn.UNRECOGNIZED]: undefined,
} as const;
