// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches.#l hydrate pivot cell render hints.

import { formatA1, parseA1Range } from "../../utils/spreadsheet-address-utils";
import {
  getPivotTableProto,
  getPivotCacheProto,
  getPivotTableSource,
} from "./boundary-hooks";
import type { PivotCachesOpsHost } from "./types";

export function hydratePivotRenderLayout(
  host: PivotCachesOpsHost,
  pivotTable: any,
): void {
  pivotTable.__clearPivotCellRenderHints();
  let pivotBind3421 = getPivotTableProto(pivotTable),
    pivotBind3422 = getPivotCacheProto(pivotTable),
    pivotBind3423 = pivotBind3421.location?.reference?.trim();
  if (!pivotBind3423) return;
  let pivotBind3424 = parseA1Range(pivotBind3423);
  if (!pivotBind3424) return;
  let pivotBind3425 = pivotBind3424.bounds,
    pivotBind3426 =
      typeof pivotBind3421.location?.firstDataRow == "number" &&
      pivotBind3421.location.firstDataRow > 0
        ? pivotBind3421.location.firstDataRow
        : 1,
    pivotBind3427 =
      typeof pivotBind3421.location?.firstDataColumn == "number" &&
      pivotBind3421.location.firstDataColumn > 0
        ? pivotBind3421.location.firstDataColumn
        : 1,
    pivotBind3428 = Math.min(
      pivotBind3425.endRow,
      pivotBind3425.startRow + pivotBind3426 - 1,
    ),
    pivotBind3429 = Math.min(
      pivotBind3425.endCol,
      pivotBind3425.startCol + pivotBind3427 - 1,
    );
  for (
    let pivotBind17940 = pivotBind3425.startRow;
    pivotBind17940 <= pivotBind3428;
    pivotBind17940++
  )
    for (
      let pivotBind19423 = pivotBind3425.startCol;
      pivotBind19423 <= pivotBind3425.endCol;
      pivotBind19423++
    )
      pivotTable.__setPivotCellRenderHint(pivotBind17940, pivotBind19423, {
        type: "headerRow",
        indentLevel: 0,
      });
  let pivotBind3430 = pivotTable.worksheet,
    pivotBind3431 = host.buildRowFieldValueMap(pivotTable),
    pivotBind3432 = pivotBind3428 + 1,
    pivotBind3433 = parseA1Range(pivotBind3430.getUsedRange(true).address),
    pivotBind3434 = pivotBind3433
      ? Math.max(pivotBind3425.endRow, pivotBind3433.bounds.endRow)
      : pivotBind3425.endRow,
    pivotBind3435 = host.paintHeaderCells(
      pivotBind3430,
      pivotBind3425.startCol,
      pivotBind3432,
      pivotBind3434,
    ),
    pivotBind3436 =
      pivotBind3435 == null
        ? pivotBind3425.endRow
        : Math.max(pivotBind3425.endRow, pivotBind3435),
    pivotBind3437 = new Map(),
    pivotBind3438 = 1;
  for (
    let pivotBind18370 = pivotBind3432;
    pivotBind18370 <= pivotBind3436;
    pivotBind18370++
  ) {
    if (pivotBind3435 != null && pivotBind18370 === pivotBind3435) continue;
    let pivotBind19249 = host.resolveStyleIndex(
      pivotBind3430,
      pivotBind18370,
      pivotBind3425.startCol,
    );
    pivotBind19249 == null ||
      pivotBind3437.has(pivotBind19249) ||
      (pivotBind3437.set(pivotBind19249, Math.min(pivotBind3438, 3)),
      (pivotBind3438 += 1));
  }
  for (
    let pivotBind7999 = pivotBind3432;
    pivotBind7999 <= pivotBind3436;
    pivotBind7999++
  ) {
    if (pivotBind3435 != null && pivotBind7999 === pivotBind3435) {
      for (
        let pivotBind19188 = pivotBind3425.startCol;
        pivotBind19188 <= pivotBind3425.endCol;
        pivotBind19188++
      )
        pivotTable.__setPivotCellRenderHint(pivotBind7999, pivotBind19188, {
          type: "totalRow",
          indentLevel: 0,
        });
      continue;
    }
    let pivotBind8151 = host.resolveStyleIndex(
        pivotBind3430,
        pivotBind7999,
        pivotBind3425.startCol,
      ),
      pivotBind8152 = host.normalizeBlankLabel(
        pivotBind3430.__getCell(pivotBind7999, pivotBind3425.startCol)?.value,
      ),
      pivotBind8153 =
        (pivotBind8152 == null
          ? undefined
          : pivotBind3431.get(pivotBind8152)) ??
        (pivotBind8151 == null
          ? undefined
          : pivotBind3437.get(pivotBind8151)) ??
        3,
      pivotBind8154 =
        pivotBind8153 <= 1
          ? "firstSubtotalRow"
          : pivotBind8153 === 2
            ? "secondRowSubheading"
            : "wholeTable",
      pivotBind8155 = Math.max(0, pivotBind8153 - 1);
    for (
      let pivotBind19340 = pivotBind3425.startCol;
      pivotBind19340 <= pivotBind3425.endCol;
      pivotBind19340++
    )
      pivotTable.__setPivotCellRenderHint(pivotBind7999, pivotBind19340, {
        type: pivotBind8154,
        indentLevel: pivotBind19340 <= pivotBind3429 ? pivotBind8155 : 0,
      });
  }
  let pivotBind3439 = Array.isArray(pivotBind3421.pageFields)
    ? pivotBind3421.pageFields
    : [];
  if (pivotBind3439.length === 0) return;
  let pivotBind3440 = getPivotTableSource(pivotTable).headers,
    pivotBind3441 = pivotBind3439.length + 1,
    pivotBind3442 = Math.max(0, pivotBind3425.startRow - pivotBind3441);
  for (
    let pivotBind8367 = 0;
    pivotBind8367 < pivotBind3439.length;
    pivotBind8367++
  ) {
    let pivotBind8573 = pivotBind3439[pivotBind8367],
      pivotBind8574 = pivotBind3442 + pivotBind8367,
      pivotBind8575 = pivotBind3425.startCol,
      pivotBind8576 = pivotBind3425.startCol + 1,
      pivotBind8577 = host.resolvePageFieldCaption(
        pivotBind3421,
        pivotBind3422,
        pivotBind8573?.field,
        pivotBind8573?.name,
        pivotBind3440,
      ),
      pivotBind8578 = host.formatPageFieldValue(
        pivotBind3421,
        pivotBind3422,
        pivotBind8573?.field,
      ),
      pivotBind8579 = pivotBind3430.__getCell(
        pivotBind8574,
        pivotBind8575,
      )?.value,
      pivotBind8580 = pivotBind3430.__getCell(
        pivotBind8574,
        pivotBind8576,
      )?.value,
      pivotBind8581 =
        pivotBind8577.length > 0
          ? pivotBind8577
          : pivotBind8579 == null
            ? ""
            : String(pivotBind8579),
      pivotBind8582 =
        pivotBind8578.length > 0
          ? pivotBind8578
          : pivotBind8580 == null
            ? ""
            : String(pivotBind8580);
    pivotBind3430.getRange(formatA1(pivotBind8574, pivotBind8575)).values = [
      [pivotBind8581],
    ];
    pivotBind3430.getRange(formatA1(pivotBind8574, pivotBind8576)).values = [
      [pivotBind8582],
    ];
    pivotTable.__setPivotCellRenderHint(pivotBind8574, pivotBind8575, {
      type: "pageFieldLabels",
      indentLevel: 0,
    });
    (pivotBind8576 <= pivotBind3425.endCol ||
      pivotBind8576 === pivotBind3425.startCol + 1) &&
      pivotTable.__setPivotCellRenderHint(pivotBind8574, pivotBind8576, {
        type: "pageFieldValues",
        indentLevel: 0,
      });
  }
}
