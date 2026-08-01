// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: line-chart marker size + legend inset (legacy $A/484/488).
// Stage-3 wave-138.

import { Cn, Mn } from "../presentation-protobuf";

/** Legacy Binding910 — line legend marker width. */
export const LEGEND_LINE_MARKER_W = 24;
/** Legacy Binding911 — line legend marker height. */
export const LEGEND_LINE_MARKER_H = 2;
/** Legacy Binding905 — top/side inset for marker sizing. */
export const LEGEND_MARKER_INSET = 8;
/** Legacy Binding906 — bottom inset when legend is bottom-positioned. */
export const LEGEND_INSET_BOTTOM = 8;

export function $A(clIn12293: any) {
  return (
    clIn12293 === Cn.CHART_TYPE_LINE || clIn12293 === Cn.CHART_TYPE_LINE_3D
  );
}
export function workbookHelper484(clIn11042: any) {
  return $A(clIn11042.chartType)
    ? {
        width: LEGEND_LINE_MARKER_W,
        height: LEGEND_LINE_MARKER_H,
      }
    : {
        width: 10,
        height: 10,
      };
}
export function workbookHelper488(clIn10690: any) {
  return clIn10690 === Mn.LEGEND_POSITION_BOTTOM
    ? {
        top: LEGEND_MARKER_INSET,
        bottom: LEGEND_INSET_BOTTOM,
      }
    : {
        top: LEGEND_MARKER_INSET,
        bottom: LEGEND_MARKER_INSET,
      };
}
