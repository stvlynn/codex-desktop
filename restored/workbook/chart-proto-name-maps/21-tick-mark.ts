// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Wn } from "../presentation-protobuf";

export const tickMarkNameToProto = {
  none: Wn.TICK_MARK_NONE,
  inside: Wn.TICK_MARK_INSIDE,
  outside: Wn.TICK_MARK_OUTSIDE,
  cross: Wn.TICK_MARK_CROSS,
} as const;

export const tickMarkProtoToName = {
  [Wn.TICK_MARK_NONE]: "none",
  [Wn.TICK_MARK_INSIDE]: "inside",
  [Wn.TICK_MARK_OUTSIDE]: "outside",
  [Wn.TICK_MARK_CROSS]: "cross",
  [Wn.TICK_MARK_UNSPECIFIED]: undefined,
  [Wn.UNRECOGNIZED]: undefined,
} as const;
