// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize text-frame placement insets to px (legacy workbookN).
// Stage-3 wave-135b.

import { workbookGt } from "../text-style";

export function workbookN(tfeIn6147: any) {
  return {
    topPx: Math.max(0, tfeIn6147.placement?.distanceTopEmu ?? 0) * workbookGt,
    bottomPx:
      Math.max(0, tfeIn6147.placement?.distanceBottomEmu ?? 0) * workbookGt,
    leftPx: Math.max(0, tfeIn6147.placement?.distanceLeftEmu ?? 0) * workbookGt,
    rightPx:
      Math.max(0, tfeIn6147.placement?.distanceRightEmu ?? 0) * workbookGt,
  };
}
