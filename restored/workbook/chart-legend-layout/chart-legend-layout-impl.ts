// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart legend measure/layout (legacy helper #490).
// Stage-3 wave-100.

import { Cn, Mn, j } from "../presentation-protobuf";
import { paintTextElement } from "../text-box";
import { cllH } from "./boundary-hooks";

void Cn;
void Mn;
void j;
void paintTextElement;
void cllH;

export function layoutChartLegend(
  cllIn626: any,
  cllIn627: any,
  cllIn628: any,
  cllIn629: any = {},
) {
  cllIn626.save();
  let cllBind4654 = cllH.bh486(cllIn629.position ?? cllIn627.legend?.position);
  if (cllIn627.type === Cn.CHART_TYPE_MAP) {
    let { width, height } = cllH.measureMapLegend(
      cllIn626,
      cllIn627,
      cllIn628,
      cllBind4654,
    );
    return (
      cllIn626.restore(),
      {
        width,
        height,
        entries: [],
        labelWidths: [],
      }
    );
  }
  let cllBind4655 = cllIn627.legend?.textStyle?.fontSize,
    cllBind4656 = cllBind4655 ? cllH.bh152(cllBind4655) : 11,
    cllBind4657 = cllH.bh387(cllIn627.legend?.textStyle);
  cllIn626.font = `${cllBind4656}px ${cllBind4657}`;
  let cllBind4658 = cllH.legendEntries(cllIn627, cllIn628),
    cllBind4659 = cllBind4655 ?? Math.round(cllBind4656 * 75),
    cllBind4660 = cllBind4658.map((item) => {
      let cllBind11186 = paintTextElement(
        {
          paragraphs: [
            {
              runs: [
                {
                  text: item.label,
                  citations: [],
                  reviewMarkIds: [],
                },
              ],
              inlineNodes: [],
            },
          ],
          textStyle: {
            name: cllBind4657,
            fontSize: cllBind4659,
          },
          effects: [],
          children: [],
          levelsStyles: [],
          id: "legend-label",
          citations: [],
          type: j.ELEMENT_TYPE_TEXT,
        },
        cllIn626,
        cllIn628,
        undefined,
        {
          mode: "layout",
          wrap: false,
        },
      );
      return cllBind11186
        ? cllBind11186.lines.reduce(
            (accumulator, current) => Math.max(accumulator, current.widthPx),
            0,
          )
        : 0;
    }),
    cllBind4661 = cllH.bh487(cllBind4654 ?? Mn.LEGEND_POSITION_RIGHT),
    cllBind4662 = cllBind4658.map((item, index) => {
      let cllBind22457 = cllBind4660[index] ?? 0;
      return cllH.bh484(item).width + cllH.markerLabelGap + cllBind22457;
    }),
    cllBind4663,
    cllBind4664,
    cllBind4665;
  if (cllBind4661) {
    let cllBind12234 =
        cllIn629.maxWidthPx === undefined
          ? 1 / 0
          : Math.max(0, cllIn629.maxWidthPx - cllH.legendPad * 2),
      cllBind12235 = false,
      cllBind12236 = cllIn627.legend?.manualLayout;
    if (cllBind12236 !== undefined) {
      let cllBind20815 =
          cllBind12236.w !== undefined && Number.isFinite(cllBind12236.w),
        cllBind20816 =
          cllBind12236.h !== undefined && Number.isFinite(cllBind12236.h);
      cllBind12235 = cllBind20815 || cllBind20816;
    }
    cllBind4665 = cllH.packLegendRows(cllBind4662, cllBind12234, cllBind12235);
    let cllBind12237 = cllBind4665.reduce(
      (accumulator, current) => Math.max(accumulator, current.width),
      0,
    );
    cllBind4663 = Math.max(0, cllBind12237 + cllH.legendPad * 2);
    let { top, bottom } = cllH.bh488(cllBind4654);
    cllBind4664 =
      cllBind4665.length * cllH.entryRowHeight +
      Math.max(0, cllBind4665.length - 1) * cllH.packedRowGap +
      top +
      bottom;
  } else {
    let cllBind17708 =
      cllBind4658.length * cllH.entryRowHeight +
      Math.max(0, cllBind4658.length - 1) * cllH.entryGapStacked;
    cllBind4663 =
      cllBind4658.reduce((accumulator, current, index) => {
        let cllBind21864 = cllBind4660[index] ?? 0;
        return Math.max(
          accumulator,
          cllH.bh484(current).width + cllH.markerLabelGap + cllBind21864,
        );
      }, 0) +
      cllH.legendPad * 2;
    cllBind4664 = cllBind17708 + cllH.legendPad * 2;
  }
  return (
    cllIn626.restore(),
    {
      width: cllBind4663,
      height: cllBind4664,
      entries: cllBind4658,
      labelWidths: cllBind4660,
      rows: cllBind4665,
    }
  );
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper490 = layoutChartLegend;
