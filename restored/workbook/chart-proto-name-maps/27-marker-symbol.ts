// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Bn } from "../presentation-protobuf";

export const markerSymbolNameToProto = {
  none: Bn.MARKER_SYMBOL_NONE,
  circle: Bn.MARKER_SYMBOL_CIRCLE,
  square: Bn.MARKER_SYMBOL_SQUARE,
  diamond: Bn.MARKER_SYMBOL_DIAMOND,
  triangle: Bn.MARKER_SYMBOL_TRIANGLE,
  x: Bn.MARKER_SYMBOL_X,
  star: Bn.MARKER_SYMBOL_STAR,
  plus: Bn.MARKER_SYMBOL_PLUS,
  dot: Bn.MARKER_SYMBOL_DOT,
  dash: Bn.MARKER_SYMBOL_DASH,
} as const;

export const markerSymbolProtoToName = {
  [Bn.MARKER_SYMBOL_NONE]: "none",
  [Bn.MARKER_SYMBOL_CIRCLE]: "circle",
  [Bn.MARKER_SYMBOL_SQUARE]: "square",
  [Bn.MARKER_SYMBOL_DIAMOND]: "diamond",
  [Bn.MARKER_SYMBOL_TRIANGLE]: "triangle",
  [Bn.MARKER_SYMBOL_X]: "x",
  [Bn.MARKER_SYMBOL_STAR]: "star",
  [Bn.MARKER_SYMBOL_PLUS]: "plus",
  [Bn.MARKER_SYMBOL_DOT]: "dot",
  [Bn.MARKER_SYMBOL_DASH]: "dash",
  [Bn.UNRECOGNIZED]: undefined,
  [Bn.MARKER_SYMBOL_UNSPECIFIED]: undefined,
} as const;
