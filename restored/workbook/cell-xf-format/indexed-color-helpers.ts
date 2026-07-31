// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: indexed / system color helpers for spreadsheet cell XF (legacy Binding223–225).

import { Zn } from "../presentation-protobuf";
import { indexedExcelColor } from "../../utils/spreadsheet-address-utils";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  INDEXED_COLOR_PREFIX,
  spreadsheetMlColorSpaceOpts,
} from "./ssf-numfmt-table";

export function applyRgbColorTransform(
  xfIn10284: unknown,
  xfIn10285: unknown,
  xfIn10286: unknown,
) {
  return xfIn10285?.transform
    ? resolveColorToCssRgba(
        {
          type: Zn.COLOR_TYPE_RGB,
          value: xfIn10284,
          transform: xfIn10285.transform,
        },
        xfIn10286,
        spreadsheetMlColorSpaceOpts,
      )
    : xfIn10284;
}
export function resolveIndexedColorCss(
  xfIn8899: unknown,
  xfIn8900: unknown,
  xfIn8901: unknown,
) {
  if (!xfIn8899?.startsWith(INDEXED_COLOR_PREFIX)) return;
  let xfBind19451 = parseInt(xfIn8899.slice(8), 10);
  if (Number.isNaN(xfBind19451)) return;
  let xfBind19452 = indexedExcelColor(xfBind19451);
  return xfBind19452
    ? applyRgbColorTransform(xfBind19452, xfIn8900, xfIn8901)
    : undefined;
}
export function resolveIndexedOrSystemColor(
  xfIn7457: unknown,
  xfIn7458: unknown,
  xfIn7459: unknown,
) {
  let xfBind17932 = indexedExcelColor(xfIn7458);
  if (xfBind17932)
    return xfIn7459
      ? applyRgbColorTransform(xfBind17932, xfIn7457, xfIn7459)
      : xfBind17932;
  if (
    !(
      xfIn7457?.type !== Zn.COLOR_TYPE_SYSTEM ||
      typeof xfIn7457.value != "string" ||
      xfIn7459 === undefined
    )
  )
    return resolveIndexedColorCss(xfIn7457.value, xfIn7457, xfIn7459);
}
