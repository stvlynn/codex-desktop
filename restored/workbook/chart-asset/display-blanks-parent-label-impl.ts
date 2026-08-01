// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map display-blanks / parent-label-layout names (legacy Zae/Qae).
// Stage-3 wave-137.

import { Dn, Gn } from "../presentation-protobuf";

export function Zae(caIn6613: any) {
  switch (caIn6613) {
    case "gap":
      return Dn.DISPLAY_BLANKS_AS_GAP;
    case "zero":
      return Dn.DISPLAY_BLANKS_AS_ZERO;
    case "span":
      return Dn.DISPLAY_BLANKS_AS_SPAN;
    default:
      return Dn.DISPLAY_BLANKS_AS_UNSPECIFIED;
  }
}
export function Qae(caIn6129: any) {
  switch (caIn6129) {
    case "banner":
      return Gn.PARENT_LABEL_LAYOUT_BANNER;
    case "none":
      return Gn.PARENT_LABEL_LAYOUT_NONE;
    case "overlapping":
      return Gn.PARENT_LABEL_LAYOUT_OVERLAPPING;
    default:
      return Gn.PARENT_LABEL_LAYOUT_UNSPECIFIED;
  }
}
