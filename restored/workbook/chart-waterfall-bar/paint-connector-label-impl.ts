// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall connector/point label paint.
// Stage-3 wave-111.

import { resolveDataLabelText } from "../chart-data-labels";
import { hundredthsPointToCssPx } from "../font-stack";
import { resolveColorToCssRgba as resolveColorCss } from "../color-resolve";

void resolveDataLabelText;
void hundredthsPointToCssPx;
void resolveColorCss;

export function paintWaterfallConnectorLabel(
  cwbIn2007: any,
  cwbIn2008: any,
  cwbIn2009: any,
  cwbIn2010: any,
  cwbIn2011: any,
  cwbIn2012: any,
) {
  let cwbBind8841 = cwbIn2008.series[cwbIn2009];
  if (!cwbBind8841) return;
  let cwbBind8842 = resolveDataLabelText(
    cwbIn2008,
    cwbBind8841,
    cwbIn2010.index,
    cwbIn2010.labelValue,
  );
  if (!cwbBind8842.show || cwbIn2011.width <= 0) return;
  let cwbBind8843 = cwbBind8842.textStyle?.fontSize
      ? hundredthsPointToCssPx(cwbBind8842.textStyle.fontSize)
      : 10,
    cwbBind8844 = cwbBind8842.textStyle?.fill?.color
      ? resolveColorCss(cwbBind8842.textStyle.fill.color, cwbIn2012)
      : undefined;
  cwbIn2007.save();
  cwbIn2007.fillStyle = cwbBind8844 ?? "#666";
  cwbIn2007.font = `${(cwbBind8842.textStyle?.bold ?? true) ? "bold " : ""}${cwbBind8843}px ${"Carlito, Segoe UI, Helvetica, Arial, sans-serif"}`;
  cwbIn2007.textAlign = "center";
  cwbIn2007.textBaseline = "middle";
  let cwbBind8845 = cwbIn2010.end >= cwbIn2010.start,
    cwbBind8846 = cwbIn2011.x + cwbIn2011.width / 2,
    cwbBind8847 = cwbIn2011.bottom - cwbIn2011.top,
    cwbBind8848 = cwbBind8845 ? cwbIn2011.top - 12 : cwbIn2011.bottom + 12;
  switch (cwbBind8842.position) {
    case 2:
      cwbBind8848 = cwbBind8845 ? cwbIn2011.top + 12 : cwbIn2011.bottom - 12;
      break;
    case 3:
      cwbBind8848 = cwbIn2011.top + cwbBind8847 / 2;
      break;
    default:
      cwbBind8848 = cwbBind8845 ? cwbIn2011.top - 12 : cwbIn2011.bottom + 12;
      break;
  }
  cwbIn2007.fillText(cwbBind8842.text, cwbBind8846, cwbBind8848);
  cwbIn2007.restore();
}

export const fCe = paintWaterfallConnectorLabel;
