// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Vn as _presentationVn } from "../presentation-protobuf";

export const barDirectionNameToProto = {
  column: _presentationVn.BAR_DIRECTION_COLUMN,
  bar: _presentationVn.BAR_DIRECTION_BAR,
} as const;

export const barDirectionProtoToName = {
  [_presentationVn.BAR_DIRECTION_COLUMN]: "column",
  [_presentationVn.BAR_DIRECTION_BAR]: "bar",
  [_presentationVn.BAR_DIRECTION_UNSPECIFIED]: undefined,
  [_presentationVn.UNRECOGNIZED]: undefined,
} as const;
