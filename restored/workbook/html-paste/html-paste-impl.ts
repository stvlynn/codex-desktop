// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paste HTML table into worksheet (legacy wmt).
// Stage-3 wave-101/104/106 (applyHtmlCell / parseHtmlTable / paste target).

import { formatA1 } from "../../utils/spreadsheet-address-utils";
import { htmH } from "./boundary-hooks";
import { applyHtmlCell } from "./html-cell-impl";
import { parseHtmlTable } from "./parse-html-table-impl";
import { resolvePasteTarget, rectToA1 } from "./paste-target-impl";

void applyHtmlCell;
void parseHtmlTable;

void formatA1;
void htmH;

export function pasteHtmlIntoSheet(htmIn718: any) {
  let { workbook, sheetIndex, html, target, options } = htmIn718,
    htmBind5086 = workbook.worksheets.getSheetNameByIndex(sheetIndex);
  if (!htmBind5086) throw Error(`Worksheet index ${sheetIndex} not found`);
  let htmBind5087 = workbook.worksheets.getItem(htmBind5086),
    htmBind5088 = parseHtmlTable(html),
    htmBind5089 = Math.max(htmBind5088.rows.length, 1),
    htmBind5090 = Math.max(
      htmBind5088.colWidthsPx.length,
      1,
      ...htmBind5088.rows.map((item) => item.length),
    ),
    htmBind5091 = resolvePasteTarget({
      sheetName: htmBind5086,
      sourceRowCount: htmBind5089,
      sourceColCount: htmBind5090,
      target,
    }),
    htmBind5092 = rectToA1(htmBind5091.selectionRect),
    htmBind5093 = options?.applyValues ?? true;
  htmBind5087.getRange(htmBind5092).unmerge();
  htmBind5087.getRange(htmBind5092).clear({
    applyTo: htmBind5093 ? "all" : "formats",
  });
  for (
    let htmBind16461 = 0;
    htmBind16461 <= htmBind5091.selectionRect.r2 - htmBind5091.selectionRect.r1;
    htmBind16461 += 1
  )
    for (
      let htmBind18416 = 0;
      htmBind18416 <=
      htmBind5091.selectionRect.c2 - htmBind5091.selectionRect.c1;
      htmBind18416 += 1
    ) {
      let htmBind20555 =
          htmBind5088.rows[htmBind16461 % htmBind5089]?.[
            htmBind18416 % htmBind5090
          ],
        htmBind20556 = formatA1(
          htmBind5091.selectionRect.r1 + htmBind16461,
          htmBind5091.selectionRect.c1 + htmBind18416,
        );
      applyHtmlCell(
        htmBind5087.getRange(htmBind20556),
        htmBind20555,
        htmBind5093,
      );
    }
  let htmBind5094 =
      htmBind5091.selectionRect.r2 - htmBind5091.selectionRect.r1 + 1,
    htmBind5095 =
      htmBind5091.selectionRect.c2 - htmBind5091.selectionRect.c1 + 1;
  for (let htmBind12194 of htmBind5088.merges)
    for (
      let htmBind12628 = 0;
      htmBind12628 < htmBind5094;
      htmBind12628 += htmBind5089
    )
      for (
        let htmBind13122 = 0;
        htmBind13122 < htmBind5095;
        htmBind13122 += htmBind5090
      ) {
        let htmBind13715 =
            htmBind5091.selectionRect.r1 + htmBind12628 + htmBind12194.r,
          htmBind13716 =
            htmBind5091.selectionRect.c1 + htmBind13122 + htmBind12194.c,
          htmBind13717 = htmBind13715 + htmBind12194.rowspan - 1,
          htmBind13718 = htmBind13716 + htmBind12194.colspan - 1;
        htmBind13715 > htmBind5091.selectionRect.r2 ||
          htmBind13716 > htmBind5091.selectionRect.c2 ||
          htmBind13717 > htmBind5091.selectionRect.r2 ||
          htmBind13718 > htmBind5091.selectionRect.c2 ||
          htmBind5087
            .getRange(
              formatA1Range({
                startRow: htmBind13715,
                startCol: htmBind13716,
                endRow: htmBind13717,
                endCol: htmBind13718,
              }),
            )
            .merge();
      }
  if (htmBind5088.colWidthsPx.length > 0)
    for (let htmBind17227 = 0; htmBind17227 < htmBind5095; htmBind17227 += 1) {
      let htmBind18068 =
        htmBind5088.colWidthsPx[htmBind17227 % htmBind5088.colWidthsPx.length];
      if (
        htmBind18068 == null ||
        !Number.isFinite(htmBind18068) ||
        htmBind18068 <= 0
      )
        continue;
      let htmBind18069 = colIndexToLetters(
        htmBind5091.selectionRect.c1 + htmBind17227,
      );
      htmBind5087.getRange(
        `${htmBind18069}:${htmBind18069}`,
      ).format.columnWidthPx = htmBind18068;
    }
  return (
    workbook.recalculate(),
    {
      range: htmBind5092,
      selectionRect: htmBind5091.selectionRect,
    }
  );
}

/** Legacy alias. */
export const wmt = pasteHtmlIntoSheet;
