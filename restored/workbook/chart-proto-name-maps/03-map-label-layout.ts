// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Rn,
} from "../presentation-protobuf";

export const mapLabelLayoutNameToProto = {
  none: Rn.MAP_LABEL_LAYOUT_NONE,
  bestFit: Rn.MAP_LABEL_LAYOUT_BEST_FIT,
  showAll: Rn.MAP_LABEL_LAYOUT_SHOW_ALL,
} as const;

export const mapLabelLayoutProtoToName = {
  [Rn.MAP_LABEL_LAYOUT_NONE]: "none",
  [Rn.MAP_LABEL_LAYOUT_BEST_FIT]: "bestFit",
  [Rn.MAP_LABEL_LAYOUT_SHOW_ALL]: "showAll",
  [Rn.MAP_LABEL_LAYOUT_UNSPECIFIED]: undefined,
  [Rn.UNRECOGNIZED]: undefined,
} as const;
