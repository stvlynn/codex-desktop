// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: donut/sunburst arc name+value labels (legacy qSe).
// Stage-3 wave-107. Called from KSe (still in boundary).

import { cpsH } from "./boundary-hooks";
import { workbookHelper568 } from "./measure-canvas-text-impl";

void cpsH;

export function paintDonutArcLabels(
  cpsIn1946: any,
  cpsIn1947: any,
  cpsIn1948: any,
  cpsIn1949: any,
) {
  for (let cpsBind8928 of cpsIn1947) {
    if (!cpsBind8928.name) continue;
    let cpsBind9049 = cpsBind8928.endAngle - cpsBind8928.startAngle;
    if (!Number.isFinite(cpsBind9049) || cpsBind9049 <= 0) continue;
    let cpsBind9050 = Math.max(
      0,
      cpsBind8928.outerRadius - cpsBind8928.innerRadius,
    );
    if (cpsBind9050 < cpsH.minRing) continue;
    let cpsBind9051 = cpsBind9049 * (cpsBind8928.innerRadius + cpsBind9050 / 2);
    if (
      cpsBind9051 < cpsH.minArcLen ||
      workbookHelper568(cpsIn1946, cpsH.nameFont, cpsBind8928.name) >
        cpsBind9051 - 6
    )
      continue;
    let cpsBind9052 =
        cpsBind8928.value > 0 &&
        cpsBind9050 >= cpsH.minValueRing &&
        cpsBind9051 >= cpsH.minValueArc,
      cpsBind9053 = "";
    cpsBind9052 &&
      ((cpsBind9053 = cpsH.formatValue(cpsBind8928.value, cpsIn1949)),
      workbookHelper568(cpsIn1946, cpsH.valueFont, cpsBind9053) >
        cpsBind9051 - 6 && (cpsBind9052 = false));
    let [cpsBind9054, cpsBind9055] = cpsIn1948.centroid(cpsBind8928),
      { primary, secondary } = cpsH.contrastPair(cpsBind8928.fill);
    cpsIn1946.save();
    cpsIn1946.textAlign = "center";
    cpsIn1946.textBaseline = "middle";
    cpsIn1946.font = cpsH.nameFont;
    cpsIn1946.fillStyle = primary;
    let cpsBind9056 = cpsBind9052
      ? cpsBind9055 - cpsH.lineGap / 2
      : cpsBind9055;
    if (
      (cpsIn1946.fillText(cpsBind8928.name, cpsBind9054, cpsBind9056),
      cpsBind9052)
    ) {
      cpsIn1946.font = cpsH.valueFont;
      cpsIn1946.fillStyle = secondary;
      let cpsBind21752 = cpsBind9055 + cpsH.lineGap / 2;
      cpsIn1946.fillText(cpsBind9053, cpsBind9054, cpsBind21752);
    }
    cpsIn1946.restore();
  }
}

/** Legacy alias. */
export const qSe = paintDonutArcLabels;
