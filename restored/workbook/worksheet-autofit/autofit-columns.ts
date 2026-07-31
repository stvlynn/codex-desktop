// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: autofit column widths for an address span (legacy Ile).

import { pointsToPixels, pxToCharCount } from "../../utils/spreadsheet-address-utils";
import { buildCellXfFormatMap, measureDefaultDigitWidthPx, computeRowHeightsPx } from "../cell-xf-format";
import { themeStyleMapsFromProto } from "../design-tokens";
import { parseColumnSpanAddress } from "./parse-col-row-span";
import { buildColumnStyleIndexArray, buildRowStyleIndexMap, resolveCellStyleIndex } from "./sheet-style-indexes";
import { measureCellTextPx } from "./measure-cell-text";
import { dropdownExtraWidthForRowHeight } from "./dropdown-padding";
import { cachedFormatCellDisplay, cellHasVisibleContent, tableHeaderCellKeys, findTableResolverAt, filterButtonExtraWidth, listValidationBounds, isInListValidationRange } from "./autofit-helpers";
export function autofitColumnWidths(props: unknown) {
  let {
      address,
      bounds,
      workbook,
      worksheet
    } = props,
    afBind4667 = parseColumnSpanAddress(address, bounds);
  if (!afBind4667) return;
  let afBind4668 = workbook.toProto(),
    afBind4669 = afBind4668.sheets?.find(afIn16169 => afIn16169.name === worksheet.name) ?? null;
  if (!afBind4669) return;
  let afBind4670 = themeStyleMapsFromProto(afBind4668.theme),
    afBind4671 = buildCellXfFormatMap(afBind4668),
    afBind4672 = measureDefaultDigitWidthPx(afBind4671),
    afBind4673 = worksheet.__getSpreadsheetRenderMetadata(afBind4670),
    afBind4674 = buildColumnStyleIndexArray(afBind4669),
    afBind4675 = buildRowStyleIndexMap(afBind4669),
    afBind4676 = afBind4673.tableResolvers,
    afBind4677 = tableHeaderCellKeys(afBind4676),
    afBind4678 = listValidationBounds(afBind4673.listValidationEntries),
    afBind4679 = new Map(),
    afBind4680 = computeRowHeightsPx(afBind4669),
    afBind4681 = pointsToPixels(afBind4669.defaultRowHeight && afBind4669.defaultRowHeight !== 0 ? afBind4669.defaultRowHeight : 15),
    afBind4682 = worksheet.__getColumns();
  for (let afBind5877 = afBind4667.startCol; afBind5877 <= afBind4667.endCol; afBind5877++) {
    let afBind5999 = worksheet.__getColumnExtent(afBind5877),
      afBind6000 = afBind4667.rowStart ?? afBind5999?.minRow ?? 0,
      afBind6001 = afBind4667.rowEnd ?? afBind5999?.maxRow ?? afBind6000;
    if (afBind6000 > afBind6001) continue;
    let afBind6002 = 0;
    for (let afBind8998 = afBind6000; afBind8998 <= afBind6001; afBind8998++) {
      let afBind9264 = worksheet.__getCell(afBind8998, afBind5877);
      if (!afBind9264) continue;
      let afBind9265 = resolveCellStyleIndex(afBind9264, afBind8998, afBind5877, afBind4675, afBind4674),
        afBind9266 = afBind4671[afBind9265],
        afBind9267 = findTableResolverAt(afBind4676, afBind8998, afBind5877)?.resolveCell(afBind8998, afBind5877),
        afBind9268 = cachedFormatCellDisplay(afBind9264, afBind4671, afBind4679, afBind9265);
      if (!cellHasVisibleContent(afBind9264, afBind9268)) continue;
      let {
          widthPx
        } = measureCellTextPx({
          style: afBind9266,
          themeMap: afBind4670,
          wrap: false,
          boxWidthPx: 1e6,
          paragraphs: afBind9264.paragraphs && afBind9264.paragraphs.length > 0 ? afBind9264.paragraphs : [{
            runs: [{
              text: afBind9268,
              citations: [],
              reviewMarkIds: []
            }],
            inlineNodes: []
          }],
          tableCellStyle: afBind9267
        }),
        afBind9269 = widthPx;
      afBind4677.has(`${afBind8998}:${afBind5877}`) && (afBind9269 += filterButtonExtraWidth(afBind9266));
      isInListValidationRange(afBind4678, afBind8998, afBind5877) && (afBind9269 += dropdownExtraWidthForRowHeight(afBind4680[afBind8998] ?? afBind4681));
      afBind9269 > afBind6002 && (afBind6002 = afBind9269);
    }
    if (afBind6002 <= 0) continue;
    let afBind6003 = pxToCharCount(Math.ceil(afBind6002), afBind4672),
      afBind6004 = afBind5877 + 1,
      afBind6005 = afBind4682.find(item => {
        let afBind20883 = item.min ?? item.max ?? 1,
          afBind20884 = item.max ?? item.min ?? afBind20883;
        return afBind6004 >= afBind20883 && afBind6004 <= afBind20884;
      }) ?? null;
    afBind6005 || (afBind6005 = {
      min: afBind6004,
      max: afBind6004,
      width: afBind6003,
      customWidth: true
    }, afBind4682.push(afBind6005));
    afBind6005.min = afBind6004;
    afBind6005.max = afBind6004;
    afBind6005.width = afBind6003;
    afBind6005.customWidth = true;
    afBind6005.hidden = afBind6005.hidden ?? false;
  }
}
