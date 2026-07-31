// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches leaf peels (pivot-source-headers.ts).

// Stage-3 wave-47: peeled PivotCaches helper.
export function extractPivotSourceHeaders(
  sourceRange: any,
  addressLabel: unknown,
): any {
  let pivotBind10427 = sourceRange.values;
  if (pivotBind10427.length === 0)
    throw Error(`Source range ${addressLabel} is empty`);
  let pivotBind10428 = pivotBind10427[0] ?? [],
    pivotBind10429 = pivotBind10428.length,
    pivotBind10430 = pivotBind10428.map((item, index) =>
      item != null && item !== "" ? String(item) : `Column${index + 1}`,
    ),
    pivotBind10431 = [];
  for (
    let pivotBind15940 = 1;
    pivotBind15940 < pivotBind10427.length;
    pivotBind15940++
  ) {
    let pivotBind16759 = pivotBind10427[pivotBind15940] ?? [],
      pivotBind16760 = [],
      pivotBind16761 = false;
    for (
      let pivotBind20503 = 0;
      pivotBind20503 < pivotBind10429;
      pivotBind20503++
    ) {
      let pivotBind21382 = pivotBind16759[pivotBind20503];
      pivotBind16760[pivotBind20503] = pivotBind21382 ?? null;
      pivotBind21382 != null &&
        pivotBind21382 !== "" &&
        (pivotBind16761 = true);
    }
    pivotBind16761 && pivotBind10431.push(pivotBind16760);
  }
  return {
    headers: pivotBind10430,
    rows: pivotBind10431,
  };
}
