// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: funnel segment geometry (legacy helper576 + bCe).
// Stage-3 wave-102/103 (paintFunnelBars / vCe).

import { max as appInitialAat } from "../../vendor/d3-array-min";
import { cfsH } from "./boundary-hooks";

void appInitialAat;
void cfsH;

function clampFunnelGap(cfsIn13603: any, cfsIn13604: any, cfsIn13605: any) {
  return Math.min(Math.max(cfsIn13603, cfsIn13604), cfsIn13605);
}
export function computeFunnelSegments(
  cfsIn878: any,
  cfsIn879: any,
  cfsIn880: any,
) {
  let cfsBind5615 = cfsIn880 ?? new Set(),
    cfsBind5616 = cfsIn878.series.findIndex(
      (item, index) => !cfsBind5615.has(index),
    );
  if (cfsBind5616 === -1)
    return {
      seriesIndex: -1,
      segments: [],
    };
  let cfsBind5617 = cfsIn878.series[cfsBind5616],
    cfsBind5618 = cfsH.seriesCategories(cfsIn878, cfsBind5616),
    cfsBind5619 = cfsBind5617?.values ?? [],
    cfsBind5620 = Math.max(cfsBind5618.length, cfsBind5619.length);
  if (cfsBind5620 === 0)
    return {
      seriesIndex: cfsBind5616,
      segments: [],
    };
  let cfsBind5621 = [];
  for (let cfsBind20536 = 0; cfsBind20536 < cfsBind5620; cfsBind20536++) {
    let cfsBind21406 = cfsBind5619[cfsBind20536],
      cfsBind21407 =
        typeof cfsBind21406 == "number" && Number.isFinite(cfsBind21406)
          ? Math.max(0, cfsBind21406)
          : 0;
    cfsBind5621.push(cfsBind21407);
  }
  let cfsBind5622 = appInitialAat(cfsBind5621) ?? 0;
  if (cfsBind5622 <= 0)
    return {
      seriesIndex: cfsBind5616,
      segments: [],
    };
  let cfsBind5623 = cfsIn878.funnelOptions?.gapWidth,
    cfsBind5624 =
      typeof cfsBind5623 == "number" && Number.isFinite(cfsBind5623)
        ? clampFunnelGap(cfsBind5623, 0, 0.8)
        : 0.06,
    cfsBind5625 =
      cfsBind5620 + (cfsBind5620 > 1 ? (cfsBind5620 - 1) * cfsBind5624 : 0),
    cfsBind5626 = Math.max(0, cfsIn879.height),
    cfsBind5627 = cfsBind5625 > 0 ? cfsBind5626 / cfsBind5625 : 0,
    cfsBind5628 = cfsBind5627 * cfsBind5624,
    cfsBind5629 = cfsIn879.x + cfsIn879.width / 2,
    cfsBind5630 = cfsIn879.y,
    cfsBind5631 = [];
  for (let cfsBind12033 = 0; cfsBind12033 < cfsBind5620; cfsBind12033++) {
    let cfsBind12461 = cfsBind5621[cfsBind12033] ?? 0,
      cfsBind12462 = cfsBind12461 / cfsBind5622,
      cfsBind12463 = cfsIn879.width * cfsBind12462,
      cfsBind12464 = cfsBind12463,
      cfsBind12465 =
        cfsBind5618[cfsBind12033] ??
        cfsBind5617?.categories?.[cfsBind12033] ??
        `Step ${cfsBind12033 + 1}`,
      cfsBind12466 = cfsBind5630,
      cfsBind12467 = cfsBind12466 + cfsBind5627,
      cfsBind12468 = cfsBind12463 / 2,
      cfsBind12469 = cfsBind12464 / 2;
    cfsBind5631.push({
      index: cfsBind12033,
      category: cfsBind12465,
      value: cfsBind12461,
      ratio: cfsBind12462,
      y0: cfsBind12466,
      y1: cfsBind12467,
      topWidth: cfsBind12463,
      bottomWidth: cfsBind12464,
      centerX: cfsBind5629,
      topLeftX: cfsBind5629 - cfsBind12468,
      topRightX: cfsBind5629 + cfsBind12468,
      bottomLeftX: cfsBind5629 - cfsBind12469,
      bottomRightX: cfsBind5629 + cfsBind12469,
    });
    cfsBind5630 = cfsBind12467 + cfsBind5628;
  }
  let cfsBind5632 =
    cfsBind5626 -
    (cfsBind5620 * cfsBind5627 + Math.max(0, cfsBind5620 - 1) * cfsBind5628);
  if (cfsBind5632 > 0 && cfsBind5631.length > 0) {
    let cfsBind22183 = cfsBind5632 / 2;
    cfsBind5631.forEach((item) => {
      item.y0 += cfsBind22183;
      item.y1 += cfsBind22183;
    });
  }
  return {
    seriesIndex: cfsBind5616,
    segments: cfsBind5631,
  };
}

