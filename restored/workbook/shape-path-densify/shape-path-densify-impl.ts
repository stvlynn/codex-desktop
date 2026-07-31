// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: densify cubic path commands (legacy dTe).
// Stage-3 wave-103.

import { spdH } from "./boundary-hooks";

void spdH;

export function densifyShapePath(spdIn1180: any, spdIn1181: any) {
  if (spdIn1181 <= 0 || spdIn1180.length < 2)
    return spdIn1180;
  let spdBind6695 = spdIn1180.map((item) => ({
      ...item,
    })),
    spdBind6696,
    spdBind6697,
    spdBind6698 = -1;
  for (
    let spdBind17369 = 0;
    spdBind17369 < spdBind6695.length;
    spdBind17369 += 1
  ) {
    let spdBind18430 = spdBind6695[spdBind17369];
    spdBind18430 &&
      (spdBind18430.cmd === "moveTo"
        ? (spdBind6696 = {
            x: spdBind18430.x,
            y: spdBind18430.y,
          })
        : (spdBind18430.cmd === "lineTo" ||
            spdBind18430.cmd === "cubicBezTo") &&
          ((spdBind6697 = spdBind6696),
          (spdBind6696 = {
            x: spdBind18430.x,
            y: spdBind18430.y,
          }),
          (spdBind6698 = spdBind17369)));
  }
  let spdBind6699 = spdBind6695[spdBind6698];
  if (!spdBind6699 || !spdBind6697) return spdBind6695;
  if (spdBind6699.cmd === "lineTo") {
    let spdBind19257 = Math.hypot(
      spdBind6699.x - spdBind6697.x,
      spdBind6699.y - spdBind6697.y,
    );
    if (spdBind19257 <= 0) return spdBind6695;
    let spdBind19258 = Math.min(
      spdIn1181,
      spdBind19257 - 0.001,
    );
    spdBind6699.x -=
      ((spdBind6699.x - spdBind6697.x) / spdBind19257) *
      spdBind19258;
    spdBind6699.y -=
      ((spdBind6699.y - spdBind6697.y) / spdBind19257) *
      spdBind19258;
  } else if (spdBind6699.cmd === "cubicBezTo") {
    let spdBind11541 = {
        p0: spdBind6697,
        p1: {
          x: spdBind6699.x1,
          y: spdBind6699.y1,
        },
        p2: {
          x: spdBind6699.x2,
          y: spdBind6699.y2,
        },
        p3: {
          x: spdBind6699.x,
          y: spdBind6699.y,
        },
      },
      spdBind11542 = spdH.bh624(spdBind11541),
      spdBind11543 = Math.min(
        spdIn1181,
        spdBind11542 - 0.001,
      );
    if (spdBind11543 > 0) {
      let [spdBind14982] = spdH.bh626(
        spdBind11541,
        spdH.bh625(
          spdBind11541,
          spdBind11542 - spdBind11543,
        ),
      );
      spdBind6699.x1 = spdBind14982.p1.x;
      spdBind6699.y1 = spdBind14982.p1.y;
      let spdBind14983 = spdH.bh628({
          x: spdBind6699.x - spdBind6699.x2,
          y: spdBind6699.y - spdBind6699.y2,
        }),
        spdBind14984 = {
          x:
            spdBind6699.x -
            spdBind14983.x * spdBind11543,
          y:
            spdBind6699.y -
            spdBind14983.y * spdBind11543,
        },
        spdBind14985 = Math.hypot(
          spdBind14982.p3.x - spdBind14982.p2.x,
          spdBind14982.p3.y - spdBind14982.p2.y,
        );
      spdBind6699.x2 =
        spdBind14984.x - spdBind14983.x * spdBind14985;
      spdBind6699.y2 =
        spdBind14984.y - spdBind14983.y * spdBind14985;
      spdBind6699.x = spdBind14984.x;
      spdBind6699.y = spdBind14984.y;
    }
  }
  return spdBind6695;
}

/** Legacy alias. */
export const dTe = densifyShapePath;
