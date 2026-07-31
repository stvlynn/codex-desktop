// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: materialize pivot source rows from worksheet range (legacy workbookHelper 30).

import type { PivotTableSource } from "./types";

export function snapshotPivotSource(pivotIn2737: any) {
  if (!pivotIn2737.address)
    return {
      headers: [...pivotIn2737.headers],
      rows: pivotIn2737.rows.map((item) => [...item]),
      address: pivotIn2737.address,
      worksheet: pivotIn2737.worksheet,
    };
  let pivotBind10347 = pivotIn2737.worksheet.getRange(
      pivotIn2737.address,
    ).values,
    pivotBind10348 = pivotBind10347[0] ?? [],
    pivotBind10349 = pivotBind10348.length,
    pivotBind10350 = pivotBind10348.map((item, index) =>
      item != null && item !== "" ? String(item) : `Column${index + 1}`,
    ),
    pivotBind10351 = [];
  for (
    let pivotBind17720 = 1;
    pivotBind17720 < pivotBind10347.length;
    pivotBind17720++
  ) {
    let pivotBind18734 = pivotBind10347[pivotBind17720] ?? [],
      pivotBind18735 = [],
      pivotBind18736 = false;
    for (
      let pivotBind21261 = 0;
      pivotBind21261 < pivotBind10349;
      pivotBind21261++
    ) {
      let pivotBind22134 = pivotBind18734[pivotBind21261];
      pivotBind18735[pivotBind21261] = pivotBind22134 ?? null;
      pivotBind22134 != null &&
        pivotBind22134 !== "" &&
        (pivotBind18736 = true);
    }
    pivotBind18736 && pivotBind10351.push(pivotBind18735);
  }
  return {
    headers: pivotBind10350,
    rows: pivotBind10351,
    address: pivotIn2737.address,
    worksheet: pivotIn2737.worksheet,
  };
}
