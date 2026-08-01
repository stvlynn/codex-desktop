// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolve shape/theme line width px (legacy 571/572/573/wOe).
// Stage-3 wave-139.

import { Line, emuToPoints } from "../line";
import { isEmptyFill } from "../fill-empty";
import { round2 } from "../compose-element-snapshot";

/** Legacy Binding1212 — default line width (12700 EMU → points). */
export const DEFAULT_LINE_WIDTH_PX = emuToPoints(12700);

export function workbookHelper571(sgpIn11680: any) {
  return sgpIn11680
    ? sgpIn11680 instanceof Line
      ? sgpIn11680.fill.isExplicitNone
      : isEmptyFill(sgpIn11680.fill)
    : false;
}
export function workbookHelper573(sgpIn9504: any) {
  if (!sgpIn9504) return;
  if (sgpIn9504 instanceof Line) return sgpIn9504.width;
  let sgpBind20017 = sgpIn9504.widthEmu;
  if (sgpBind20017 != null)
    return Number.isFinite(sgpBind20017)
      ? emuToPoints(sgpBind20017)
      : undefined;
}
export function workbookHelper572({ line: any, themeLine }: any) {
  let sgpBind18427 = workbookHelper573(line);
  if (sgpBind18427 !== undefined) return sgpBind18427;
  if (workbookHelper571(line)) return 0;
  let sgpBind18428 = workbookHelper573(themeLine);
  return sgpBind18428 === undefined
    ? line !== undefined ||
      (themeLine !== undefined && !workbookHelper571(themeLine))
      ? DEFAULT_LINE_WIDTH_PX
      : 0
    : sgpBind18428;
}
export function wOe(sgpIn12305: any) {
  let sgpBind22382 = sgpIn12305?.shape?.line;
  if (sgpBind22382)
    return round2(
      workbookHelper572({
        line: sgpBind22382,
      }),
    );
}
