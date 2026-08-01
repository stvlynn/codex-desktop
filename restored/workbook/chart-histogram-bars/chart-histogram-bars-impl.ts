// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram bin bars paint (legacy sCe / paintArea hook).
// Stage-3 wave-100.

import { paintChartDataLabel } from "../chart-data-labels";
import { chbH } from "./boundary-hooks";

void paintChartDataLabel;
void chbH;

export function paintHistogramBars(
  chbIn746: any,
  chbIn747: any,
  chbIn748: any,
  chbIn749: any,
  chbIn750: any,
  chbIn751: any,
) {
  let chbBind5229 = chbIn749.seriesIndex;
  if (chbBind5229 < 0) return;
  let chbBind5230 = chbIn747.series[chbBind5229];
  if (!chbBind5230) return;
  let { x, y } = chbIn748,
    chbBind5231 = y(0);
  chbIn749.bins.forEach((item, index) => {
    if (!Number.isFinite(item.count) || item.count <= 0) return;
    let chbBind5555 = x(item.x0),
      chbBind5556 = x(item.x1);
    if (!Number.isFinite(chbBind5555) || !Number.isFinite(chbBind5556)) return;
    let chbBind5557 = Math.min(chbBind5555, chbBind5556),
      chbBind5558 = Math.max(
        0,
        Math.max(chbBind5555, chbBind5556) - chbBind5557,
      );
    if (chbBind5558 <= 0) return;
    let chbBind5559 = y(item.count);
    if (!Number.isFinite(chbBind5559) || !Number.isFinite(chbBind5231)) return;
    let chbBind5560 = Math.max(0, chbBind5231 - chbBind5559);
    if (chbBind5560 <= 0) return;
    let chbBind5561 = chbH.bh474(chbBind5230, index),
      chbBind5562 = chbH.bh469(chbBind5230, index, chbBind5229, chbIn750),
      chbBind5563 = chbH.bh473(chbBind5230, index, chbIn750),
      chbBind5564 = chbBind5563.color,
      chbBind5565 = chbBind5563.widthPx ?? 1;
    chbBind5564 && chbBind5565 > 0
      ? ((chbIn746.strokeStyle = chbBind5564),
        (chbIn746.lineWidth = chbBind5565))
      : (chbIn746.lineWidth = 0);
    let chbBind5566 = chbBind5558 > 1,
      chbBind5567 = chbBind5566 ? chbBind5557 + 0.5 : chbBind5557,
      chbBind5568 = chbBind5566 ? Math.max(0, chbBind5558 - 1) : chbBind5558;
    chbIn746.beginPath();
    chbIn746.rect(chbBind5567, chbBind5559, chbBind5568, chbBind5560);
    let chbBind5569 = chbH.bh470(
      chbIn746,
      {
        x: chbBind5567,
        y: chbBind5559,
        width: chbBind5568,
        height: chbBind5560,
      },
      chbBind5230,
      index,
      chbBind5229,
      chbIn750,
    );
    !chbBind5561 &&
      chbBind5569 &&
      ((chbIn746.fillStyle = chbBind5569), chbIn746.fill());
    chbIn746.lineWidth > 0 && chbBind5564 && chbIn746.stroke();
    chbIn751 &&
      chbIn751.push({
        kind: "bar-vertical",
        x: chbBind5567,
        y: chbBind5559,
        width: chbBind5568,
        height: chbBind5560,
        seriesName: chbBind5230.name ?? undefined,
        category: item.label ?? undefined,
        value: item.count,
        color: chbBind5562 ?? undefined,
        anchorX: chbBind5567 + chbBind5568 / 2,
        anchorY: chbBind5559,
        elementId: chbIn747.id ?? undefined,
        seriesIndex: chbBind5229,
      });
    let chbBind5570 = chbH.bh495(chbIn747, chbBind5230, index, item.count);
    chbBind5570.show &&
      paintChartDataLabel(
        chbIn746,
        chbBind5570.text,
        chbBind5570.position,
        chbBind5570.textStyle,
        chbIn750,
        {
          x: chbBind5567 + chbBind5568 / 2,
          y: chbBind5559,
        },
        {
          box: {
            x: chbBind5567,
            y: chbBind5559,
            width: chbBind5568,
            height: chbBind5560,
          },
          isPositive: true,
          callout: chbBind5570.callout,
        },
      );
  });
}

/** Legacy alias. */
export const sCe = paintHistogramBars;
