// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 3.

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

export function createWorkbookOpsG3(env: WorkbookCoreEnv) {
  const { UXe, workbookP } = env;
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp32 = env["workbookHel" + "per32"];
  const wbHlp36 = env["workbookHel" + "per36"];
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
  function workbookPrivYe(
    host: WorkbookOpsHost,
    wbIn3914: unknown,
    wbIn3915: unknown,
    wbIn3916: unknown,
  ) {
    let wbBind12798 = wbIn3914.name.toUpperCase();
    if (wbBind12798 === "LAMBDA" || wbBind12798 === "_XLFN.LAMBDA")
      return host.m.Re(wbIn3914, wbIn3915.currentSheet, wbIn3915, wbIn3916);
    if (wbBind12798 === "COLUMN" || wbBind12798 === "_XLFN.COLUMN")
      return host.m.ke(wbIn3914, wbIn3915);
    if (wbBind12798 === "LET" || wbBind12798 === "_XLFN.LET")
      return host.m.Me(wbIn3914, wbIn3915, wbIn3916);
    if (wbBind12798 === "SHEET" || wbBind12798 === "_XLFN.SHEET")
      return host.m.Ae(wbIn3914, wbIn3915);
    if (wbBind12798 === "SHEETS" || wbBind12798 === "_XLFN.SHEETS")
      return host.m.je(wbIn3914, wbIn3915);
  }
  function workbookPrivBe(
    host: WorkbookOpsHost,
    wbIn7916: unknown,
    wbIn7917: unknown,
  ) {
    let wbBind18390 = host.m.Se(wbIn7916[0], wbIn7917, true);
    if (host.m.Ut(wbBind18390)) return wbBind18390;
    let wbBind18391 = wbBind18390[0] ?? wbIn7917.currentSheet ?? null;
    return wbBind18391
      ? (host.m.Fe(wbBind18391) ?? wbHlp1035("#N/A"))
      : wbHlp1035("#N/A");
  }
  function workbookPrivXe(
    host: WorkbookOpsHost,
    wbIn6668: unknown,
    wbIn6669: unknown,
  ) {
    if (wbIn6668.length === 0 || wbIn6668[0] === undefined) return host.m.De();
    let wbBind16960 = host.m.Se(wbIn6668[0], wbIn6669, false);
    return host.m.Ut(wbBind16960)
      ? wbBind16960
      : wbBind16960.length === 0
        ? wbHlp1035("#REF!")
        : new Set(wbBind16960).size;
  }
  function workbookPrivSe(
    host: WorkbookOpsHost,
    wbIn3551: unknown,
    wbIn3552: unknown,
    wbIn3553: unknown,
  ) {
    if (wbIn3551 === undefined)
      return wbIn3553 && wbIn3552.currentSheet ? [wbIn3552.currentSheet] : [];
    let wbBind12029 = host.m.Ce(wbIn3551);
    if (wbBind12029.length > 0) return wbBind12029;
    let wbBind12030 = host.m.Te(wbIn3551);
    if (wbBind12030 === undefined) return [];
    if (host.m.Ut(wbBind12030)) return wbBind12030;
    if (wbBind12030 == null)
      return wbIn3552.currentSheet ? [wbIn3552.currentSheet] : [];
    if (typeof wbBind12030 == "string") {
      let wbBind22432 = host.m.Ee(wbBind12030);
      return wbBind22432 ? [wbBind22432] : [];
    }
    return typeof wbBind12030 == "number" ? wbHlp1035("#N/A") : [];
  }
  function workbookPrivCe(host: WorkbookOpsHost, wbIn5760: unknown) {
    let wbBind15683 = host.m.we(wbIn5760);
    if (!wbBind15683) return [];
    let wbBind15684 = wbHlp36(wbBind15683);
    if (!wbBind15684) return [];
    let wbBind15685 = new Set();
    for (let wbBind21368 of wbBind15684)
      if (wbBind21368)
        for (let wbBind22658 of wbBind21368)
          wbBind22658?.sheet?.sheetName &&
            wbBind15685.add(wbBind22658.sheet.sheetName);
    return Array.from(wbBind15685);
  }
  function workbookPrivWe(host: WorkbookOpsHost, wbIn12275: unknown) {
    return Array.isArray(wbIn12275)
      ? wbIn12275
      : wbHlp32(wbIn12275)
        ? wbIn12275.values
        : null;
  }
  function workbookPrivTe(host: WorkbookOpsHost, wbIn11585: unknown) {
    return Array.isArray(wbIn11585)
      ? wbIn11585[0]?.[0]
      : wbHlp32(wbIn11585)
        ? wbIn11585.values[0]?.[0]
        : wbIn11585;
  }
  function workbookPrivEe(host: WorkbookOpsHost, wbIn5557: unknown) {
    let wbBind15358 = wbIn5557.trim();
    if (!wbBind15358) return null;
    let wbBind15359 = wbBind15358.indexOf("!");
    return (
      wbBind15359 >= 0 && (wbBind15358 = wbBind15358.slice(0, wbBind15359)),
      wbBind15358.startsWith("'") &&
        wbBind15358.endsWith("'") &&
        (wbBind15358 = wbBind15358.slice(1, -1).replace(/''/g, "'")),
      wbBind15358.trim() || null
    );
  }
  function workbookPrivOe(
    host: WorkbookOpsHost,
    wbIn3924: unknown,
    wbIn3925: unknown,
    wbIn3926: unknown,
    wbIn3927: unknown,
  ) {
    let wbBind12807 = host.p.field_w.normalizeName(wbIn3924);
    if (!wbBind12807) return;
    let wbBind12808 = host.p.field_w.lookup(wbBind12807, wbIn3926.currentSheet);
    if (!wbBind12808) return;
    let wbBind12809 = host.p.field_w.parseEntry(wbBind12808);
    if (!wbBind12808.isLambda || !wbBind12809 || wbBind12809.errors.length > 0)
      return;
    if (wbBind12809.expr.kind !== "FunctionCall") return wbHlp1035("#NAME?");
    let wbBind12810 = host.m.Re(
      wbBind12809.expr,
      wbBind12808.scopeSheet ?? wbIn3926.currentSheet,
      wbIn3926,
      wbIn3927,
    );
    return host.m.Wt(wbBind12810)
      ? wbBind12810.invoke(wbIn3925, wbIn3926)
      : wbBind12810;
  }
  function workbookPrivKe(
    host: WorkbookOpsHost,
    wbIn4530: unknown,
    wbIn4531: unknown,
  ) {
    let wbBind13787 = wbIn4530.args[0];
    return !wbBind13787 || wbBind13787.kind === "MissingArg"
      ? (wbIn4531.activeCellAddress?.col ?? wbHlp1035("#VALUE!"))
      : wbBind13787.kind === "RangeRef"
        ? (host.p.field_O.getColumnIndex(wbBind13787.ref, {
            fallbackSheet: wbIn4531.currentSheet,
            activeCellAddress: wbIn4531.activeCellAddress,
          }) ?? wbHlp1035("#VALUE!"))
        : wbHlp1035("#VALUE!");
  }
  function workbookPrivAe(
    host: WorkbookOpsHost,
    wbIn6577: unknown,
    wbIn6578: unknown,
  ) {
    let wbBind16838 = wbIn6577.args[0],
      wbBind16839 = wbBind16838
        ? host.m.Ne(wbBind16838, wbIn6578, wbIn6578.currentSheet)
        : (wbIn6578.currentSheet ?? null);
    return wbBind16839 == null
      ? wbHlp1035("#N/A")
      : host.m.Ut(wbBind16839)
        ? wbBind16839
        : (host.m.Fe(wbBind16839) ?? wbHlp1035("#N/A"));
  }
  function workbookPrivJe(
    host: WorkbookOpsHost,
    wbIn2449: unknown,
    wbIn2450: unknown,
  ) {
    let wbBind9735 = wbIn2449.args[0];
    if (!wbBind9735 || wbBind9735.kind === "MissingArg")
      return host.p.field_g.getSheetCount();
    if (wbBind9735.kind === "RangeRef") {
      let wbBind14326 = host.p.field_O.getSheetSpan(wbBind9735.ref, {
        fallbackSheet: wbIn2450.currentSheet,
        activeCellAddress: wbIn2450.activeCellAddress,
      });
      return wbBind14326 == null
        ? wbHlp1035("#N/A")
        : host.m.Ut(wbBind14326)
          ? wbBind14326
          : (host.m.Ie(
              wbBind14326.startSheet,
              wbBind14326.endSheet ?? wbBind14326.startSheet,
            ) ?? wbHlp1035("#N/A"));
    }
    let wbBind9736 = host.m.Ne(wbBind9735, wbIn2450, wbIn2450.currentSheet);
    return wbBind9736 == null
      ? wbHlp1035("#N/A")
      : host.m.Ut(wbBind9736)
        ? wbBind9736
        : (host.m.Ie(wbBind9736, wbBind9736) ?? wbHlp1035("#N/A"));
  }
  function workbookPrivMe(
    host: WorkbookOpsHost,
    wbIn2168: unknown,
    wbIn2169: unknown,
    wbIn2170: unknown,
  ) {
    let wbBind9159 = wbIn2168.args.length;
    if (wbBind9159 < 3 || wbBind9159 % 2 == 0) return wbHlp1035("#VALUE!");
    let wbBind9160 = new Map();
    wbIn2170.push(wbBind9160);
    try {
      let wbBind11209 = 0;
      for (; wbBind11209 + 2 < wbBind9159; ) {
        let wbBind13200 = wbIn2168.args[wbBind11209],
          wbBind13201 = wbIn2168.args[wbBind11209 + 1];
        if (!wbBind13200 || !wbBind13201) return wbHlp1035("#VALUE!");
        let wbBind13202 = host.m.Le(wbBind13200);
        if (wbBind13202 == null) return wbHlp1035("#VALUE!");
        if (host.m.Ut(wbBind13202)) return wbBind13202;
        let { primary, alias } = wbBind13202,
          wbBind13203 = wbHlp38(wbBind13201, wbIn2169);
        if (host.m.Ut(wbBind13203)) return wbBind13203;
        wbBind9160.set(primary, wbBind13203);
        alias && alias !== primary && wbBind9160.set(alias, wbBind13203);
        wbBind11209 += 2;
      }
      let wbBind11210 = wbIn2168.args[wbBind11209];
      return wbBind11210
        ? wbHlp38(wbBind11210, wbIn2169)
        : wbHlp1035("#VALUE!");
    } finally {
      wbIn2170.pop();
    }
  }
  function workbookPrivNe(
    host: WorkbookOpsHost,
    wbIn6579: unknown,
    wbIn6580: unknown,
    wbIn6581: unknown,
  ) {
    if (wbIn6579.kind === "RangeRef")
      return host.p.field_O.getSheetName(wbIn6579.ref, {
        fallbackSheet: wbIn6581,
        activeCellAddress: wbIn6580.activeCellAddress,
      });
    let wbBind16840 = wbHlp38(wbIn6579, wbIn6580);
    return host.m.Pe(wbBind16840);
  }
  function workbookPrivPe(host: WorkbookOpsHost, wbIn3355: unknown) {
    if (host.m.Ut(wbIn3355)) return wbIn3355;
    if (wbHlp32(wbIn3355)) {
      let wbBind22130 = wbIn3355.values[0]?.[0] ?? null;
      return host.m.Pe(wbBind22130);
    }
    if (wbIn3355 == null) return null;
    if (typeof wbIn3355 == "string") {
      let wbBind22370 = wbIn3355.trim();
      return wbBind22370 === "" ? null : wbBind22370;
    }
    if (typeof wbIn3355 == "number") {
      if (!Number.isFinite(wbIn3355)) return null;
      let wbBind19755 = Math.trunc(wbIn3355) - 1;
      return wbBind19755 < 0
        ? null
        : host.p.field_g.getSheetNameByIndex(wbBind19755);
    }
    return null;
  }
  function workbookPrivFe(host: WorkbookOpsHost, wbIn8401: unknown) {
    if (!wbIn8401) return null;
    let wbBind18908 = wbIn8401.trim();
    if (!wbBind18908) return null;
    let wbBind18909 = host.p.field_g.getSheetIndex(wbBind18908);
    return wbBind18909 == null ? null : wbBind18909 + 1;
  }
  function workbookPrivIe(
    host: WorkbookOpsHost,
    wbIn5364: unknown,
    wbIn5365: unknown,
  ) {
    let wbBind15076 = wbIn5364.trim();
    if (!wbBind15076) return null;
    let wbBind15077 = host.p.field_g.getSheetIndex(wbBind15076);
    if (wbBind15077 == null) return null;
    if (!wbIn5365) return 1;
    let wbBind15078 = wbIn5365.trim();
    if (!wbBind15078) return null;
    let wbBind15079 = host.p.field_g.getSheetIndex(wbBind15078);
    return wbBind15079 == null ? null : Math.abs(wbBind15079 - wbBind15077) + 1;
  }
  function workbookPrivLe(host: WorkbookOpsHost, wbIn3831: unknown) {
    let wbBind12629 = null;
    if (wbIn3831.kind === "RangeRef" && wbIn3831.ref.kind === "Named")
      wbBind12629 = wbIn3831.ref.name;
    else if (wbIn3831.kind === "StringLiteral") wbBind12629 = wbIn3831.value;
    else return wbHlp1035("#VALUE!");
    if (!wbBind12629) return null;
    let wbBind12630 = host.p.field_w.normalizeName(wbBind12629);
    if (!wbBind12630) return null;
    let wbBind12631 = wbBind12629.replace(/^_XLPM\./i, ""),
      wbBind12632 = host.p.field_w.normalizeName(wbBind12631);
    return wbBind12632 && wbBind12632 !== wbBind12630
      ? {
          primary: wbBind12630,
          alias: wbBind12632,
        }
      : {
          primary: wbBind12630,
        };
  }
  function workbookPrivRe(
    host: WorkbookOpsHost,
    wbIn4025: unknown,
    wbIn4026: unknown,
    wbIn4027: unknown,
    wbIn4028: unknown,
  ) {
    if (wbIn4025.args.length === 0) return wbHlp1035("#VALUE!");
    let wbBind12967 = wbIn4025.args.slice(0, -1),
      wbBind12968 = wbIn4025.args[wbIn4025.args.length - 1],
      wbBind12969 = [];
    for (let wbBind20944 of wbBind12967) {
      let wbBind21493 = host.m.ze(wbBind20944);
      if (!wbBind21493) return wbHlp1035("#VALUE!");
      wbBind12969.push(wbBind21493);
    }
    return {
      kind: "Lambda",
      invoke: (wbIn14507, wbIn14508) =>
        host.m.Be(
          wbBind12969,
          wbBind12968,
          wbIn14507,
          wbIn14508,
          wbIn4026 ?? wbIn4027.currentSheet,
          wbIn4028,
        ),
    };
  }
  function workbookPrivZe(host: WorkbookOpsHost, wbIn7219: unknown) {
    return wbIn7219.kind === "RangeRef" && wbIn7219.ref.kind === "Named"
      ? host.p.field_w.normalizeName(wbIn7219.ref.name)
      : wbIn7219.kind === "StringLiteral"
        ? host.p.field_w.normalizeName(wbIn7219.value)
        : null;
  }
  function workbookPrivBe(
    host: WorkbookOpsHost,
    wbIn4629: unknown,
    wbIn4630: unknown,
    wbIn4631: unknown,
    wbIn4632: unknown,
    wbIn4633: unknown,
    wbIn4634: unknown,
  ) {
    if (wbIn4631.length !== wbIn4629.length) return wbHlp1035("#VALUE!");
    let wbBind13902 = new Map();
    for (let wbBind22819 = 0; wbBind22819 < wbIn4629.length; wbBind22819 += 1)
      wbBind13902.set(wbIn4629[wbBind22819], wbIn4631[wbBind22819]);
    wbIn4634.push(wbBind13902);
    let wbBind13903 = wbIn4632.currentSheet;
    wbIn4633 && (wbIn4632.currentSheet = wbIn4633);
    try {
      return wbHlp38(wbIn4630, wbIn4632);
    } finally {
      wbIn4633 && (wbIn4632.currentSheet = wbBind13903);
      wbIn4634.pop();
    }
  }
  function workbookPrivVe(
    host: WorkbookOpsHost,
    wbIn2287: unknown,
    wbIn2288: unknown,
    wbIn2289: unknown,
    wbIn2290: unknown,
  ) {
    let wbBind9380 = host.p.field_w.normalizeName(wbIn2287);
    if (!wbBind9380) return [];
    let wbBind9381 = `${wbIn2288 ?? ""}::${wbBind9380}`;
    if (wbIn2289.has(wbBind9381)) return [];
    wbIn2289.add(wbBind9381);
    let wbBind9382 = host.p.field_w.lookup(wbBind9380, wbIn2288);
    if (!wbBind9382) {
      let wbBind19214 = host.p.field_k.expand(
        {
          tableName: wbBind9380,
          section: "All",
        },
        {
          fallbackSheet: wbIn2288,
        },
      );
      return (wbIn2289.delete(wbBind9381), wbBind19214);
    }
    let wbBind9383 = host.p.field_w.parseEntry(wbBind9382);
    if (!wbBind9383 || wbBind9383.errors.length > 0)
      return (wbIn2289.delete(wbBind9381), []);
    let wbBind9384 = wbBind9382.scopeSheet ?? wbIn2288,
      wbBind9385 = [];
    if (wbBind9383.expr.kind === "RangeRef")
      wbBind9385 = host.m.Ze(
        wbBind9383.expr.ref,
        wbBind9384,
        wbIn2289,
        wbIn2290,
      );
    else
      for (let wbBind22712 of UXe(wbBind9383.expr))
        wbBind9385 = wbBind9385.concat(
          host.m.Ze(wbBind22712, wbBind9384, wbIn2289, wbIn2290),
        );
    return (wbIn2289.delete(wbBind9381), wbBind9385);
  }
  function workbookPrivHe(
    host: WorkbookOpsHost,
    wbIn377: unknown,
    wbIn378: unknown,
    wbIn379: unknown,
    wbIn380: unknown,
    wbIn381: unknown,
  ) {
    switch (wbIn377.kind) {
      case "Cell": {
        let wbBind20476 = wbIn378.cellAddressToKey(
          host.m.Qe(wbIn377.addr, wbIn379),
        );
        return wbBind20476
          ? [[wbIn378.getCellValue(wbBind20476)]]
          : [[wbHlp1035("#REF!")]];
      }
      case "Range": {
        let wbBind8946 = Math.min(wbIn377.start.row, wbIn377.end.row),
          wbBind8947 = Math.max(wbIn377.start.row, wbIn377.end.row),
          wbBind8948 = Math.min(wbIn377.start.col, wbIn377.end.col),
          wbBind8949 = Math.max(wbIn377.start.col, wbIn377.end.col),
          wbBind8950 =
            wbIn377.start.sheet?.sheetName ??
            wbIn377.end.sheet?.sheetName ??
            wbIn379,
          wbBind8951 = [];
        for (
          let wbBind12853 = wbBind8946;
          wbBind12853 <= wbBind8947;
          wbBind12853 += 1
        ) {
          let wbBind13365 = [];
          for (
            let wbBind15132 = wbBind8948;
            wbBind15132 <= wbBind8949;
            wbBind15132 += 1
          ) {
            let wbBind15769 = wbIn378.cellAddressToKey({
              sheet: {
                sheetName: wbBind8950,
              },
              row: wbBind12853,
              col: wbBind15132,
              absRow: false,
              absCol: false,
            });
            wbBind13365.push(
              wbBind15769
                ? wbIn378.getCellValue(wbBind15769)
                : wbHlp1035("#REF!"),
            );
          }
          wbBind8951.push(wbBind13365);
        }
        return wbBind8951;
      }
      case "WholeColumn": {
        let wbBind11560 = wbIn377.sheet?.sheetName ?? wbIn379,
          wbBind11561 = wbIn378.getColumnExtent?.(wbBind11560, wbIn377.col);
        if (!wbBind11561) return [];
        let wbBind11562 = [];
        for (
          let wbBind15031 = wbBind11561.startRow;
          wbBind15031 <= wbBind11561.endRow;
          wbBind15031 += 1
        ) {
          let wbBind16011 = wbIn378.cellAddressToKey({
            sheet: {
              sheetName: wbBind11560,
            },
            row: wbBind15031,
            col: wbIn377.col,
            absRow: false,
            absCol: false,
          });
          wbBind11562.push([
            wbBind16011
              ? wbIn378.getCellValue(wbBind16011)
              : wbHlp1035("#REF!"),
          ]);
        }
        return wbBind11562;
      }
      case "WholeRow": {
        let wbBind11604 = wbIn377.sheet?.sheetName ?? wbIn379,
          wbBind11605 = wbIn378.getRowExtent?.(wbBind11604, wbIn377.row);
        if (!wbBind11605) return [];
        let wbBind11606 = [];
        for (
          let wbBind15080 = wbBind11605.startCol;
          wbBind15080 <= wbBind11605.endCol;
          wbBind15080 += 1
        ) {
          let wbBind16057 = wbIn378.cellAddressToKey({
            sheet: {
              sheetName: wbBind11604,
            },
            row: wbIn377.row,
            col: wbBind15080,
            absRow: false,
            absCol: false,
          });
          wbBind11606.push(
            wbBind16057
              ? wbIn378.getCellValue(wbBind16057)
              : wbHlp1035("#REF!"),
          );
        }
        return [wbBind11606];
      }
      case "Spill":
        return host.m.He(wbIn377.base, wbIn378, wbIn379, wbIn380, wbIn381);
      case "Structured":
        return host.p.field_k.readValues(wbIn377.reference, wbIn378, wbIn379);
      case "Named": {
        let wbBind12535 = host.m.me(
          wbIn377.name,
          "range",
          wbIn378,
          wbIn380,
          wbIn381,
          wbIn377.sheet?.sheetName ?? wbIn379,
        );
        return wbBind12535
          ? Array.isArray(wbBind12535)
            ? wbBind12535
            : host.m.Ut(wbBind12535)
              ? [[wbBind12535]]
              : host.m.Wt(wbBind12535)
                ? [[wbHlp1035("#VALUE!")]]
                : [[wbBind12535]]
          : [[wbHlp1035("#NAME?")]];
      }
      default:
        return [[wbHlp1035("#VALUE!")]];
    }
  }
  function workbookPrivUe(host: WorkbookOpsHost) {
    host.p.field_x &&
      ((host.p.field_x.initialized = false),
      host.m.oe(host.p.field_x),
      (host.p.field_x.initialized = true));
  }
  return {
    workbookPrivYe,
    workbookPrivBe,
    workbookPrivXe,
    workbookPrivSe,
    workbookPrivCe,
    workbookPrivWe,
    workbookPrivTe,
    workbookPrivEe,
    workbookPrivOe,
    workbookPrivKe,
    workbookPrivAe,
    workbookPrivJe,
    workbookPrivMe,
    workbookPrivNe,
    workbookPrivPe,
    workbookPrivFe,
    workbookPrivIe,
    workbookPrivLe,
    workbookPrivRe,
    workbookPrivZe,
    workbookPrivBe,
    workbookPrivVe,
    workbookPrivHe,
    workbookPrivUe,
  };
}
