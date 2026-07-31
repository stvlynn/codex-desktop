// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: snapshot truncate helpers (legacy Zgt / Qgt / $gt / e_t).

import { randomBase36Id } from "../stable-id";
import {
  formatA1Range,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import { eq } from "./query-bag";
import { ensureEntityQueryKindsInit } from "./query-a";
import { ensureEntityQueryOpsInit } from "./query-b";
import { Xgt } from "./address-preview";

function ensureQueryReady(): void {
  ensureEntityQueryKindsInit();
  ensureEntityQueryOpsInit();
}

export function Zgt(eqIn1068: any, eqIn1069: any = {}): any {
  ensureQueryReady();
  let eqBind6375 = {
      target: null,
      kind: null,
      include: null,
      exclude: null,
      search: null,
      maxChars: null,
      tableMaxRows: null,
      tableMaxCols: null,
      tableMaxCellChars: null,
      searchTerm: eqIn1069.searchTerm ?? null,
      sheetId: eqIn1069.sheetId ?? null,
      range: eqIn1069.range ?? null,
      offset: eqIn1069.offset ?? null,
      options: eqIn1069.options
        ? {
            matchCase: eqIn1069.options.matchCase ?? null,
            matchEntireCell: eqIn1069.options.matchEntireCell ?? null,
            useRegex: eqIn1069.options.useRegex ?? null,
            matchFormulas: eqIn1069.options.matchFormulas ?? null,
            ignoreDiacritics: eqIn1069.options.ignoreDiacritics ?? null,
            maxResults: eqIn1069.options.maxResults ?? null,
          }
        : null,
    },
    eqBind6376 = {
      revision: "search/v1",
      target: {
        id: "wb/search",
        beforeLines: 0,
        afterLines: 0,
      },
      notices: [],
      search: eqBind6375.searchTerm ?? undefined,
    },
    eqBind6377 = eq.eqBind1981(eqIn1068, eqBind6375, eqBind6376);
  return eqBind6377
    ? {
        matches: eqBind6377.records,
        truncated: eqBind6377.truncated,
        offset: eqBind6377.offset,
        limit: eqBind6377.limit,
        total: eqBind6377.total,
        notices: eqBind6376.notices ?? [],
      }
    : {
        matches: [],
        truncated: false,
        offset: 0,
        limit: eq.eqBind1978,
        total: 0,
        notices: eqBind6376.notices ?? [],
      };
}
export function Qgt(eqIn5579: any, eqIn5580: any, eqIn5581: any): any {
  ensureQueryReady();
  return eqIn5580 <= 0
    ? eqIn5579
    : eqIn5579.map((item) => {
        if (item.kind !== "table") return item;
        let eqBind16835 = item.values;
        if (
          !Array.isArray(eqBind16835) ||
          JSON.stringify(item).length <= eqIn5580
        )
          return item;
        let eqBind16836 = item,
          eqBind16837 = $gt(eqBind16836, eqIn5581);
        return JSON.stringify(eqBind16837).length <= eqIn5580
          ? eqBind16837
          : e_t(eqBind16837, eqBind16836, eqIn5581, eqIn5580);
      });
}
export function $gt(eqIn2554: any, eqIn2555: any): any {
  ensureQueryReady();
  let eqBind9921 = eqIn2554.values,
    eqBind9922 = Math.min(eqBind9921.length, eqIn2555.maxRows),
    eqBind9923 = Math.min(eqBind9921[0]?.length ?? 0, eqIn2555.maxCols),
    eqBind9924 = eqBind9921
      .slice(0, eqBind9922)
      .map((item) =>
        item
          .slice(0, eqBind9923)
          .map((_item) => eq.eqBind1977(_item, eqIn2555.maxCellChars)),
      ),
    eqBind9925 = typeof eqIn2554.address == "string" ? eqIn2554.address : null,
    eqBind9926 = eqBind9925 ? parseA1Range(eqBind9925)?.bounds : null,
    eqBind9927 =
      eqBind9926 && eqBind9922 > 0 && eqBind9923 > 0
        ? {
            startRow: eqBind9926.startRow,
            startCol: eqBind9926.startCol,
            endRow: eqBind9926.startRow + eqBind9922 - 1,
            endCol: eqBind9926.startCol + eqBind9923 - 1,
          }
        : null;
  return {
    ...eqIn2554,
    values: eqBind9924,
    valuesTruncated: true,
    valuesPreviewRows: eqBind9922 || undefined,
    valuesPreviewCols: eqBind9923 || undefined,
    valuesPreviewAddress: eqBind9927 ? formatA1Range(eqBind9927) : undefined,
  };
}
export function e_t(
  eqIn1763: any,
  eqIn1764: any,
  eqIn1765: any,
  eqIn1766: any,
): any {
  ensureQueryReady();
  let eqBind8219 =
      typeof eqIn1763.valuesPreviewRows == "number"
        ? eqIn1763.valuesPreviewRows
        : 1,
    eqBind8220 =
      typeof eqIn1763.valuesPreviewCols == "number"
        ? eqIn1763.valuesPreviewCols
        : 1,
    eqBind8221 = eqIn1765.maxCellChars,
    eqBind8222 = eqIn1763;
  for (let eqBind16485 = 0; eqBind16485 < 6; eqBind16485 += 1) {
    if (JSON.stringify(eqBind8222).length <= eqIn1766) return eqBind8222;
    if (eqBind8219 > 1 || eqBind8220 > 1)
      eqBind8219 >= eqBind8220 && eqBind8219 > 1
        ? --eqBind8219
        : eqBind8220 > 1 && --eqBind8220;
    else if (eqBind8221 > 10)
      eqBind8221 = Math.max(10, Math.floor(eqBind8221 * 0.7));
    else break;
    eqBind8222 = $gt(eqIn1764, {
      maxRows: eqBind8219,
      maxCols: eqBind8220,
      maxCellChars: eqBind8221,
    });
  }
  let eqBind8223 = eqBind8222.values,
    eqBind8224 = Array.isArray(eqBind8223) ? eqBind8223 : eqIn1764.values,
    eqBind8225 = eqIn1764.sheet,
    eqBind8226 = eqIn1764.address,
    eqBind8227 = {
      kind: "table",
      sheet: eqBind8225,
      address: eqBind8226,
      values: eqBind8224,
      valuesTruncated: true,
    };
  return JSON.stringify(eqBind8227).length <= eqIn1766
    ? eqBind8227
    : {
        kind: "table",
        sheet: eqBind8225,
        address: eqBind8226,
        values: eqIn1764.values
          .slice(0, 1)
          .map((item) =>
            item
              .slice(0, 1)
              .map((_item) => eq.eqBind1977(_item, eqIn1765.maxCellChars)),
          ),
        valuesTruncated: true,
      };
}

export {
  Kgt,
  qgt,
  Jgt,
  Xgt,
  resolveWorksheetRef as clampNonNegInt,
} from "./address-preview";
