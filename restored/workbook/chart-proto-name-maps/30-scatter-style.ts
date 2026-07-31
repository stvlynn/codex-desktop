// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Hn,
} from "../presentation-protobuf";

export const scatterStyleNameToProto = {
  line: Hn.SCATTER_STYLE_LINE,
  lineWithMarkers: Hn.SCATTER_STYLE_LINE_MARKER,
  smooth: Hn.SCATTER_STYLE_SMOOTH,
  smoothWithMarkers: Hn.SCATTER_STYLE_SMOOTH_MARKER,
  marker: Hn.SCATTER_STYLE_MARKER,
} as const;

export const scatterStyleProtoToName = {
  [Hn.SCATTER_STYLE_LINE]: "line",
  [Hn.SCATTER_STYLE_LINE_MARKER]: "lineWithMarkers",
  [Hn.SCATTER_STYLE_SMOOTH]: "smooth",
  [Hn.SCATTER_STYLE_SMOOTH_MARKER]: "smoothWithMarkers",
  [Hn.SCATTER_STYLE_MARKER]: "marker",
  [Hn.SCATTER_STYLE_UNSPECIFIED]: undefined,
  [Hn.UNRECOGNIZED]: undefined,
} as const;
