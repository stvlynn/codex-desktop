// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: proto line-cap/join → canvas lineCap/lineJoin (legacy _le/vle).

import {
  Cr as lineCapEnum,
  lr as lineJoinEnum,
} from "../presentation-protobuf";
export function lineCapToCanvas(tcIn7338: unknown) {
  switch (tcIn7338) {
    case lineCapEnum.LINE_CAP_ROUND:
      return "round";
    case lineCapEnum.LINE_CAP_SQUARE:
      return "square";
    case lineCapEnum.LINE_CAP_FLAT:
    case lineCapEnum.LINE_CAP_UNSPECIFIED:
    default:
      return "butt";
  }
}
export function lineJoinToCanvas(tcIn7252: unknown) {
  switch (tcIn7252) {
    case lineJoinEnum.LINE_JOIN_ROUND:
      return "round";
    case lineJoinEnum.LINE_JOIN_BEVEL:
      return "bevel";
    case lineJoinEnum.LINE_JOIN_MITER:
    case lineJoinEnum.LINE_JOIN_UNSPECIFIED:
    default:
      return "miter";
  }
}
