// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trim path start by px (legacy uTe).
// Stage-3 wave-105.

import { spdH } from "./boundary-hooks";

void spdH;

export function trimPathStart(spdIn1529: any, spdIn1530: any) {
  if (spdIn1530 <= 0 || spdIn1529.length < 2)
    return spdIn1529;
  let spdBind7574 = spdIn1529.map((item) => ({
      ...item,
    })),
    spdBind7575 = spdBind7574[0],
    spdBind7576 = spdBind7574[1];
  if (
    !spdBind7575 ||
    spdBind7575.cmd !== "moveTo" ||
    !spdBind7576
  )
    return spdBind7574;
  if (spdBind7576.cmd === "lineTo") {
    let spdBind19255 = Math.hypot(
      spdBind7576.x - spdBind7575.x,
      spdBind7576.y - spdBind7575.y,
    );
    if (spdBind19255 <= 0) return spdBind7574;
    let spdBind19256 = Math.min(
      spdIn1530,
      spdBind19255 - 0.001,
    );
    spdBind7575.x +=
      ((spdBind7576.x - spdBind7575.x) / spdBind19255) *
      spdBind19256;
    spdBind7575.y +=
      ((spdBind7576.y - spdBind7575.y) / spdBind19255) *
      spdBind19256;
  } else if (spdBind7576.cmd === "cubicBezTo") {
    let spdBind10846 = {
        p0: {
          x: spdBind7575.x,
          y: spdBind7575.y,
        },
        p1: {
          x: spdBind7576.x1,
          y: spdBind7576.y1,
        },
        p2: {
          x: spdBind7576.x2,
          y: spdBind7576.y2,
        },
        p3: {
          x: spdBind7576.x,
          y: spdBind7576.y,
        },
      },
      spdBind10847 = spdH.bh624(spdBind10846),
      spdBind10848 = Math.min(
        spdIn1530,
        spdBind10847 - 0.001,
      );
    if (spdBind10848 > 0) {
      let [, spdBind13927] = spdH.bh626(
          spdBind10846,
          spdH.bh625(spdBind10846, spdBind10848),
        ),
        spdBind13928 = spdH.bh628({
          x: spdBind7576.x1 - spdBind7575.x,
          y: spdBind7576.y1 - spdBind7575.y,
        }),
        spdBind13929 = {
          x:
            spdBind7575.x +
            spdBind13928.x * spdBind10848,
          y:
            spdBind7575.y +
            spdBind13928.y * spdBind10848,
        },
        spdBind13930 = Math.hypot(
          spdBind13927.p1.x - spdBind13927.p0.x,
          spdBind13927.p1.y - spdBind13927.p0.y,
        );
      spdBind7575.x = spdBind13929.x;
      spdBind7575.y = spdBind13929.y;
      spdBind7576.x1 =
        spdBind13929.x + spdBind13928.x * spdBind13930;
      spdBind7576.y1 =
        spdBind13929.y + spdBind13928.y * spdBind13930;
      spdBind7576.x2 = spdBind13927.p2.x;
      spdBind7576.y2 = spdBind13927.p2.y;
      spdBind7576.x = spdBind13927.p3.x;
      spdBind7576.y = spdBind13927.p3.y;
    }
  }
  return spdBind7574;
}

/** Legacy alias. */
export const uTe = trimPathStart;
