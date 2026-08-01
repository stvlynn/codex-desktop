// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF color-scale runtime rule (legacy Nht).
// Stage-3 wave-108.

import { cfRtH } from "./boundary-hooks-runtime";

void cfRtH;

export function buildColorScaleRuntime(
  cfIn2262: any,
  cfIn2263: any,
  cfIn2264: any,
  cfIn2265: any,
  cfIn2266: any,
) {
  let cfBind9324 = cfRtH.rangeStats({
    ranges: cfIn2263,
    getCell: cfIn2265,
  });
  if (!cfBind9324) return null;
  let cfBind9325 = cfIn2262.colorScale?.cfvos ?? [],
    cfBind9326 = cfIn2262.colorScale?.colors ?? [],
    cfBind9327 = [],
    cfBind9328 = [];
  for (let cfBind15987 = 0; cfBind15987 < cfBind9325.length; cfBind15987 += 1) {
    let cfBind16913 = cfBind9325[cfBind15987];
    if (!cfBind16913) continue;
    let cfBind16914 = cfRtH.resolveCfvoPos({
      cfvo: cfBind16913,
      stats: cfBind9324,
    });
    cfBind9328.push(cfBind16914);
    let cfBind16915 = cfBind9326[cfBind15987],
      cfBind16916 = cfRtH.parseRgb(
        cfBind16915
          ? cfRtH.resolveColor(cfBind16915, cfIn2266, {
              ...cfRtH.colorOpts,
              defaultFill: "rgba(0,0,0,1)",
            })
          : "rgba(0,0,0,1)",
      ) ?? [0, 0, 0];
    cfBind9327.push({
      pos: 0,
      rgb: cfBind16916,
    });
  }
  if (cfBind9327.length === 0) return null;
  let cfBind9329 = Math.min(...cfBind9328),
    cfBind9330 = Math.max(...cfBind9328),
    cfBind9331 = (cfIn15558) =>
      cfBind9330 === cfBind9329
        ? 0
        : (cfIn15558 - cfBind9329) / (cfBind9330 - cfBind9329);
  for (let cfBind22037 = 0; cfBind22037 < cfBind9327.length; cfBind22037 += 1) {
    let cfBind22818 = cfBind9327[cfBind22037];
    cfBind22818 && (cfBind22818.pos = cfBind9331(cfBind9328[cfBind22037] ?? 0));
  }
  return {
    ranges: cfIn2263,
    priority: cfIn2264,
    vMin: cfBind9329,
    vMax: cfBind9330,
    stops: cfBind9327,
  };
}

/** Legacy alias. */
export const Nht = buildColorScaleRuntime;
