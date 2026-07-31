// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: entity kind maps + early query ops (legacy R_t head).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  formatA1,
  formatA1Range,
  initAddressMetrics,
  initAddressUtils,
  lettersToColIndex,
  parseA1Range,
  parseSheetRef,
  rowTokenToIndex,
} from "../../utils/spreadsheet-address-utils";
import {
  composeScopedId,
  ensureStableIdClusterInit,
  ensureStableIdConstantsInit,
  randomBase36Id,
} from "../stable-id";
import { ensureChartProtoNameMapsInit } from "../chart-proto-name-maps";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { tr, Zn } from "../presentation-protobuf";
import {
  bgt,
  ensureWorkbookEt,
  ensureWr,
  ensureXgt,
  ensureYgt,
  getEmuScale,
  vgt,
} from "./boundary-hooks";
import { eq } from "./query-bag";

import { Jgt, Xgt, resolveWorksheetRef } from "./address-preview";

export const ensureEntityQueryKindsInit = esmInit(() => {
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureWorkbookEt();
  ensureWr();
  ensureXgt();
  ensureYgt();
  initAddressMetrics();
  initAddressUtils();
  ensureChartProtoNameMapsInit();
  const emuScale = getEmuScale();
  eq.eqBind1967 = ["workbook", "sheet", "table", "formula", "thread"];
  eq.t_t = {
    wb: "workbook",
    workbooks: "workbook",
    sheets: "sheet",
    worksheet: "sheet",
    worksheets: "sheet",
    tables: "table",
    range: "table",
    ranges: "table",
    region: "region",
    regions: "region",
    dataregion: "region",
    "data-region": "region",
    dataregions: "region",
    matches: "match",
    formulas: "formula",
    threads: "thread",
    comments: "thread",
    conditionalformat: "conditionalFormatting",
    "conditional-format": "conditionalFormatting",
    conditionalformatting: "conditionalFormatting",
    "conditional-formatting": "conditionalFormatting",
    conditionalformats: "conditionalFormatting",
    "conditional-formats": "conditionalFormatting",
    conditionalformattings: "conditionalFormatting",
    cf: "conditionalFormatting",
    styles: "computedStyle",
    computedstyle: "computedStyle",
    computedstyles: "computedStyle",
    definedname: "definedName",
    "defined-name": "definedName",
    definednames: "definedName",
    "defined-names": "definedName",
    names: "definedName",
    drawing: "drawing",
    drawings: "drawing",
    shape: "drawing",
    shapes: "drawing",
  };
  eq.eqBind1968 = {
    workbook: ["id", "sheets", "tables", "threads"],
    sheet: [
      "id",
      "name",
      "index",
      "range",
      "address",
      "tables",
      "formulas",
      "threads",
    ],
    table: [
      "sheet",
      "address",
      "rows",
      "cols",
      "values",
      "valuesPreviewAddress",
      "valuesPreviewRows",
      "valuesPreviewCols",
      "valuesTruncated",
    ],
    region: [
      "sheet",
      "address",
      "rows",
      "cols",
      "nonEmpty",
      "blank",
      "numeric",
      "text",
      "bool",
      "date",
      "maxTextLength",
      "preview",
      "previewAddress",
      "previewRows",
      "previewCols",
    ],
    match: ["sheet", "address", "value", "formula", "match"],
    formula: ["sheet", "address", "formula"],
    thread: ["id", "sheet", "target", "status", "text", "comments"],
    conditionalFormatting: [
      "sheet",
      "address",
      "type",
      "priority",
      "operator",
      "formula",
      "text",
      "timePeriod",
      "rank",
      "percent",
      "bottom",
      "aboveAverage",
      "equalAverage",
      "stdDev",
      "dxfId",
      "stopIfTrue",
      "colorScale",
      "dataBar",
      "iconSet",
    ],
    definedName: ["name", "scope", "formula"],
    computedStyle: ["sheet", "for", "style"],
    drawing: ["sheet", "drawingType", "id", "name", "geometry", "anchor"],
    notice: ["message"],
  };
  eq.n_t = {
    addr: "address",
    cell: "address",
    cells: "address",
    sheetname: "sheet",
    workbookid: "id",
    sheetid: "id",
    targetcell: "target",
    previewaddress: "previewAddress",
    previewrows: "previewRows",
    previewcols: "previewCols",
    valuespreviewaddress: "valuesPreviewAddress",
    valuespreviewrows: "valuesPreviewRows",
    valuespreviewcols: "valuesPreviewCols",
    valuestruncated: "valuesTruncated",
  };
  eq.eqBind1969 = new Set(eq.eqBind1967);
  eq.eqBind1969.add("match");
  eq.eqBind1969.add("conditionalFormatting");
  eq.eqBind1969.add("computedStyle");
  eq.eqBind1969.add("region");
  eq.eqBind1969.add("definedName");
  eq.eqBind1969.add("drawing");
  eq.r_t = new Set(Object.values(eq.eqBind1968).flat());
  eq.i_t = 12e3;
  eq.a_t = 5;
  eq.o_t = 6;
  eq.s_t = 80;
  eq.c_t = Object.entries(shapeGeometryNameToProto).reduce(
    (accumulator, [eqIn14505, eqIn14506]) => (
      typeof eqIn14506 == "number" && (accumulator[eqIn14506] = eqIn14505),
      accumulator
    ),
    {},
  );
  eq.l_t = (eqIn12526, eqIn12527) =>
    eqIn12526.id === eqIn12527.id ||
    eqIn12526.sheetId === eqIn12527.sheetId ||
    eqIn12526.name === eqIn12527.name;
  eq.u_t = (eqIn968, eqIn969, eqIn970) => {
    let eqBind6043 =
        typeof eqIn969.range == "string" ? eqIn969.range.trim() : "",
      eqBind6044 = eqBind6043
        ? parseSheetRef(eqBind6043)
        : {
            ref: "",
          },
      eqBind6045 = eqBind6043 ? parseA1Range(eqBind6044.ref) : null;
    eqBind6043 &&
      !eqBind6045 &&
      ((eqIn970.notices ??= []),
      eqIn970.notices.push(`Invalid range filter: ${eqBind6043}`));
    let eqBind6046 =
        typeof eqIn969.sheetId == "string" ? eqIn969.sheetId.trim() : "",
      eqBind6047 = eqBind6046 ? Xgt(eqBind6046) : "",
      eqBind6048 = null;
    if (eqBind6047)
      try {
        eqBind6048 = resolveWorksheetRef(eqIn968, eqBind6047);
      } catch (eqBind19326) {
        eqIn970.notices ??= [];
        eqIn970.notices.push(
          eqBind19326 instanceof Error
            ? eqBind19326.message
            : `Worksheet ${eqBind6047} not found.`,
        );
      }
    let eqBind6049 = null;
    if (eqBind6044.sheetName)
      try {
        eqBind6049 = resolveWorksheetRef(eqIn968, eqBind6044.sheetName);
      } catch (eqBind17401) {
        eqBind6048 ||
          ((eqIn970.notices ??= []),
          eqIn970.notices.push(
            eqBind17401 instanceof Error
              ? eqBind17401.message
              : `Worksheet ${eqBind6044.sheetName} not found.`,
          ));
      }
    return (
      eqBind6048 &&
        eqBind6049 &&
        !eq.l_t(eqBind6048, eqBind6049) &&
        ((eqIn970.notices ??= []),
        eqIn970.notices.push(
          `sheetId (${eqBind6046}) does not match range sheet (${eqBind6044.sheetName}); using sheetId.`,
        )),
      {
        sheets: eqBind6048
          ? [eqBind6048]
          : eqBind6049
            ? [eqBind6049]
            : Array.from(eqIn968.worksheets),
        rangeRef: eqBind6045?.ref ?? null,
        bounds: eqBind6045?.bounds ?? null,
      }
    );
  };
  eq.d_t = (eqIn3353) => ({
    maxRows:
      typeof eqIn3353.tableMaxRows == "number" &&
      Number.isFinite(eqIn3353.tableMaxRows)
        ? Math.max(1, Math.floor(eqIn3353.tableMaxRows))
        : eq.a_t,
    maxCols:
      typeof eqIn3353.tableMaxCols == "number" &&
      Number.isFinite(eqIn3353.tableMaxCols)
        ? Math.max(1, Math.floor(eqIn3353.tableMaxCols))
        : eq.o_t,
    maxCellChars:
      typeof eqIn3353.tableMaxCellChars == "number" &&
      Number.isFinite(eqIn3353.tableMaxCellChars)
        ? Math.max(1, Math.floor(eqIn3353.tableMaxCellChars))
        : eq.s_t,
  });
  eq.f_t = (eqIn128, eqIn129, eqIn130, eqIn131, eqIn132) => {
    let eqBind2819 = [],
      eqBind2820 = eqIn129.tokenSet.has("workbook"),
      eqBind2821 = eqIn129.tokenSet.has("sheet"),
      eqBind2822 = eqIn129.tokenSet.has("table"),
      eqBind2823 = eqIn129.tokenSet.has("region"),
      eqBind2824 = eqIn129.tokenSet.has("formula"),
      eqBind2825 = eqIn129.tokenSet.has("thread"),
      eqBind2826 = eqIn129.tokenSet.has("conditionalFormatting"),
      eqBind2827 = eqIn129.tokenSet.has("computedStyle"),
      eqBind2828 = eqIn129.tokenSet.has("definedName"),
      eqBind2829 = eqIn129.tokenSet.has("drawing"),
      eqBind2830 = 0,
      eqBind2831 = 0,
      eqBind2832 = eqIn131.sheets.length
        ? eqIn131.sheets
        : Array.from(eqIn128.worksheets);
    if (eqBind2828) {
      let eqBind8863 = Array.from(eqIn128.worksheets),
        eqBind8864 = new Map();
      for (let eqBind23020 of eqBind8863)
        eqBind8864.set(eqBind23020.index, eqBind23020.name);
      let eqBind8865 = new Set(eqIn131.sheets.map((item) => item.index)),
        eqBind8866 =
          eqIn131.sheets.length > 0 &&
          eqIn131.sheets.length < eqBind8863.length,
        eqBind8867 = eqIn128.toProto().definedNames?.names ?? [];
      for (let eqBind11955 of eqBind8867) {
        let eqBind12211 = eqBind11955.localSheetId;
        if (
          eqBind8866 &&
          typeof eqBind12211 == "number" &&
          !eqBind8865.has(eqBind12211)
        )
          continue;
        let eqBind12212 =
            typeof eqBind12211 == "number"
              ? (eqBind8864.get(eqBind12211) ?? `localSheetId:${eqBind12211}`)
              : "workbook",
          eqBind12213 = eqBind11955.text?.trim(),
          eqBind12214 = eqBind12213
            ? eqBind12213.startsWith("=")
              ? eqBind12213
              : `=${eqBind12213}`
            : "";
        eqBind2819.push({
          kind: "definedName",
          name: eqBind11955.name,
          scope: eqBind12212,
          formula: eqBind12214 || undefined,
        });
      }
    }
    for (let eqBind3260 of eqBind2832) {
      let eqBind3263 = eq.O_t(eqBind3260),
        eqBind3264 = eqBind3260.name,
        eqBind3265 = eqBind3260.index,
        eqBind3266 = eqBind2827
          ? eqIn128.getConditionalFormattingRenderCache(eqBind3264)
          : null,
        eqBind3267 =
          eqBind2821 ||
          eqBind2822 ||
          eqBind2823 ||
          eqBind2824 ||
          eqBind2826 ||
          eqBind2827 ||
          eqBind2829
            ? eqBind3260.toProto()
            : null,
        eqBind3268 = eqBind3267 ? bgt(eqBind3267) : null,
        eqBind3269 = eqIn131.rangeRef ?? eqBind3268,
        eqBind3270 = eqBind3269 && eqBind2822 ? 1 : 0,
        eqBind3271 = 0,
        eqBind3272 = 0;
      eqBind2821 &&
        eqBind2819.push({
          kind: "sheet",
          id: eqBind3263,
          name: eqBind3264,
          index: eqBind3265,
          range: eqBind3268 ?? undefined,
          address: eqBind3268 ?? undefined,
          tables: eqBind3270 || undefined,
          formulas: undefined,
          threads: undefined,
        });
      let eqBind3273 = eqBind3269 ? eqBind3260.getRange(eqBind3269) : null;
      if (eqBind2822 && eqBind3269 && eqBind3273) {
        let eqBind15319 = eqBind3273.values.map((item) =>
          item.map((_item) => eq.eqBind1976(_item)),
        );
        eqBind2830 += 1;
        eqBind2819.push({
          kind: "table",
          sheet: eqBind3264,
          address: eqBind3269,
          rows: eqBind15319.length || undefined,
          cols: eqBind15319[0]?.length || undefined,
          values: eqBind15319,
        });
      }
      if (eqBind2823 && eqBind3267) {
        let eqBind22100 = eq.v_t(eqBind3264, eqBind3267, eqIn131, eqIn132);
        eqBind22100.length > 0 && eqBind2819.push(...eqBind22100);
      }
      if (eqBind2824 && eqBind3269 && eqBind3273) {
        let eqBind10492 = eqIn131.rangeRef
            ? eqIn131.bounds
            : parseA1Range(eqBind3269)?.bounds,
          eqBind10493 = eqBind3273.formulas;
        if (eqBind10492)
          for (
            let eqBind11963 = 0;
            eqBind11963 < eqBind10493.length;
            eqBind11963 += 1
          ) {
            let eqBind12550 = eqBind10493[eqBind11963] ?? [];
            for (
              let eqBind13651 = 0;
              eqBind13651 < eqBind12550.length;
              eqBind13651 += 1
            ) {
              let eqBind14346 = eqBind12550[eqBind13651];
              if (!eqBind14346 || !eqBind14346.trim()) continue;
              let eqBind14347 = formatA1(
                eqBind10492.startRow + eqBind11963,
                eqBind10492.startCol + eqBind13651,
              );
              eqBind3271 += 1;
              eqBind2819.push({
                kind: "formula",
                sheet: eqBind3264,
                address: eqBind14347,
                formula: eqBind14346,
              });
            }
          }
      }
      if (eqBind2827 && eqBind3269 && eqBind3273) {
        let eqBind6148 = eqIn131.rangeRef
            ? eqIn131.bounds
            : parseA1Range(eqBind3269)?.bounds,
          eqBind6149 = eqBind3273.values,
          eqBind6150 = eqBind3273.formulas;
        if (eqBind6148)
          for (
            let eqBind6701 = eqBind6148.startRow;
            eqBind6701 <= eqBind6148.endRow;
            eqBind6701 += 1
          )
            for (
              let eqBind6924 = eqBind6148.startCol;
              eqBind6924 <= eqBind6148.endCol;
              eqBind6924 += 1
            ) {
              let eqBind7218 = formatA1(eqBind6701, eqBind6924),
                eqBind7219 =
                  eqBind6149[eqBind6701 - eqBind6148.startRow]?.[
                    eqBind6924 - eqBind6148.startCol
                  ],
                eqBind7220 =
                  eqBind6150[eqBind6701 - eqBind6148.startRow]?.[
                    eqBind6924 - eqBind6148.startCol
                  ];
              if (eqBind7219 == null && !eqBind7220) continue;
              let eqBind7221 = vgt(eqBind3260.getRange(eqBind7218)),
                eqBind7222 = eqBind3260.__getCell(eqBind6701, eqBind6924),
                eqBind7223 =
                  eqBind3266?.getFillCss(eqBind6701, eqBind6924, eqBind7222) ??
                  null,
                eqBind7224 =
                  eqBind3266?.getTextColor(
                    eqBind6701,
                    eqBind6924,
                    eqBind7222,
                  ) ?? null,
                eqBind7225 = {
                  ...eqBind7221,
                };
              if (eqBind7223) {
                let eqBind21984 = Jgt(eqBind7223);
                eqBind21984 && (eqBind7225.fill = eqBind21984);
              }
              eqBind7224 &&
                (eqBind7225.font = {
                  ...(eqBind7225.font ?? {}),
                  fill: {
                    type: tr.FILL_TYPE_SOLID,
                    color: eqBind7224,
                    gradientStops: [],
                    pictureEffects: [],
                  },
                });
              eqBind2819.push({
                kind: "computedStyle",
                sheet: eqBind3264,
                for: eqBind7218,
                style: eqBind7225,
              });
            }
      }
      if (eqBind2826 && eqBind3267) {
        let eqBind21288 = eq.x_t(
          eqBind3264,
          eqBind3267.conditionalFormattings ?? [],
          eqIn131,
        );
        eqBind21288.length > 0 && eqBind2819.push(...eqBind21288);
      }
      if (eqBind2829 && eqBind3267) {
        let eqBind21046 = eq.h_t(
          eqBind3264,
          eqBind3267.drawings ?? [],
          eqBind3260.sheetId ?? eqBind3260.id ?? eqBind3264,
        );
        eqBind21046.length > 0 && eqBind2819.push(...eqBind21046);
      }
      if (eqBind2825) {
        let eqBind18947 = eq.D_t(eqIn128.comments.threads.items, eqBind3260);
        for (let eqBind21393 of eqBind18947) {
          let eqBind21948 = eq.b_t(eqBind21393);
          eqBind21948 &&
            ((eqBind2831 += 1),
            (eqBind3272 += 1),
            eqBind2819.push(eqBind21948));
        }
      }
      if (eqBind2821 && (eqBind3271 > 0 || eqBind3272 > 0)) {
        let eqBind15371;
        for (
          let eqBind18257 = eqBind2819.length - 1;
          eqBind18257 >= 0;
          --eqBind18257
        ) {
          let eqBind19468 = eqBind2819[eqBind18257];
          if (
            eqBind19468 &&
            eqBind19468.kind === "sheet" &&
            "id" in eqBind19468 &&
            eqBind19468.id === eqBind3263
          ) {
            eqBind15371 = eqBind19468;
            break;
          }
        }
        eqBind15371 &&
          ((eqBind15371.formulas = eqBind3271 || undefined),
          (eqBind15371.threads = eqBind3272 || undefined));
      }
    }
    return (
      eqBind2820 &&
        eqBind2819.unshift({
          kind: "workbook",
          id: eqIn130,
          sheets: eqIn128.worksheets.getSheetCount(),
          tables: eqBind2830 || undefined,
          threads: eqBind2831 || undefined,
        }),
      eqBind2819.length === 0 &&
        !eqIn129.tokenSet.has("match") &&
        eqBind2819.push({
          kind: "notice",
          message: "No records matched the requested kinds.",
        }),
      eqBind2819
    );
  };
  eq.eqBind1970 = (eqIn11006) => {
    let eqBind21530 = Number.parseInt(eqIn11006 ?? "", 10);
    return Number.isFinite(eqBind21530) ? eqBind21530 : undefined;
  };
  eq.eqBind1971 = (eqIn10705) => {
    let eqBind21206 = Number.parseFloat(eqIn10705 ?? "");
    return Number.isFinite(eqBind21206) ? Math.round(eqBind21206) : undefined;
  };
  eq.eqBind1972 = (eqIn4007) => {
    if (!eqIn4007) return;
    let eqBind12914 = eq.eqBind1970(eqIn4007.rowId ?? undefined),
      eqBind12915 = eq.eqBind1970(eqIn4007.colId ?? undefined);
    if (eqBind12914 === undefined || eqBind12915 === undefined) return;
    let eqBind12916 = eq.eqBind1971(eqIn4007.rowOffset ?? undefined) ?? 0,
      eqBind12917 = eq.eqBind1971(eqIn4007.colOffset ?? undefined) ?? 0;
    return {
      row: eqBind12914,
      col: eqBind12915,
      rowOffsetEmu: eqBind12916,
      colOffsetEmu: eqBind12917,
      rowOffsetPx: Math.round(eqBind12916 * emuScale),
      colOffsetPx: Math.round(eqBind12917 * emuScale),
    };
  };
  eq.p_t = (eqIn4965) => {
    let eqBind14381 = eq.eqBind1971(eqIn4965.extentCx ?? undefined),
      eqBind14382 = eq.eqBind1971(eqIn4965.extentCy ?? undefined);
    if (eqBind14381 === undefined && eqBind14382 === undefined) return;
    let eqBind14383 = {};
    return (
      eqBind14381 !== undefined &&
        ((eqBind14383.widthEmu = eqBind14381),
        (eqBind14383.widthPx = Math.round(eqBind14381 * emuScale))),
      eqBind14382 !== undefined &&
        ((eqBind14383.heightEmu = eqBind14382),
        (eqBind14383.heightPx = Math.round(eqBind14382 * emuScale))),
      eqBind14383
    );
  };
  eq.m_t = (eqIn6901) => {
    let eqBind17231 = eq.eqBind1972(eqIn6901.fromAnchor ?? undefined),
      eqBind17232 = eq.eqBind1972(eqIn6901.toAnchor ?? undefined),
      eqBind17233 = eq.p_t(eqIn6901);
    if (!eqBind17231 && !eqBind17232 && !eqBind17233) return;
    let eqBind17234 = {};
    return (
      eqBind17231 && (eqBind17234.from = eqBind17231),
      eqBind17232 && (eqBind17234.to = eqBind17232),
      eqBind17233 && (eqBind17234.extent = eqBind17233),
      eqBind17234
    );
  };
  eq.h_t = (eqIn1767, eqIn1768, eqIn1769) =>
    eqIn1768.length
      ? eqIn1768.map((item) => {
          let eqBind8637 = item?.shape
              ? "shape"
              : item?.chart
                ? "chart"
                : item?.imageReference
                  ? "image"
                  : "other",
            eqBind8638 = item?.shape?.shape?.geometry,
            eqBind8639 =
              typeof eqBind8638 == "number" ? eq.c_t[eqBind8638] : undefined,
            eqBind8640 = eq.m_t(item ?? {}),
            eqBind8641 = {
              kind: "drawing",
              sheet: eqIn1767,
              drawingType: eqBind8637,
              id:
                item?.shape?.id ??
                (item?.chart?.id
                  ? composeScopedId("ch", eqIn1769, item.chart.id)
                  : undefined) ??
                item?.imageReference?.id ??
                undefined,
              name: item?.shape?.name ?? undefined,
              geometry: eqBind8639,
              anchor: eqBind8640,
            };
          return (eqBind8640 || delete eqBind8641.anchor, eqBind8641);
        })
      : [];
  eq.g_t = 4;
  eq.__t = 3;
  eq.v_t = (eqIn401, eqIn402, eqIn403, eqIn404) => {
    let eqBind3825 = [],
      eqBind3826 = new Set(),
      eqBind3827 = new Set(),
      eqBind3828 = eqIn403.rangeRef ? eqIn403.bounds : null;
    for (let eqBind11989 of eqIn402.rows ?? [])
      for (let eqBind12581 of eqBind11989.cells ?? []) {
        let eqBind12960 = eqBind12581.address;
        if (
          !eqBind12960 ||
          (eqBind3828 && !eq.eqBind1979(eqBind12960, eqBind3828))
        )
          continue;
        let eqBind12961 = eqBind12581.value ?? null,
          eqBind12962 = eqBind12581.formula ?? null,
          eqBind12963 = eqBind12961 !== "" && eqBind12961 != null,
          eqBind12964 = eqBind12962 != null && eqBind12962.trim().length > 0;
        if (!eqBind12963 && !eqBind12964) continue;
        let eqBind12965 = rowTokenToIndex(eqBind12960),
          eqBind12966 = lettersToColIndex(eqBind12960);
        eqBind3825.push({
          row: eqBind12965,
          col: eqBind12966,
          value: eqBind12961,
          formula: eqBind12962,
        });
        eqBind3826.add(eqBind12965);
        eqBind3827.add(eqBind12966);
      }
    if (eqBind3825.length === 0) return [];
    let eqBind3829 = eq.eqBind1973(Array.from(eqBind3826)),
      eqBind3830 = eq.eqBind1973(Array.from(eqBind3827));
    if (eqBind3829.length === 0 || eqBind3830.length === 0) return [];
    let eqBind3831 = [];
    for (let eqBind4897 of eqBind3829)
      for (let eqBind4952 of eqBind3830) {
        let eqBind4978 = {
            startRow: eqBind4897.start,
            endRow: eqBind4897.end,
            startCol: eqBind4952.start,
            endCol: eqBind4952.end,
          },
          eqBind4979 = eqBind4978.endRow - eqBind4978.startRow + 1,
          eqBind4980 = eqBind4978.endCol - eqBind4978.startCol + 1,
          eqBind4981 = eqBind4979 * eqBind4980,
          eqBind4982 = eqBind3825.filter(
            (item) =>
              item.row >= eqBind4978.startRow &&
              item.row <= eqBind4978.endRow &&
              item.col >= eqBind4978.startCol &&
              item.col <= eqBind4978.endCol,
          ),
          eqBind4983 = eqBind4982.length;
        if (eqBind4981 < eq.g_t || eqBind4983 < eq.__t) continue;
        let eqBind4984 = 0,
          eqBind4985 = 0,
          eqBind4986 = 0,
          eqBind4987 = 0,
          eqBind4988 = 0;
        for (let eqBind12069 of eqBind4982) {
          let eqBind12323 = eqBind12069.value;
          if (typeof eqBind12323 == "number") {
            eqBind4984 += 1;
            continue;
          }
          if (typeof eqBind12323 == "boolean") {
            eqBind4986 += 1;
            continue;
          }
          if (eqBind12323 instanceof Date) {
            eqBind4987 += 1;
            continue;
          }
          let eqBind12324 =
            typeof eqBind12323 == "string"
              ? eqBind12323
              : (eqBind12069.formula ?? null);
          eqBind12324 != null &&
            ((eqBind4985 += 1),
            (eqBind4988 = Math.max(eqBind4988, eqBind12324.length)));
        }
        let eqBind4989 = eq.y_t(eqBind4978, eqBind4982, eqIn404),
          eqBind4990 = {
            kind: "region",
            sheet: eqIn401,
            address: formatA1Range(eqBind4978),
            rows: eqBind4979 || undefined,
            cols: eqBind4980 || undefined,
            nonEmpty: eqBind4983 || undefined,
            blank: eqBind4981 - eqBind4983 || undefined,
            numeric: eqBind4984 || undefined,
            text: eqBind4985 || undefined,
            bool: eqBind4986 || undefined,
            date: eqBind4987 || undefined,
            maxTextLength: eqBind4988 || undefined,
            preview: eqBind4989.values,
            previewAddress: eqBind4989.address,
            previewRows: eqBind4989.rows,
            previewCols: eqBind4989.cols,
          };
        eqBind3831.push(eqBind4990);
      }
    return (
      eqBind3831.sort(
        (eqIn15172, eqIn15173) =>
          (eqIn15173.nonEmpty ?? 0) - (eqIn15172.nonEmpty ?? 0),
      ),
      eqBind3831
    );
  };
});
