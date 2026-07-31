// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 5.

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

export function createWorkbookOpsG5(env: WorkbookCoreEnv) {
  const { Jve, Z, formatA1, formatA1Range, sn, yt, zt, workbookP } = env;
  const wbBind1987 = env["workbookBinding1987"];
  const wbBind1990 = env["workbookBinding1990"];
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp1037 = env["workbookHel" + "per1037"];
  const wbHlp377 = env["workbookHel" + "per377"];
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
  function workbookPrivPt(host: WorkbookOpsHost, wbIn7271: unknown) {
    host.p.field_M.clear();
    for (let wbBind19277 of host.p.field_g) {
      let wbBind19967 = wbBind19277.name;
      if (!wbBind19967) continue;
      let wbBind19968 = wbBind19277.__getDataTables();
      for (let wbBind23064 of wbBind19968)
        host.m.mt(wbBind19967, wbBind23064, wbIn7271);
    }
  }
  function workbookPrivMt(
    host: WorkbookOpsHost,
    wbIn1164: unknown,
    wbIn1165: unknown,
    wbIn1166: unknown,
  ) {
    let wbBind6647 = wbIn1165.range,
      wbBind6648 = wbBind6647.endRow - wbBind6647.startRow + 1,
      wbBind6649 = wbBind6647.endCol - wbBind6647.startCol + 1,
      wbBind6650 = wbBind6647.startRow - 1,
      wbBind6651 = wbBind6647.startCol - 1;
    if (wbBind6650 < 0 || wbBind6651 < 0) return;
    let wbBind6652 = wbBind1987(wbIn1164, formatA1(wbBind6650, wbBind6651)),
      wbBind6653 = wbIn1165.rowInput
        ? host.m.gt(wbIn1164, wbIn1165)
        : undefined,
      wbBind6654 = wbIn1165.columnInput
        ? host.m._t(wbIn1164, wbIn1165)
        : undefined,
      wbBind6655 = wbIn1165.rowInput
        ? wbBind1987(wbIn1164, wbIn1165.rowInput)
        : null,
      wbBind6656 = wbIn1165.columnInput
        ? wbBind1987(wbIn1164, wbIn1165.columnInput)
        : null,
      wbBind6657 = `${wbIn1164}!${formatA1(wbIn1165.anchor.row, wbIn1165.anchor.col)}`;
    for (let wbBind10345 = 0; wbBind10345 < wbBind6648; wbBind10345 += 1)
      for (let wbBind10801 = 0; wbBind10801 < wbBind6649; wbBind10801 += 1) {
        let wbBind11105 = new Map();
        wbBind6655 &&
          wbBind6653 &&
          wbBind11105.set(wbBind6655, wbBind6653[wbBind10801] ?? null);
        wbBind6656 &&
          wbBind6654 &&
          wbBind11105.set(wbBind6656, wbBind6654[wbBind10345] ?? null);
        let wbBind11106 = host.m.ht(
          wbBind6652,
          wbBind11105,
          wbIn1166,
          wbIn1164,
        );
        typeof wbBind11106 == "number" &&
          (wbBind11106 = host.m.yt(wbBind11106));
        let wbBind11107 = wbBind1987(
          wbIn1164,
          formatA1(
            wbBind6647.startRow + wbBind10345,
            wbBind6647.startCol + wbBind10801,
          ),
        );
        host.m.dt(wbBind11107, wbBind11106);
        host.p.field_M.set(wbBind11107, {
          display: wbIn1165.displayFormula,
          master: wbBind6657,
          ref: `${wbIn1164}!${wbIn1165.formulaRef}`,
          rowInput: wbIn1165.rowInput,
          columnInput: wbIn1165.columnInput,
        });
      }
  }
  function workbookPrivHt(
    host: WorkbookOpsHost,
    wbIn2488: unknown,
    wbIn2489: unknown,
    wbIn2490: unknown,
    wbIn2491: unknown,
  ) {
    let wbBind9810 = wbIn2490.parsed.get(wbIn2488);
    if (!wbBind9810) return host.m.ct(wbIn2488);
    let wbBind9811 = new Map(wbIn2489),
      wbBind9812 = new Set(),
      wbBind9813 = host.m.st(wbIn2491, wbBind9811, wbIn2490, wbIn2488),
      wbBind9814 = (wbIn8051, wbIn8052) => {
        if (wbBind9812.has(wbIn8051)) return wbHlp1035("#CIRC!");
        wbBind9812.add(wbIn8051);
        let wbBind18556 = wbHlp38(wbIn8052, wbBind9813);
        return (
          (wbBind18556 = host.m.Tt(wbIn8052, wbBind18556, wbIn2491)),
          wbBind9812.delete(wbIn8051),
          wbBind9811.set(wbIn8051, wbBind18556),
          wbBind18556
        );
      };
    return (
      (wbBind9813.getCellValue = (wbIn7528) => {
        if (wbBind9811.has(wbIn7528)) return wbBind9811.get(wbIn7528);
        let wbBind18009 = wbIn2490.parsed.get(wbIn7528);
        if (wbBind18009) return wbBind9814(wbIn7528, wbBind18009.expr);
        let wbBind18010 = host.m.ct(wbIn7528);
        return host.m.Dt(wbIn7528, wbIn2491, wbBind18010, wbIn2490);
      }),
      wbBind9814(wbIn2488, wbBind9810.expr)
    );
  }
  function workbookPrivGt(
    host: WorkbookOpsHost,
    wbIn6315: unknown,
    wbIn6316: unknown,
  ) {
    let wbBind16435 = wbIn6316.range.startRow - 1,
      wbBind16436 = wbIn6316.range.endCol - wbIn6316.range.startCol + 1,
      wbBind16437 = [];
    if (wbBind16435 < 0) return wbBind16437;
    for (let wbBind22220 = 0; wbBind22220 < wbBind16436; wbBind22220 += 1)
      wbBind16437.push(
        host.m.vt(wbIn6315, wbBind16435, wbIn6316.range.startCol + wbBind22220),
      );
    return wbBind16437;
  }
  function workbookPriv_t(
    host: WorkbookOpsHost,
    wbIn6317: unknown,
    wbIn6318: unknown,
  ) {
    let wbBind16438 = wbIn6318.range.startCol - 1,
      wbBind16439 = wbIn6318.range.endRow - wbIn6318.range.startRow + 1,
      wbBind16440 = [];
    if (wbBind16438 < 0) return wbBind16440;
    for (let wbBind22221 = 0; wbBind22221 < wbBind16439; wbBind22221 += 1)
      wbBind16440.push(
        host.m.vt(wbIn6317, wbIn6318.range.startRow + wbBind22221, wbBind16438),
      );
    return wbBind16440;
  }
  function workbookPrivVt(
    host: WorkbookOpsHost,
    wbIn11943: unknown,
    wbIn11944: unknown,
    wbIn11945: unknown,
  ) {
    let wbBind22202 = wbBind1987(wbIn11943, formatA1(wbIn11944, wbIn11945));
    return host.m.ct(wbBind22202);
  }
  function workbookPrivBt(host: WorkbookOpsHost, event: unknown) {
    if (!event.coord) return;
    let wbBind6764 = host.p.field_j.clear(event.key);
    wbBind6764 && host.m.St(wbBind6764);
    let { row, col } = event.coord,
      wbBind6765 = event.arrayValue.rows || event.arrayValue.values.length,
      wbBind6766 =
        event.arrayValue.cols || event.arrayValue.values[0]?.length || 0,
      wbBind6767 = [];
    for (let wbBind14527 = 0; wbBind14527 < wbBind6765; wbBind14527 += 1) {
      let wbBind15225 = [];
      for (let wbBind16817 = 0; wbBind16817 < wbBind6766; wbBind16817 += 1) {
        let wbBind17612 = formatA1(row + wbBind14527, col + wbBind16817),
          wbBind17613 = wbBind1987(event.sheetName, wbBind17612),
          wbBind17614 = event.arrayValue.values[wbBind14527]?.[wbBind16817],
          wbBind17615 = wbBind17614 === undefined ? null : wbBind17614;
        host.m.dt(wbBind17613, wbBind17615 ?? null);
        wbBind15225.push(wbBind17613);
      }
      wbBind6767.push(wbBind15225);
    }
    let wbBind6768 = formatA1Range({
      startRow: row,
      startCol: col,
      endRow: row + wbBind6765 - 1,
      endCol: col + wbBind6766 - 1,
    });
    host.p.field_j.setRecord(
      {
        anchorKey: event.key,
        sheetName: event.sheetName,
        startRow: row,
        startCol: col,
        rows: wbBind6765,
        cols: wbBind6766,
        ref: `${event.sheetName}!${wbBind6768}`,
        displayFormula: host.m.Ct(event.worksheet, row, col),
      },
      wbBind6767,
    );
  }
  function workbookPrivSt(host: WorkbookOpsHost, wbIn4132: unknown) {
    for (let wbBind13678 of wbIn4132)
      for (let wbBind14238 of wbBind13678) {
        if (!wbBind14238) continue;
        let { sheetName, address } = wbBind1990(wbBind14238);
        if (!sheetName || !address) continue;
        let wbBind14528 = host.m.zt(sheetName);
        if (!wbBind14528) continue;
        let wbBind14529 = host.m.Lt(address);
        wbBind14529 &&
          (wbBind14528.__setRawValue(wbBind14529.row, wbBind14529.col, null),
          wbBind14528.__setExcelRawValue(
            wbBind14529.row,
            wbBind14529.col,
            null,
          ));
      }
  }
  function workbookPrivCt(
    host: WorkbookOpsHost,
    wbIn8320: unknown,
    wbIn8321: unknown,
    wbIn8322: unknown,
  ) {
    let wbBind18825 = wbIn8320.__getCell(wbIn8321, wbIn8322);
    if (!wbBind18825?.formula) return "";
    let wbBind18826 = wbBind18825.formula.trim();
    return wbBind18826
      ? wbHlp1037(wbBind18826.startsWith("=") ? wbBind18826 : `=${wbBind18826}`)
      : "";
  }
  function workbookPrivWt(
    host: WorkbookOpsHost,
    wbIn2929: unknown,
    wbIn2930: unknown,
  ) {
    if (host.p.field_C.has(wbIn2929)) return wbHlp1035("#CIRC!");
    let wbBind10840 = wbIn2930.parsed.get(wbIn2929);
    if (!wbBind10840) return null;
    let { sheetName } = wbBind1990(wbIn2929);
    if (!sheetName) return wbHlp1035("#REF!");
    host.p.field_C.add(wbIn2929);
    try {
      let wbBind15594 = new Map(),
        wbBind15595 = host.m.st(sheetName, wbBind15594, wbIn2930, wbIn2929),
        wbBind15596 = wbHlp38(wbBind10840.expr, wbBind15595);
      return (
        (wbBind15596 = host.m.Tt(
          wbBind10840.expr,
          wbBind15596,
          sheetName,
          wbBind15595.activeCellAddress,
        )),
        wbBind15594.set(wbIn2929, wbBind15596),
        host.m.dt(wbIn2929, wbBind15596),
        host.m.ft(wbIn2929, wbBind15596, wbIn2930),
        wbBind15596
      );
    } finally {
      host.p.field_C.delete(wbIn2929);
    }
  }
  function workbookPrivTt(
    host: WorkbookOpsHost,
    wbIn4698: unknown,
    wbIn4699: unknown,
    wbIn4700: unknown,
    wbIn4701: unknown,
  ) {
    return (wbIn4699 != null && wbIn4699 !== "") ||
      wbIn4698.kind !== "RangeRef" ||
      !host.p.field_O.isSingleCell(wbIn4698.ref, {
        fallbackSheet: wbIn4700,
        activeCellAddress: wbIn4701,
      }) ||
      !host.p.field_O.referencesBlankCell(wbIn4698.ref, {
        fallbackSheet: wbIn4700,
        activeCellAddress: wbIn4701,
      })
      ? wbIn4699
      : 0;
  }
  function workbookPrivEt(
    host: WorkbookOpsHost,
    wbIn2291: unknown,
    wbIn2292: unknown,
  ) {
    let wbBind9386 = host.m.Qe(wbIn2291, wbIn2292),
      wbBind9387 = wbBind9386.sheet?.sheetName;
    if (!wbBind9387) return false;
    let wbBind9388 = host.m.zt(wbBind9387);
    if (!wbBind9388) return false;
    let wbBind9389 = wbBind9388.__getRawValue(wbBind9386.row, wbBind9386.col);
    if (wbBind9389 !== undefined) {
      if (wbBind9389 === null) return true;
      if (wbBind9389 === "") {
        let wbBind18235 = wbBind9388.__getCell(wbBind9386.row, wbBind9386.col),
          wbBind18236 = !!wbBind18235?.formula?.trim(),
          wbBind18237 =
            wbBind18235?.value !== undefined &&
            wbBind18235?.value !== null &&
            wbBind18235?.value !== "";
        return !wbBind18236 && !wbBind18237;
      }
      return false;
    }
    let wbBind9390 = wbBind9388.__getCell(wbBind9386.row, wbBind9386.col);
    if (!wbBind9390) return true;
    let wbBind9391 = !!wbBind9390.formula?.trim(),
      wbBind9392 =
        wbBind9390.value !== undefined &&
        wbBind9390.value !== null &&
        wbBind9390.value !== "";
    return !wbBind9391 && !wbBind9392;
  }
  function workbookPrivDt(
    host: WorkbookOpsHost,
    wbIn3592: unknown,
    wbIn3593: unknown,
    wbIn3594: unknown,
    wbIn3595: unknown,
  ) {
    if ((wbIn3594 != null && wbIn3594 !== "") || !wbIn3595) return wbIn3594;
    let wbBind12119 = wbIn3595.parsed.get(wbIn3592);
    if (!wbBind12119 || wbBind12119.expr.kind !== "RangeRef") return wbIn3594;
    let wbBind12120 = host.m.le(wbIn3592) ?? undefined;
    return !host.p.field_O.isSingleCell(wbBind12119.expr.ref, {
      fallbackSheet: wbIn3593,
      activeCellAddress: wbBind12120,
    }) ||
      !host.p.field_O.referencesBlankCell(wbBind12119.expr.ref, {
        fallbackSheet: wbIn3593,
        activeCellAddress: wbBind12120,
      })
      ? wbIn3594
      : 0;
  }
  function workbookPrivOt(host: WorkbookOpsHost) {
    if (host.p.field_I) return;
    let wbBind12536 = host.p.field_g.getTopologyEntries();
    if (wbBind12536.length === 0) {
      host.m.pe();
      return;
    }
    let wbBind12537 = host.p.field_F.readEntries();
    if (host.m.At(wbBind12536) && wbBind12537.length === 0) {
      host.m.pe();
      return;
    }
    host.p.field_L = true;
    try {
      host.m.Pt();
      host.p.field_F.replaceEntries(wbBind12536);
      host.m.pe();
    } finally {
      host.p.field_L = false;
    }
  }
  function workbookPrivKt(host: WorkbookOpsHost) {
    if (host.p.field_L) return;
    let wbBind16206 = host.p.field_F.readEntries();
    if (wbBind16206.length !== 0) {
      host.p.field_I = true;
      try {
        host.p.field_g.syncTopology(wbBind16206);
        host.m.pe();
      } finally {
        host.p.field_I = false;
      }
    }
  }
  function workbookPrivAt(host: WorkbookOpsHost, wbIn12040: unknown) {
    return wbIn12040.length === 1 && wbIn12040[0]?.name === "New spreadsheet";
  }
  function workbookPrivMt(host: WorkbookOpsHost) {
    host.p.field_X ||
      ((host.p.field_X = true),
      queueMicrotask(() => {
        host.m.Nt();
      }));
  }
  function workbookPrivNt(host: WorkbookOpsHost) {
    if (
      ((host.p.field_X = false),
      host.p.field_Z ||
        (!host.p.field_q && !host.p.field_J && host.p.field_Y.size === 0))
    )
      return;
    let wbBind10264 = host.p.field_q,
      wbBind10265 = host.p.field_J,
      wbBind10266 = new Set(host.p.field_Y);
    host.p.field_q = false;
    host.p.field_J = false;
    host.p.field_Y.clear();
    host.wb.runLocalCollabTransaction(() => {
      wbBind10265 && host.m.Ot();
      wbBind10264 &&
        (host.m.Pt(),
        host.p.field_P.activate(),
        host.p.field_P.flushFromOwner());
      for (let wbBind20557 of wbBind10266) {
        let wbBind21089 = host.wb.__getWorksheetBySheetId(wbBind20557);
        wbBind21089 && wbBind21089.flushCollaborativeState();
      }
    });
  }
  function workbookPrivPt(host: WorkbookOpsHost) {
    Jve({
      root: wbHlp377(host.p.field_N),
      runLocalTransaction: (wbIn15562) =>
        host.wb.runLocalCollabTransaction(wbIn15562),
    });
  }
  function workbookPrivFt(host: WorkbookOpsHost, wbIn10737: unknown) {
    if (host.m.It())
      throw Error(`${wbIn10737} requires an empty collaborative document.`);
  }
  function workbookPrivRt(
    host: WorkbookOpsHost,
    wbIn4993: unknown,
    wbIn4994: unknown,
  ) {
    if (host.p.field_U > 0) return wbIn4994();
    host.p.field_U += 1;
    let wbBind14412 = host.p.field_H;
    host.p.field_H = wbIn4993;
    try {
      let wbBind19727;
      return (
        host.p.field_N.transact(() => {
          wbBind19727 = wbIn4994();
        }, wbIn4993),
        wbBind19727
      );
    } finally {
      host.p.field_H = wbBind14412;
      --host.p.field_U;
    }
  }
  function workbookPrivZt(host: WorkbookOpsHost, wbIn10887: unknown) {
    let wbBind21394 = host.p.field_g.getItemOrNullObject(wbIn10887);
    return wbBind21394.isNullObject ? undefined : wbBind21394;
  }
  function workbookPrivBt(
    host: WorkbookOpsHost,
    wbIn13905: unknown,
    wbIn13906: unknown,
    wbIn13907: unknown,
  ) {
    return wbIn13905.__getCell(wbIn13906, wbIn13907);
  }
  function workbookPrivVt(
    host: WorkbookOpsHost,
    wbIn13199: unknown,
    wbIn13200: unknown,
    wbIn13201: unknown,
  ) {
    return wbIn13199.__getOrCreateCell(wbIn13200, wbIn13201);
  }
  function workbookPrivUt(host: WorkbookOpsHost, wbIn10504: unknown) {
    return (
      typeof wbIn10504 == "object" &&
      !!wbIn10504 &&
      "kind" in wbIn10504 &&
      wbIn10504.kind === "Error"
    );
  }
  function workbookPrivWt(host: WorkbookOpsHost, wbIn10475: unknown) {
    return (
      typeof wbIn10475 == "object" &&
      !!wbIn10475 &&
      "kind" in wbIn10475 &&
      wbIn10475.kind === "Lambda"
    );
  }
  function workbookPrivGt(host: WorkbookOpsHost) {
    for (let wbBind12295 of host.p.field_g)
      for (let wbBind12818 of wbBind12295.cells) {
        let wbBind13162 = wbBind12818.address?.trim();
        if (!wbBind13162) continue;
        let wbBind13163 = host.m.Lt(wbBind13162);
        if (!wbBind13163) continue;
        let wbBind13164 = wbBind12295.__getCell(
          wbBind13163.row,
          wbBind13163.col,
        );
        if (
          !wbBind13164 ||
          wbBind12295.__getRawValue(wbBind13163.row, wbBind13163.col) !==
            undefined
        )
          continue;
        let wbBind13165 = wbBind13164.value,
          wbBind13166 = host.m.Zt(wbBind13164);
        wbBind12295.__setExcelRawValue(
          wbBind13163.row,
          wbBind13163.col,
          wbBind13165,
        );
        wbBind12295.__setRawValue(
          wbBind13163.row,
          wbBind13163.col,
          wbBind13166,
        );
      }
  }
  function workbookPrivKt(host: WorkbookOpsHost) {
    host.m.Rt(host.p.field_B, () => {
      for (let wbBind20691 of host.p.field_g)
        for (let wbBind21886 of wbBind20691.__getRows())
          for (let wbBind22851 of wbBind21886.cells ?? [])
            wbBind20691.writeCellInputToYjs(wbBind22851);
    });
  }
  function workbookPrivYt(
    host: WorkbookOpsHost,
    wbIn4985: unknown,
    wbIn4986: unknown,
  ) {
    if (wbIn4985 == null) return null;
    if (host.m.Ut(wbIn4985)) return wbIn4985;
    if (wbIn4985 instanceof Date) return host.m.nn(wbIn4985);
    if (typeof wbIn4985 == "string") {
      let wbBind22281 = host.m.sn(wbIn4985);
      return wbBind22281 ? host.m.nn(wbBind22281) : wbIn4985;
    }
    return typeof wbIn4985 == "number" && wbIn4986 instanceof Date
      ? (host.m.tn(wbIn4985) ?? wbIn4985)
      : wbIn4985;
  }
  return {
    workbookPrivPt,
    workbookPrivMt,
    workbookPrivHt,
    workbookPrivGt,
    workbookPriv_t,
    workbookPrivVt,
    workbookPrivBt,
    workbookPrivSt,
    workbookPrivCt,
    workbookPrivWt,
    workbookPrivTt,
    workbookPrivEt,
    workbookPrivDt,
    workbookPrivOt,
    workbookPrivKt,
    workbookPrivAt,
    workbookPrivMt,
    workbookPrivNt,
    workbookPrivPt,
    workbookPrivFt,
    workbookPrivRt,
    workbookPrivZt,
    workbookPrivBt,
    workbookPrivVt,
    workbookPrivUt,
    workbookPrivWt,
    workbookPrivGt,
    workbookPrivKt,
    workbookPrivYt,
  };
}
