// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: path commands → clip polygon points (legacy cTe).
// Stage-3 wave-107.

import { EMU_TO_CSS_PX } from "../text-style";

void EMU_TO_CSS_PX;

export function pathCommandsToClipPoints(spIn1659: any, spIn1660: any, spIn1661: any) {
  let spBind7920 = [],
    spBind7921 = {
      x: 0,
      y: 0,
    };
  for (let spBind8417 of spIn1659)
    if (spBind8417.moveTo) {
      spBind7921 = {
        x:
          Number(spBind8417.moveTo.x ?? 0) *
          EMU_TO_CSS_PX *
          spIn1660,
        y:
          Number(spBind8417.moveTo.y ?? 0) *
          EMU_TO_CSS_PX *
          spIn1661,
      };
      spBind7920.push({
        cmd: "moveTo",
        x: spBind7921.x,
        y: spBind7921.y,
      });
    } else if (spBind8417.lineTo) {
      spBind7921 = {
        x:
          Number(spBind8417.lineTo.x ?? spBind7921.x) *
          EMU_TO_CSS_PX *
          spIn1660,
        y:
          Number(spBind8417.lineTo.y ?? spBind7921.y) *
          EMU_TO_CSS_PX *
          spIn1661,
      };
      spBind7920.push({
        cmd: "lineTo",
        x: spBind7921.x,
        y: spBind7921.y,
      });
    } else if (spBind8417.cubicBezTo) {
      let spBind12329 =
          Number(spBind8417.cubicBezTo.x1 ?? spBind7921.x) *
          EMU_TO_CSS_PX *
          spIn1660,
        spBind12330 =
          Number(spBind8417.cubicBezTo.y1 ?? spBind7921.y) *
          EMU_TO_CSS_PX *
          spIn1661,
        spBind12331 =
          Number(spBind8417.cubicBezTo.x2 ?? spBind7921.x) *
          EMU_TO_CSS_PX *
          spIn1660,
        spBind12332 =
          Number(spBind8417.cubicBezTo.y2 ?? spBind7921.y) *
          EMU_TO_CSS_PX *
          spIn1661;
      spBind7921 = {
        x:
          Number(spBind8417.cubicBezTo.x ?? spBind7921.x) *
          EMU_TO_CSS_PX *
          spIn1660,
        y:
          Number(spBind8417.cubicBezTo.y ?? spBind7921.y) *
          EMU_TO_CSS_PX *
          spIn1661,
      };
      spBind7920.push({
        cmd: "cubicBezTo",
        x1: spBind12329,
        y1: spBind12330,
        x2: spBind12331,
        y2: spBind12332,
        x: spBind7921.x,
        y: spBind7921.y,
      });
    }
  return spBind7920;
}

/** Legacy alias. */
export const cTe = pathCommandsToClipPoints;
