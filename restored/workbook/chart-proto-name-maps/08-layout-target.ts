// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Fn } from "../presentation-protobuf";

export const layoutTargetNameToProto = {
  inner: Fn.LAYOUT_TARGET_INNER,
  outer: Fn.LAYOUT_TARGET_OUTER,
} as const;

export const layoutTargetProtoToName = {
  [Fn.LAYOUT_TARGET_INNER]: "inner",
  [Fn.LAYOUT_TARGET_OUTER]: "outer",
  [Fn.LAYOUT_TARGET_UNSPECIFIED]: undefined,
  [Fn.UNRECOGNIZED]: undefined,
} as const;
