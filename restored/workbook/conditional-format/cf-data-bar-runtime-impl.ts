// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF data-bar runtime rule (legacy Pht).
// Stage-3 wave-108.

import { cfRtH } from "./boundary-hooks-runtime";

void cfRtH;

export function buildDataBarRuntime(
  cfIn1407: any,
  cfIn1408: any,
  cfIn1409: any,
  cfIn1410: any,
  cfIn1411: any,
) {
  let cfBind7241 = cfRtH.rangeStats({
    ranges: cfIn1408,
    getCell: cfIn1410,
  });
  if (!cfBind7241) return null;
  let cfBind7242 = cfRtH.resolveColor(
    cfIn1407.dataBar?.color ?? cfRtH.defaultDataBarColor,
    cfIn1411,
    {
      ...cfRtH.colorOpts,
      defaultFill: cfIn1411.colorMap?.accent1 || cfRtH.defaultAccentFallback,
    },
  );
  return {
    ranges: cfIn1408,
    priority: cfIn1409,
    vMin: cfBind7241.min,
    vMax: cfBind7241.max,
    colorCss: cfBind7242,
    borderColorCss: cfIn1407.dataBar?.borderColor
      ? cfRtH.resolveColor(cfIn1407.dataBar.borderColor, cfIn1411, {
          ...cfRtH.colorOpts,
          defaultFill: cfBind7242,
        })
      : null,
    negativeColorCss: cfIn1407.dataBar?.negativeFillColor
      ? cfRtH.resolveColor(cfIn1407.dataBar.negativeFillColor, cfIn1411, {
          ...cfRtH.colorOpts,
          defaultFill: "#FF0000",
        })
      : null,
    negativeBorderColorCss: cfIn1407.dataBar?.negativeBorderColor
      ? cfRtH.resolveColor(cfIn1407.dataBar.negativeBorderColor, cfIn1411, {
          ...cfRtH.colorOpts,
          defaultFill: "#FF0000",
        })
      : null,
    axisColorCss: cfIn1407.dataBar?.axisColor
      ? cfRtH.resolveColor(cfIn1407.dataBar.axisColor, cfIn1411, {
          ...cfRtH.colorOpts,
          defaultFill: "#000000",
        })
      : null,
    axisPosition: cfIn1407.dataBar?.axisPosition ?? undefined,
    border: cfIn1407.dataBar?.border === true,
    negativeBorderColorSameAsPositive:
      cfIn1407.dataBar?.negativeBarBorderColorSameAsPositive === true,
    gradient: cfIn1407.dataBar?.gradient !== false,
    showValue: cfIn1407.dataBar?.showValue !== false,
  };
}

/** Legacy alias. */
export const Pht = buildDataBarRuntime;
