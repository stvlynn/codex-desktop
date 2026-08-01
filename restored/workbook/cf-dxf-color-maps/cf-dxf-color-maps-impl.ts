// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: build CF dxf fill/font color maps (legacy jht).
// Stage-3 wave-123. Called from kht leave-behind.

import { resolveColorToCssRgba } from "../color-resolve";

export function buildConditionalFormatDxfColorMaps(
  cdcIn4528: any,
  cdcIn4529: any,
) {
  let cdcBind13785 = new Map(),
    cdcBind13786 = new Map();
  for (
    let cdcBind15986 = 0;
    cdcBind15986 < (cdcIn4528?.length ?? 0);
    cdcBind15986 += 1
  ) {
    let cdcBind17112 = cdcIn4528?.[cdcBind15986];
    if (!cdcBind17112) continue;
    let cdcBind17113 =
      cdcBind17112.fill?.color ?? cdcBind17112.fill?.pattern?.color;
    if (cdcBind17113) {
      let cdcBind22127 = resolveColorToCssRgba(cdcBind17113, cdcIn4529, {
        ...cdcBind1962,
        defaultFill: "rgba(0,0,0,1)",
      });
      cdcBind13785.set(cdcBind15986, cdcBind22127);
    }
    cdcBind17112.font?.fill?.color &&
      cdcBind13786.set(cdcBind15986, cdcBind17112.font.fill.color);
  }
  return {
    dxfFillById: cdcBind13785,
    dxfFontById: cdcBind13786,
  };
}

/** Legacy alias (wave-123). */
export const jht = buildConditionalFormatDxfColorMaps;
