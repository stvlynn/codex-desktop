// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: compose box/row/grid factory (legacy helper713).
// Stage-3 wave-109.

import { cjlH } from "./boundary-hooks";

void cjlH;

export function createBoxElement(
  cjlIn1308: any,
  cjlIn1309: any,
  cjlIn1310: any,
  cjlIn1311: any,
) {
  if (cjlIn1308 === "row")
    return cjlH.boxRow(
      {
        name: cjlIn1309.name,
        width: cjlIn1309.width,
        height: cjlIn1309.height,
        gap: cjlIn1309.gap,
        align: cjlIn1309.align,
        justify: cjlIn1309.justify,
        padding: cjlIn1309.padding,
        columnSpan: cjlIn1309.columnSpan,
        rowSpan: cjlIn1309.rowSpan,
      },
      cjlIn1310,
    );
  if (cjlIn1308 === "grid") {
    let cjlBind11666 = cjlIn1309.columns;
    if (!Array.isArray(cjlBind11666) || cjlBind11666.length === 0)
      throw Error(`<${cjlIn1311}> requires \`columns\` when layout is grid.`);
    return cjlH.boxGrid(
      {
        name: cjlIn1309.name,
        width: cjlIn1309.width,
        height: cjlIn1309.height,
        columns: cjlBind11666,
        rows: cjlIn1309.rows,
        autoRows: cjlIn1309.autoRows,
        columnGap: cjlIn1309.columnGap,
        rowGap: cjlIn1309.rowGap,
        alignItems: cjlIn1309.alignItems,
        justifyItems: cjlIn1309.justifyItems,
        padding: cjlIn1309.padding,
        columnSpan: cjlIn1309.columnSpan,
        rowSpan: cjlIn1309.rowSpan,
      },
      cjlIn1310,
    );
  }
  return cjlH.boxCol(
    {
      name: cjlIn1309.name,
      width: cjlIn1309.width,
      height: cjlIn1309.height,
      gap: cjlIn1309.gap,
      align: cjlIn1309.align,
      justify: cjlIn1309.justify,
      padding: cjlIn1309.padding,
      columnSpan: cjlIn1309.columnSpan,
      rowSpan: cjlIn1309.rowSpan,
    },
    cjlIn1310,
  );
}

/** Legacy alias. */
export const workbookHelper713 = createBoxElement;
