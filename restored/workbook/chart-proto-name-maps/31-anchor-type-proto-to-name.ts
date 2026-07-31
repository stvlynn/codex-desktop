// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Yn,
} from "../presentation-protobuf";

export const anchorTypeProtoToName = {
  [Yn.ANCHOR_TYPE_TOP]: "top",
  [Yn.ANCHOR_TYPE_MIDDLE]: "middle",
  [Yn.ANCHOR_TYPE_BOTTOM]: "bottom",
  [Yn.ANCHOR_TYPE_UNSPECIFIED]: undefined,
  [Yn.UNRECOGNIZED]: undefined,
} as const;
