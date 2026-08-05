// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: canvas path from OOXML path commands (legacy Rwe).
// Stage-3 wave-107.

import { EMU_TO_CSS_PX } from "../text-style";

void EMU_TO_CSS_PX;

export function drawCustomPaths(
  spIn1361: any,
  spIn1362: any,
  spIn1363: any = {},
) {
  let spBind7131 = 0,
    spBind7132 = 0,
    spBind7133 = spIn1363.scaleX ?? 1,
    spBind7134 = spIn1363.scaleY ?? 1,
    spBind7135 = (spIn16466) => spIn16466 * EMU_TO_CSS_PX * spBind7133,
    spBind7136 = (spIn16467) => spIn16467 * EMU_TO_CSS_PX * spBind7134;
  spIn1361.beginPath();
  for (let spBind8086 of spIn1362)
    if (spBind8086.moveTo) {
      spBind7131 = Number(spBind8086.moveTo.x ?? spBind7131) || 0;
      spBind7132 = Number(spBind8086.moveTo.y ?? spBind7132) || 0;
      spIn1361.moveTo(spBind7135(spBind7131), spBind7136(spBind7132));
    } else if (spBind8086.lineTo) {
      spBind8086.lineTo.x !== undefined &&
        (spBind7131 = Number(spBind8086.lineTo.x));
      spBind8086.lineTo.y !== undefined &&
        (spBind7132 = Number(spBind8086.lineTo.y));
      spIn1361.lineTo(spBind7135(spBind7131), spBind7136(spBind7132));
    } else if (spBind8086.quadBezTo) {
      let spBind17961 = Number(spBind8086.quadBezTo.x1 ?? spBind7131),
        spBind17962 = Number(spBind8086.quadBezTo.y1 ?? spBind7132);
      spBind7131 = Number(spBind8086.quadBezTo.x ?? spBind7131);
      spBind7132 = Number(spBind8086.quadBezTo.y ?? spBind7132);
      spIn1361.quadraticCurveTo(
        spBind7135(spBind17961),
        spBind7136(spBind17962),
        spBind7135(spBind7131),
        spBind7136(spBind7132),
      );
    } else if (spBind8086.cubicBezTo) {
      let spBind15584 = Number(spBind8086.cubicBezTo.x1 ?? spBind7131),
        spBind15585 = Number(spBind8086.cubicBezTo.y1 ?? spBind7132),
        spBind15586 = Number(spBind8086.cubicBezTo.x2 ?? spBind7131),
        spBind15587 = Number(spBind8086.cubicBezTo.y2 ?? spBind7132);
      spBind7131 = Number(spBind8086.cubicBezTo.x ?? spBind7131);
      spBind7132 = Number(spBind8086.cubicBezTo.y ?? spBind7132);
      spIn1361.bezierCurveTo(
        spBind7135(spBind15584),
        spBind7136(spBind15585),
        spBind7135(spBind15586),
        spBind7136(spBind15587),
        spBind7135(spBind7131),
        spBind7136(spBind7132),
      );
    } else spBind8086.close !== undefined && spIn1361.closePath();
}

/** Legacy alias. */
export const Rwe = drawCustomPaths;
