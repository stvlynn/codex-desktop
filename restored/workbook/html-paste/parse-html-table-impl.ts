// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: parse HTML table into rows/merges (legacy Jpt).
// Stage-3 wave-104.

import { htmH } from "./boundary-hooks";

void htmH;

export function parseHtmlTable(htmIn1514: any) {
  let htmBind7558 = htmH.htmlParser.parse(htmIn1514 ?? "", {
      comment: true,
      lowerCaseTagName: true,
      preserveTagNesting: true,
    }),
    htmBind7559 = htmH.findTableRoot(htmBind7558),
    htmBind7560 = htmBind7558.querySelector("table");
  if (!htmBind7560)
    return {
      rows: [
        [
          {
            v: htmH.normalizeTextCell(
              htmBind7558.structuredText || htmBind7558.text || "",
            ),
          },
        ],
      ],
      merges: [],
      colWidthsPx: [],
    };
  let htmBind7561 = htmH.parseTableRows(htmBind7560, htmBind7559),
    htmBind7562 = [],
    htmBind7563 = [],
    htmBind7564 = new Set();
  return (
    htmH.eachTableRow(htmBind7560).forEach((item, index) => {
      let htmBind11218 = (htmBind7562[index] ??= []),
        htmBind11219 = htmH.mergeCellMaps(
          htmBind7561,
          htmH.parseTableRows(item, htmBind7559),
        ),
        htmBind11220 = 0;
      for (let htmBind12449 of htmH.eachRowCell(item)) {
        for (; htmBind7564.has(`${index}:${htmBind11220}`); ) htmBind11220 += 1;
        let htmBind12796 = htmH.parseSpanAttr(
            htmBind12449.getAttribute("rowspan"),
          ),
          htmBind12797 = htmH.parseSpanAttr(
            htmBind12449.getAttribute("colspan"),
          );
        htmBind11218[htmBind11220] = htmH.buildHtmlCell(
          htmBind12449,
          htmBind11219,
          htmBind7559,
        );
        for (
          let htmBind19040 = 0;
          htmBind19040 < htmBind12796;
          htmBind19040 += 1
        ) {
          let htmBind19966 = index + htmBind19040;
          htmBind7562[htmBind19966] ??= [];
          for (
            let htmBind22161 = 0;
            htmBind22161 < htmBind12797;
            htmBind22161 += 1
          )
            (htmBind19040 === 0 && htmBind22161 === 0) ||
              htmBind7564.add(`${htmBind19966}:${htmBind11220 + htmBind22161}`);
        }
        (htmBind12796 > 1 || htmBind12797 > 1) &&
          htmBind7563.push({
            r: index,
            c: htmBind11220,
            rowspan: htmBind12796,
            colspan: htmBind12797,
          });
        htmBind11220 += htmBind12797;
      }
    }),
    {
      rows: htmBind7562,
      merges: htmBind7563,
      colWidthsPx: htmH.colWidthPx(htmBind7560, htmBind7559),
    }
  );
}

/** Legacy alias. */
export const Jpt = parseHtmlTable;
