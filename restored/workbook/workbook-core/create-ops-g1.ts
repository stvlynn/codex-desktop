// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 1.

import type { WorkbookOpsHost } from "./types";
import type { WorkbookCoreEnv } from "./runtime-env";
import {
  featureBagCheckboxType,
  featureBagXfControlsType,
  featureBagXfComplementType,
  featureBagXfComplementsType,
  XF_COMPLEMENTS_MAPPER_EXT_REF,
  CELL_CONTROL,
  XF_CONTROLS,
  MAPPED_FEATURE_PROPERTY_BAGS,
  EXCEL_EPOCH_UTC_MS,
  MS_PER_DAY,
  MS_PER_MINUTE,
  EXCEL_CANONICAL_DATE,
  DATE_FORMULA_NAMES,
  ISO_DATE_TIME_RE,
  TRACE_ERROR_TOKEN,
  CIRC_ERROR_TOKEN,
} from "./constants";

export function createWorkbookOpsG1(env: WorkbookCoreEnv) {
  const {
    BXe,
    H_t,
    Mue,
    U_t,
    Yht,
    Zht,
    apt,
    d,
    formatA1,
    opt,
    workbookAt,
    workbookP,
    z_t,
    zt,
  } = env;
  const wbBind1987 = env["workbookBinding1987"];
  const wbBind1990 = env["workbookBinding1990"];
  const wbBind382 = env["workbookBinding382"];
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp1037 = env["workbookHel" + "per1037"];
  const wbHlp32 = env["workbookHel" + "per32"];
  const wbHlp329 = env["workbookHel" + "per329"];
  const wbHlp38 = env["workbookHel" + "per38"];

  void featureBagCheckboxType;
  void featureBagXfControlsType;
  void featureBagXfComplementType;
  void featureBagXfComplementsType;
  void XF_COMPLEMENTS_MAPPER_EXT_REF;
  void CELL_CONTROL;
  void XF_CONTROLS;
  void MAPPED_FEATURE_PROPERTY_BAGS;
  void EXCEL_EPOCH_UTC_MS;
  void MS_PER_DAY;
  void MS_PER_MINUTE;
  void EXCEL_CANONICAL_DATE;
  void DATE_FORMULA_NAMES;
  void ISO_DATE_TIME_RE;
  void TRACE_ERROR_TOKEN;
  void CIRC_ERROR_TOKEN;
  function workbookGetUtils(host: WorkbookOpsHost) {
    return {
      columnToLetter: (wbIn5480) => {
        if (!Number.isFinite(wbIn5480) || !Number.isInteger(wbIn5480))
          throw Error("columnToLetter(index) requires an integer index.");
        if (wbIn5480 < 1)
          throw Error("columnToLetter(index) requires a 1-based index >= 1.");
        return workbookP(wbIn5480);
      },
      letterToColumn: (wbIn6329) => {
        if (typeof wbIn6329 != "string")
          throw Error("letterToColumn(label) requires a string label.");
        let wbBind16462 = wbHlp329(wbIn6329.trim().replace(/\$/g, ""));
        if (!wbBind16462) throw Error(`Invalid column label: ${wbIn6329}`);
        return wbBind16462;
      },
      toA1String: (wbIn2556, wbIn2557, wbIn2558, wbIn2559) => {
        let wbBind9928 = (wbIn5841, wbIn5842) => {
          if (!Number.isFinite(wbIn5841) || !Number.isInteger(wbIn5841))
            throw Error(`toA1String(${wbIn5842}) requires an integer.`);
          if (wbIn5841 < 1)
            throw Error(
              `toA1String(${wbIn5842}) requires a 1-based index >= 1.`,
            );
        };
        wbBind9928(wbIn2556, "row1Based");
        wbBind9928(wbIn2557, "col1Based");
        let wbBind9929 = `${workbookP(wbIn2557)}${wbIn2556}`;
        if (wbIn2558 === undefined && wbIn2559 === undefined) return wbBind9929;
        let wbBind9930 = wbIn2558 ?? wbIn2556,
          wbBind9931 = wbIn2559 ?? wbIn2557;
        wbBind9928(wbBind9930, "endRow1Based");
        wbBind9928(wbBind9931, "endCol1Based");
        let wbBind9932 = `${workbookP(wbBind9931)}${wbBind9930}`;
        return wbBind9929 === wbBind9932
          ? wbBind9929
          : `${wbBind9929}:${wbBind9932}`;
      },
      fillRight: (wbIn2039, wbIn2040) => {
        if (!Array.isArray(wbIn2039))
          throw Error("fillRight(matrix, width) requires a 2D array.");
        if (
          !Number.isFinite(wbIn2040) ||
          !Number.isInteger(wbIn2040) ||
          wbIn2040 < 1
        )
          throw Error("fillRight(matrix, width) requires width >= 1.");
        if (wbIn2039.length === 0)
          throw Error("fillRight(matrix, width) requires at least one row.");
        return wbIn2039.map((item, index) => {
          if (!Array.isArray(item) || item.length === 0)
            throw Error(
              `fillRight(matrix, width) row ${index} must be a non-empty array.`,
            );
          let wbBind14543 = item.slice(0, wbIn2040),
            wbBind14544 = wbBind14543[wbBind14543.length - 1];
          for (; wbBind14543.length < wbIn2040; ) wbBind14543.push(wbBind14544);
          return wbBind14543;
        });
      },
      fillDown: (wbIn1743, wbIn1744) => {
        if (!Array.isArray(wbIn1743))
          throw Error("fillDown(matrix, height) requires a 2D array.");
        if (
          !Number.isFinite(wbIn1744) ||
          !Number.isInteger(wbIn1744) ||
          wbIn1744 < 1
        )
          throw Error("fillDown(matrix, height) requires height >= 1.");
        if (wbIn1743.length === 0)
          throw Error("fillDown(matrix, height) requires at least one row.");
        let wbBind8149 = wbIn1743
            .map((item, index) => {
              if (!Array.isArray(item) || item.length === 0)
                throw Error(
                  `fillDown(matrix, height) row ${index} must be a non-empty array.`,
                );
              return [...item];
            })
            .slice(0, wbIn1744)
            .map((item) => [...item]),
          wbBind8150 = wbBind8149[wbBind8149.length - 1] ?? [];
        for (; wbBind8149.length < wbIn1744; ) wbBind8149.push([...wbBind8150]);
        return wbBind8149;
      },
    };
  }
  function workbookOp__getNamesFacadeForSheet(
    host: WorkbookOpsHost,
    wbIn7172: unknown,
  ) {
    let wbBind17523 = wbIn7172.trim();
    if (!wbBind17523) return host.p.field_T;
    let wbBind17524 = host.p.field_E.get(wbBind17523);
    if (wbBind17524) return wbBind17524;
    let wbBind17525 = host.p.field_w.createApi(wbBind17523);
    return (host.p.field_E.set(wbBind17523, wbBind17525), wbBind17525);
  }
  function workbookOpSetColorScheme(host: WorkbookOpsHost, wbIn640: unknown) {
    if (!wbIn640) return;
    let wbBind4754 =
      typeof wbIn640 == "object" && "themeColors" in wbIn640
        ? {
            name: wbIn640.name,
            colors: wbIn640.themeColors
              ? (() => {
                  let wbBind9205 = [];
                  for (let [wbBind10556, wbBind10557] of Object.entries(
                    wbIn640.themeColors,
                  )) {
                    if (wbBind10557 === undefined) continue;
                    if (wbBind10557 === null)
                      throw Error(
                        `themeColors.${wbBind10556} cannot be null; omit the key to leave it unchanged.`,
                      );
                    let wbBind11027 = new wbBind382(wbBind10557).toProto();
                    if (!wbBind11027)
                      throw Error(
                        `themeColors.${wbBind10556} must be a valid color; got an unset proto color.`,
                      );
                    wbBind9205.push({
                      name: wbBind10556,
                      color: wbBind11027,
                    });
                  }
                  return wbBind9205.length > 0 ? wbBind9205 : undefined;
                })()
              : undefined,
          }
        : wbIn640;
    host.p.field_r.setColorScheme(wbBind4754);
    host.p.field_i += 1;
    host.m.te();
    host.wb.invalidateConditionalFormattingCache();
    host.wb.queueWorkbookCollabPublish();
    let wbBind4755 = host.p.field_V;
    if (!wbBind4755) return;
    let wbBind4756 = host.wb.theme,
      wbBind4757 = Object.fromEntries(
        (wbBind4756?.colorScheme?.colors ?? [])
          .map((item) => {
            if (!item?.name || !item.color) return null;
            let wbBind15988 = new wbBind382({
              type: "proto",
              proto: item.color,
            }).toConfig();
            return !wbBind15988 ||
              (typeof wbBind15988 == "object" &&
                wbBind15988 &&
                wbBind15988.type === "proto")
              ? null
              : [item.name, wbBind15988];
          })
          .filter((item) => item !== null),
      );
    wbBind4755.record({
      op: "theme.colorScheme.set",
      scheme: {
        name: wbBind4756?.colorScheme?.name ?? "Custom",
        themeColors: wbBind4757,
      },
    });
  }
  function workbookOpRecalculate(host: WorkbookOpsHost) {
    let wbBind5304 = host.m.ae();
    if (wbBind5304.dirty.size === 0) {
      host.m.pt(wbBind5304);
      return;
    }
    let wbBind5305 = new Set();
    for (let wbBind22895 of wbBind5304.dirty)
      wbBind5304.parsed.has(wbBind22895) && wbBind5305.add(wbBind22895);
    if (wbBind5305.size === 0) {
      wbBind5304.dirty.clear();
      return;
    }
    let { order, circular } = BXe(wbBind5304.graph, wbBind5305),
      wbBind5306 = new Set();
    for (let wbBind22990 of circular)
      for (let wbBind23103 of wbBind22990) wbBind5306.add(wbBind23103);
    let wbBind5307 = new Map();
    for (let wbBind7511 of order) {
      if (wbBind5306.has(wbBind7511)) continue;
      let wbBind7577 = wbBind5304.parsed.get(wbBind7511);
      if (!wbBind7577) continue;
      let { sheetName, address } = wbBind1990(wbBind7511),
        wbBind7578 = host.m.zt(sheetName);
      if (!wbBind7578) continue;
      let wbBind7579 = host.m.Lt(address),
        wbBind7580 = host.m.st(sheetName, wbBind5307, wbBind5304, wbBind7511),
        wbBind7581;
      if (
        (wbBind7577.errors.length === 0
          ? ((wbBind7581 = wbHlp38(wbBind7577.expr, wbBind7580)),
            (wbBind7581 = host.m.Tt(wbBind7577.expr, wbBind7581, sheetName)))
          : (wbBind7581 = wbHlp1035("#ERROR!")),
        wbHlp32(wbBind7581))
      ) {
        let wbBind14348 =
          wbBind7581.values[0]?.[0] === undefined
            ? null
            : wbBind7581.values[0][0];
        host.m.bt({
          key: wbBind7511,
          worksheet: wbBind7578,
          coord: wbBind7579,
          arrayValue: wbBind7581,
          sheetName,
        });
        wbBind5307.set(wbBind7511, wbBind14348 ?? null);
        host.m.ft(wbBind7511, wbBind14348 ?? null, wbBind5304, {
          worksheet: wbBind7578,
          coord: wbBind7579,
        });
      } else {
        host.m.xt(wbBind7511);
        wbBind5307.set(wbBind7511, wbBind7581);
        host.m.dt(wbBind7511, wbBind7581);
        host.m.ft(wbBind7511, wbBind7581, wbBind5304, {
          worksheet: wbBind7578,
          coord: wbBind7579,
        });
      }
    }
    for (let wbBind23062 of order) wbBind5304.dirty.delete(wbBind23062);
    if (circular.length > 0)
      for (let wbBind22879 of circular)
        for (let wbBind23063 of wbBind22879)
          wbBind5304.dirty.delete(wbBind23063);
    host.m.pt(wbBind5304);
  }
  function workbookOpTrace(host: WorkbookOpsHost, wbIn7435: unknown) {
    let wbBind17904 = host.m.ue(wbIn7435);
    if (!wbBind17904) return null;
    host.wb.recalculate();
    let wbBind17905 = host.m.ae(),
      wbBind17906 = wbBind1987(wbBind17904.sheetName, wbBind17904.address);
    return host.m.We(wbBind17906, wbBind17905, new Set());
  }
  function workbookOp__getDisplayFormulaForCell(
    host: WorkbookOpsHost,
    wbIn3701: unknown,
    wbIn3702: unknown,
    wbIn3703: unknown,
  ) {
    let wbBind12350 = wbBind1987(wbIn3701, formatA1(wbIn3702, wbIn3703)),
      wbBind12351 = host.p.field_M.get(wbBind12350);
    if (wbBind12351) return wbHlp1037(wbBind12351.display);
    let wbBind12352 = host.p.field_j.getCellProjection(wbBind12350);
    if (wbBind12352 && !wbBind12352.isAnchor)
      return wbHlp1037(wbBind12352.record.displayFormula);
    let wbBind12353 = host.m.zt(wbIn3701);
    if (!wbBind12353) return "";
    let wbBind12354 = wbBind12353.__getCell(wbIn3702, wbIn3703);
    if (!wbBind12354?.formula) return "";
    let wbBind12355 = wbBind12354.formula.trim();
    return wbBind12355
      ? wbHlp1037(wbBind12355.startsWith("=") ? wbBind12355 : `=${wbBind12355}`)
      : "";
  }
  function workbookOp__getFormulaPresenceForCell(
    host: WorkbookOpsHost,
    wbIn1423: unknown,
    wbIn1424: unknown,
    wbIn1425: unknown,
  ) {
    let wbBind7290 = wbBind1987(wbIn1423, formatA1(wbIn1424, wbIn1425)),
      wbBind7291 = host.p.field_M.get(wbBind7290);
    if (wbBind7291)
      return {
        kind: "projected",
        source: "dataTable",
        display: wbBind7291.display,
        master: wbBind7291.master,
        ref: wbBind7291.ref,
        rowInput: wbBind7291.rowInput,
        columnInput: wbBind7291.columnInput,
        isEditable: false,
      };
    let wbBind7292 = host.p.field_j.getCellProjection(wbBind7290);
    if (wbBind7292 && !wbBind7292.isAnchor) {
      let wbBind15647 = wbBind1990(wbBind7292.record.anchorKey);
      return {
        kind: "projected",
        source: "spill",
        display: wbBind7292.record.displayFormula,
        anchor: `${wbBind15647.sheetName}!${wbBind15647.address}`,
        ref: wbBind7292.record.ref,
        isEditable: false,
      };
    }
    let wbBind7293 = host.m.zt(wbIn1423)?.__getCell(wbIn1424, wbIn1425);
    if (wbBind7293?.formula && wbBind7293.formula.trim()) {
      let wbBind19366 = wbBind7293.formula.trim(),
        wbBind19367 = wbBind19366.startsWith("=")
          ? wbBind19366
          : `=${wbBind19366}`;
      return {
        kind: "stored",
        formula: wbBind19367,
        display: wbBind19367,
        isEditable: true,
      };
    }
  }
  function workbookOpToProto(host: WorkbookOpsHost) {
    host.m.Jt();
    let wbBind5932 = host.p.field_w.buildProto(),
      wbBind5933 = H_t(host.wb.comments.threads.toProto()),
      wbBind5934 = host.wb.comments.people.toProto(),
      wbBind5935 = U_t({
        threads: wbBind5933,
        existingNotes: host.p.field__.proto,
        people: wbBind5934,
      }),
      wbBind5936 =
        host.p.field_o?.bags && host.p.field_o.bags.length
          ? host.p.field_o
          : undefined,
      wbBind5937 = {
        id: host.p.field_c,
        sheets: host.p.field_g.toProto(),
        styles: host.p.field_e.toProto(),
        featurePropertyBags: wbBind5936,
        theme: host.wb.theme,
        contentReferences: host.p.field_l,
        images: host.p.field_u,
        people: wbBind5935.people,
        threads: wbBind5933,
        notes: wbBind5935.notes,
        slicerCaches: host.p.field_d,
        pivotCaches: host.p.field_f,
        timelineCaches: host.p.field_p,
        metadata: apt(host.p.field_s),
        definedNames:
          wbBind5932.length > 0
            ? {
                names: wbBind5932,
              }
            : undefined,
        textStyles: [],
        codeEnvironments: [],
        codeBlocks: [],
      };
    return (
      opt({
        proto: wbBind5937,
        makeCellKey: (wbIn16401, wbIn16402) => wbBind1987(wbIn16401, wbIn16402),
        getSpillProjection: (wbIn15779) =>
          host.p.field_j.getCellProjection(wbIn15779),
        hasLambdaDefinedName: (wbIn10043, wbIn10044) => {
          let wbBind20523 = host.p.field_w.lookup(wbIn10043, wbIn10044);
          return wbBind20523
            ? (host.p.field_w.parseEntry(wbBind20523), wbBind20523.isLambda)
            : false;
        },
        stripCompatibilityPrefixes: (wbIn16623) => wbHlp1037(wbIn16623),
      }),
      wbBind5937
    );
  }
  function workbookOpResolve(host: WorkbookOpsHost, wbIn882: unknown) {
    let { prefix, suffix } = z_t(wbIn882);
    if (!prefix || !suffix) throw Error(`Unknown resolve anchor: ${wbIn882}`);
    if (prefix === "wb") return host.wb;
    if (prefix === "ws") {
      for (let wbBind21666 of host.wb.worksheets)
        if (
          wbBind21666.id === suffix ||
          wbBind21666.sheetId === suffix ||
          wbBind21666.name === suffix
        )
          return wbBind21666;
      throw Error(`Worksheet not found: ${wbIn882}`);
    }
    if (prefix === "th") {
      let wbBind20524 = host.wb.comments.getThread(suffix);
      if (!wbBind20524) throw Error(`Thread not found: ${wbIn882}`);
      return wbBind20524;
    }
    if (prefix === "ch") {
      let wbBind8457 = suffix.lastIndexOf(".");
      if (wbBind8457 > 0 && wbBind8457 < suffix.length - 1) {
        let wbBind12291 = suffix.slice(0, wbBind8457),
          wbBind12292 = suffix.slice(wbBind8457 + 1),
          wbBind12293;
        for (let wbBind19773 of host.wb.worksheets)
          if (
            wbBind19773.id === wbBind12291 ||
            wbBind19773.sheetId === wbBind12291 ||
            wbBind19773.name === wbBind12291
          ) {
            wbBind12293 = wbBind19773;
            break;
          }
        if (!wbBind12293) throw Error(`Worksheet not found: ch/${wbBind12291}`);
        let wbBind12294 = wbBind12293.charts.getItemOrNullObject(wbBind12292);
        if (wbBind12294.isNullObject)
          throw Error(`Chart not found: ${wbIn882}`);
        return wbBind12294;
      }
      let wbBind8458 = suffix;
      if (!wbBind8458) throw Error(`Invalid chart anchor: ${wbIn882}`);
      let wbBind8459 = `ch/${wbBind8458}`;
      for (let wbBind20842 of host.wb.worksheets)
        for (let wbBind22280 of wbBind20842.charts.items)
          if (wbBind22280.aid === wbBind8459 || wbBind22280.id === wbBind8458)
            return wbBind22280;
      throw Error(`Chart not found: ${wbIn882}`);
    }
    throw Error(`Unknown resolve anchor: ${wbIn882}`);
  }
  function workbookOpApply(
    host: WorkbookOpsHost,
    wbIn7004: unknown,
    wbIn7005: unknown,
  ) {
    if (!wbIn7005) return Zht(host.wb, wbIn7004);
    if (!host.p.field_K)
      throw Error("Google Sheets adapter is not configured.");
    let wbBind17357 = host.m.ie(),
      wbBind17358 = Zht(host.wb, wbIn7004);
    return host.p.field_K.applyPatch(wbIn7004, wbBind17358, wbBind17357);
  }
  function workbookOpConfigureGoogleSheets(
    host: WorkbookOpsHost,
    wbIn11115: unknown,
  ) {
    return (
      (host.p.field_K = Mue().configureWorkbook(host.wb, wbIn11115)),
      host.wb
    );
  }
  function workbookPrivIe(host: WorkbookOpsHost) {
    return {
      sheets: host.wb.worksheets.items.map((item) => ({
        name: item.name,
        index: item.index ?? 0,
        sheetId: item.sheetId,
        conditionalFormattings: item.conditionalFormattings.items.map(
          (_item) => ({
            ranges: structuredClone(_item.ranges ?? []),
            ruleCount: _item.rules?.length ?? 0,
          }),
        ),
      })),
    };
  }
  function workbookOpOnCrdtUpdateV2(host: WorkbookOpsHost, wbIn6882: unknown) {
    let wbBind17202 = (wbIn13903, wbIn13904) => {
      wbIn6882(new Uint8Array(wbIn13903), wbIn13904);
    };
    return (
      host.p.field_N.on("updateV2", wbBind17202),
      () => {
        host.p.field_N.off("updateV2", wbBind17202);
      }
    );
  }
  function workbookOpRecord(host: WorkbookOpsHost, wbIn1993: unknown) {
    if (host.p.field_V)
      throw Error("Workbook.record does not support nested recordings.");
    host.p.field_Q || host.wb.hydrateCrdtFromProto();
    let wbBind8793 = new Yht(host.wb),
      wbBind8794 = [],
      wbBind8795 = (wbIn11305, wbIn11306) => {
        (wbIn11306 !== host.p.field_z && wbIn11306 !== host.p.field_B) ||
          wbBind8794.push(new Uint8Array(wbIn11305));
      };
    host.p.field_N.on("updateV2", wbBind8795);
    host.p.field_V = wbBind8793;
    try {
      let wbBind15859 = host.m.Rt(host.p.field_z, wbIn1993);
      return (
        host.m.Nt(),
        {
          result: wbBind15859,
          patch: wbBind8793.getPatch(),
          idMap: wbBind8793.getIdMap(),
          crdtUpdateV2:
            wbBind8794.length > 0 ? workbookAt(wbBind8794) : undefined,
        }
      );
    } finally {
      host.p.field_N.off("updateV2", wbBind8795);
      host.p.field_R.stopCapturing();
      host.p.field_V = undefined;
    }
  }
  return {
    workbookGetUtils,
    workbookOp__getNamesFacadeForSheet,
    workbookOpSetColorScheme,
    workbookOpRecalculate,
    workbookOpTrace,
    workbookOp__getDisplayFormulaForCell,
    workbookOp__getFormulaPresenceForCell,
    workbookOpToProto,
    workbookOpResolve,
    workbookOpApply,
    workbookOpConfigureGoogleSheets,
    workbookPrivIe,
    workbookOpOnCrdtUpdateV2,
    workbookOpRecord,
  };
}