/** Legacy alias. */
export const workbookHelper576 = computeFunnelSegments;

export function paintFunnelBars(
  cfsIn790: any,
  cfsIn791: any,
  cfsIn792: any,
  cfsIn793: any,
  cfsIn794: any,
  cfsIn795: any,
) {
  if (cfsIn792.seriesIndex === -1 || cfsIn792.segments.length === 0) return;
  let cfsBind5392 = cfsIn791.series[cfsIn792.seriesIndex];
  if (!cfsBind5392) return;
  cfsIn790.save();
  cfsIn790.lineJoin = "round";
  cfsIn790.lineCap = "round";
  let cfsBind5393 = [];
  cfsIn792.segments.forEach((item) => {
    let cfsBind7081 = item.y1 - item.y0;
    if (cfsBind7081 <= 0) return;
    let cfsBind7082 = cfsH.bh474(cfsBind5392, item.index)
        ? undefined
        : cfsH.bh469(cfsBind5392, item.index, cfsIn792.seriesIndex, cfsIn793),
      { color, widthPx } = cfsH.bh473(cfsBind5392, item.index, cfsIn793);
    cfsIn790.beginPath();
    cfsIn790.moveTo(item.topLeftX, item.y0);
    cfsIn790.lineTo(item.topRightX, item.y0);
    cfsIn790.lineTo(item.bottomRightX, item.y1);
    cfsIn790.lineTo(item.bottomLeftX, item.y1);
    cfsIn790.closePath();
    cfsBind7082 && ((cfsIn790.fillStyle = cfsBind7082), cfsIn790.fill());
    let cfsBind7083 = color ?? (cfsBind7082 || "#ffffff"),
      cfsBind7084 = widthPx ?? +!!color;
    if (
      (cfsBind7084 > 0 &&
        ((cfsIn790.strokeStyle = cfsBind7083),
        (cfsIn790.lineWidth = cfsBind7084),
        cfsIn790.stroke()),
      cfsBind5393.push({
        text: item.category,
        centerY: item.y0 + cfsBind7081 / 2,
      }),
      cfsIn794)
    ) {
      let cfsBind12093 = Math.max(
          item.topRightX - item.topLeftX,
          item.bottomRightX - item.bottomLeftX,
        ),
        cfsBind12094 = Math.min(item.topLeftX, item.bottomLeftX),
        cfsBind12095 = item.centerX,
        cfsBind12096 = item.y0 + cfsBind7081 / 2;
      cfsIn794.push({
        kind: "bar-vertical",
        x: cfsBind12094,
        y: item.y0,
        width: cfsBind12093,
        height: cfsBind7081,
        category: item.category,
        seriesName: cfsBind5392.name,
        value: item.value,
        color: cfsBind7082 ?? color,
        anchorX: cfsBind12095,
        anchorY: cfsBind12096,
        seriesIndex: cfsIn792.seriesIndex,
      });
    }
  });
  cfsIn795 &&
    cfsBind5393.length > 0 &&
    (cfsIn790.save(),
    (cfsIn790.font = cfsIn795.font),
    (cfsIn790.fillStyle = cfsIn795.textColor),
    (cfsIn790.textAlign = "right"),
    (cfsIn790.textBaseline = "middle"),
    cfsBind5393.forEach((item) => {
      cfsIn790.fillText(item.text, cfsIn795.labelX, item.centerY);
    }),
    cfsIn790.restore());
  cfsIn790.restore();
}

/** Legacy alias. */
export const vCe = paintFunnelBars;
