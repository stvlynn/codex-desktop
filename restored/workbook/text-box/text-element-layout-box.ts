// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: text-box padding alias + content box from bbox/insets (legacy Binding219/220).

import { EMU_TO_CSS_PX } from "../text-style";
import { resolveTextBoxInsetsPx } from "./default-text-insets";
export function resolveTextBoxPaddingPx(tbIn15790: unknown) {
  return resolveTextBoxInsetsPx(tbIn15790);
}
export function resolveTextElementLayoutBox(
  tbIn2777: unknown,
  tbIn2778: unknown,
) {
  let x = 0,
    y = 0,
    width = 0,
    height = 0;
  if (tbIn2778?.bboxPx) ({ x, y, width, height } = tbIn2778.bboxPx);
  else if (tbIn2777.bbox) {
    let tbBind19153 = tbIn2777.bbox.xEmu ?? 0,
      tbBind19154 = tbIn2777.bbox.yEmu ?? 0,
      tbBind19155 = tbIn2777.bbox.widthEmu ?? 0,
      tbBind19156 = tbIn2777.bbox.heightEmu ?? 0;
    x = tbBind19153 * EMU_TO_CSS_PX;
    y = tbBind19154 * EMU_TO_CSS_PX;
    width = tbBind19155 * EMU_TO_CSS_PX;
    height = tbBind19156 * EMU_TO_CSS_PX;
  }
  let tbBind10445 = tbIn2778?.resolvedStyle ?? tbIn2777.textStyle,
    tbBind10446 = tbIn2778?.paddingPx ?? resolveTextBoxPaddingPx(tbBind10445),
    tbBind10447 = tbBind10446?.left ?? 0,
    tbBind10448 = tbBind10446?.right ?? 0,
    tbBind10449 = tbBind10446?.top ?? 0,
    tbBind10450 = tbBind10446?.bottom ?? 0;
  return {
    elementStyle: tbBind10445,
    box: {
      x: x + tbBind10447,
      y: y + tbBind10449,
      width: Math.max(0, width - (tbBind10447 + tbBind10448)),
      height: Math.max(0, height - (tbBind10449 + tbBind10450)),
    },
  };
}
