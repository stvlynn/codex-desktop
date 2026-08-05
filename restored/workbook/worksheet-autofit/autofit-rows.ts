// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: autofit row heights for an address span (legacy Lle).

import {
  pointsToPixels,
  pixelsToPoints,
} from "../../utils/spreadsheet-address-utils";
import {
  buildCellXfFormatMap,
  measureDefaultDigitWidthPx,
  computeColumnWidthsPx,
} from "../cell-xf-format";
import { themeStyleMapsFromProto } from "../design-tokens";
import { parseRowSpanAddress } from "./parse-col-row-span";
import {
  buildColumnStyleIndexArray,
  buildRowStyleIndexMap,
  resolveCellStyleIndex,
} from "./sheet-style-indexes";
import { measureCellTextPx } from "./measure-cell-text";
import {
  cachedFormatCellDisplay,
  findTableResolverAt,
} from "./autofit-helpers";
export function autofitRowHeights(props: unknown) {
  let { address, bounds, workbook, worksheet } = props,
    afBind4882 = parseRowSpanAddress(address, bounds);
  if (!afBind4882) return;
  let afBind4883 = workbook.toProto(),
    afBind4884 =
      afBind4883.sheets?.find(
        (afIn16170) => afIn16170.name === worksheet.name,
      ) ?? null;
  if (!afBind4884) return;
  let afBind4885 = themeStyleMapsFromProto(afBind4883.theme),
    afBind4886 = buildCellXfFormatMap(afBind4883),
    afBind4887 = measureDefaultDigitWidthPx(afBind4886),
    afBind4888 = worksheet.__getSpreadsheetRenderMetadata(afBind4885),
    afBind4889 = buildColumnStyleIndexArray(afBind4884),
    afBind4890 = buildRowStyleIndexMap(afBind4884),
    afBind4891 = afBind4888.tableResolvers,
    afBind4892 = new Map(),
    afBind4893 = computeColumnWidthsPx(afBind4884, afBind4887),
    afBind4894 = worksheet.__getMergedRangeIndex(),
    afBind4895 = pointsToPixels(
      afBind4884.defaultRowHeight && afBind4884.defaultRowHeight !== 0
        ? afBind4884.defaultRowHeight
        : 15,
    ),
    afBind4896 = worksheet.__getRows();
  for (
    let afBind6178 = afBind4882.startRow;
    afBind6178 <= afBind4882.endRow;
    afBind6178++
  ) {
    let afBind6326 = worksheet.__getRowExtent(afBind6178),
      afBind6327 = afBind4882.colStart ?? afBind6326?.minCol ?? 0,
      afBind6328 = afBind4882.colEnd ?? afBind6326?.maxCol ?? afBind6327;
    if (afBind6327 > afBind6328) continue;
    let afBind6329 = 0;
    for (let afBind8008 = afBind6327; afBind8008 <= afBind6328; afBind8008++) {
      let afBind8185 = worksheet.__getCell(afBind6178, afBind8008);
      if (!afBind8185) continue;
      let afBind8186 = afBind4894.findBoundsForCell(afBind6178, afBind8008);
      if (
        afBind8186 &&
        (afBind8186.rowMin !== afBind8186.rowMax ||
          afBind6178 !== afBind8186.rowMin ||
          afBind8008 !== afBind8186.colMin)
      )
        continue;
      let afBind8187 = resolveCellStyleIndex(
          afBind8185,
          afBind6178,
          afBind8008,
          afBind4890,
          afBind4889,
        ),
        afBind8188 = afBind4886[afBind8187],
        afBind8189 = findTableResolverAt(
          afBind4891,
          afBind6178,
          afBind8008,
        )?.resolveCell(afBind6178, afBind8008),
        afBind8190 = cachedFormatCellDisplay(
          afBind8185,
          afBind4886,
          afBind4892,
          afBind8187,
        ),
        afBind8191 =
          afBind8185.paragraphs && afBind8185.paragraphs.length > 0
            ? afBind8185.paragraphs
            : [
                {
                  runs: [
                    {
                      text: afBind8190,
                      citations: [],
                      reviewMarkIds: [],
                    },
                  ],
                  inlineNodes: [],
                },
              ],
        afBind8192 = 0;
      for (
        let afBind22751 = afBind8008;
        afBind22751 <= (afBind8186?.colMax ?? afBind8008);
        afBind22751++
      )
        afBind8192 += afBind4893[afBind22751] ?? 0;
      if (afBind8192 <= 0) continue;
      let { heightPx } = measureCellTextPx({
        style: afBind8188,
        themeMap: afBind4885,
        wrap: afBind8188?.wrapText === true,
        boxWidthPx:
          afBind8188?.wrapText === true ? Math.max(afBind8192 ?? 0, 1) : 1e6,
        paragraphs: afBind8191,
        tableCellStyle: afBind8189,
      });
      heightPx > afBind6329 && (afBind6329 = heightPx);
    }
    if (afBind6329 <= 0) continue;
    let afBind6330 = worksheet.__getOrCreateRow(afBind6178);
    afBind6330.height = pixelsToPoints(Math.max(afBind4895, afBind6329));
    afBind6330.customHeight = true;
    afBind6330.hidden = afBind6330.hidden ?? false;
    afBind4896.includes(afBind6330) || afBind4896.push(afBind6330);
  }
}
