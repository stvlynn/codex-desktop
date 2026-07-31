// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-59: WorkbookN peeled ops group 4.

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

export function createWorkbookOpsG4(env: WorkbookCoreEnv) {
  const { Dot, eft, zt, workbookP } = env;
  const wbBind1987 = env["workbookBinding1987"];
  const wbBind1988 = env["workbookBinding1988"];
  const wbBind1989 = env["workbookBinding1989"];
  const wbBind1990 = env["workbookBinding1990"];
  const wbBind1991 = env["workbookBinding1991"];
  const wbBind1992 = env["workbookBinding1992"];
  const wbHlp1035 = env["workbookHel" + "per1035"];
  const wbHlp1036 = env["workbookHel" + "per1036"];

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
  function workbookPrivWe(
    host: WorkbookOpsHost,
    wbIn1492: unknown,
    wbIn1493: unknown,
    wbIn1494: unknown,
  ) {
    if (wbIn1494.has(wbIn1492)) return host.m.Ke(wbIn1492, CIRC_ERROR_TOKEN);
    wbIn1494.add(wbIn1492);
    let { sheetName, address } = wbBind1990(wbIn1492),
      wbBind7461 = host.m.zt(sheetName);
    if (!wbBind7461)
      return (
        wbIn1494.delete(wbIn1492),
        host.m.Ke(wbIn1492, TRACE_ERROR_TOKEN)
      );
    let wbBind7462 = wbIn1493.evaluations.get(wbIn1492),
      wbBind7463 = wbBind7462?.value ?? host.m.ct(wbIn1492),
      wbBind7464 = {
        cell: wbIn1492,
        sheetName,
        address,
        formula: wbBind7462?.formula ?? host.m.Ge(wbBind7461, address),
        value: wbBind7463,
        params: [],
      };
    host.m.Ut(wbBind7463)
      ? (wbBind7464.error = wbBind7463.code)
      : wbBind7463 instanceof Error &&
        (wbBind7464.error = wbBind7463.message ?? "#ERROR!");
    let wbBind7465 = (
      wbBind7462?.precedents ??
      Array.from(wbIn1493.graph.precedents.get(wbIn1492) ?? [])
    ).filter((item) => !wbBind1991(item));
    for (let wbBind17170 of wbBind7465) {
      if (wbBind17170 === wbIn1492) continue;
      let wbBind17611 = host.m.We(wbBind17170, wbIn1493, wbIn1494);
      wbBind7464.params.push(wbBind17611);
      wbBind17611.error === TRACE_ERROR_TOKEN &&
        wbBind7464.error !== TRACE_ERROR_TOKEN &&
        ((wbBind7464.value = wbBind17611.value),
        (wbBind7464.error = TRACE_ERROR_TOKEN));
    }
    return (wbIn1494.delete(wbIn1492), wbBind7464);
  }
  function workbookPrivGe(
    host: WorkbookOpsHost,
    wbIn8585: unknown,
    wbIn8586: unknown,
  ) {
    let wbBind19083 = host.m.Lt(wbIn8586);
    if (!wbBind19083) return null;
    let wbBind19084 = wbIn8585.__getCell(wbBind19083.row, wbBind19083.col);
    return host.m.qe(wbBind19084?.formula) ?? wbBind19084?.formula ?? null;
  }
  function workbookPrivKe(
    host: WorkbookOpsHost,
    wbIn6501: unknown,
    wbIn6502: unknown,
  ) {
    let { sheetName, address } = wbBind1990(wbIn6501);
    return {
      cell: wbIn6501,
      sheetName,
      address,
      formula: null,
      value: wbHlp1035(wbIn6502),
      params: [],
      error: wbIn6502,
    };
  }
  function workbookPrivQe(host: WorkbookOpsHost, wbIn8587: unknown) {
    if (!wbIn8587) return null;
    let wbBind19085 = wbIn8587.trim();
    if (!wbBind19085) return null;
    let wbBind19086 = wbBind19085.startsWith("=")
      ? wbBind19085
      : `=${wbBind19085}`;
    return host.m.ln(wbBind19086);
  }
  function workbookPrivJe(host: WorkbookOpsHost, wbIn5222: unknown) {
    let wbBind14774 = host.p.field_S.get(wbIn5222);
    if (wbBind14774) return wbBind14774;
    let wbBind14775 = {
      cellAddressToKey: (wbIn16328) => host.m.Ye(wbIn16328, wbIn5222),
      expandRange: (wbIn16110, wbIn16111) =>
        host.m.Xe(wbIn16110, wbIn5222, wbIn16111),
      columnDependencyKey: (wbIn16403, wbIn16404) =>
        wbBind1988(wbIn16403, wbIn16404),
      rowDependencyKey: (wbIn16405, wbIn16406) =>
        wbBind1989(wbIn16405, wbIn16406),
    };
    return (host.p.field_S.set(wbIn5222, wbBind14775), wbBind14775);
  }
  function workbookPrivYe(
    host: WorkbookOpsHost,
    wbIn11820: unknown,
    wbIn11821: unknown,
  ) {
    return wbBind1987(
      wbIn11820.sheet?.sheetName ?? wbIn11821,
      `${workbookP(wbIn11820.col)}${wbIn11820.row}`,
    );
  }
  function workbookPrivXe(
    host: WorkbookOpsHost,
    wbIn13027: unknown,
    wbIn13028: unknown,
    wbIn13029: unknown,
  ) {
    return host.m.Ze(wbIn13027, wbIn13028, new Set(), wbIn13029);
  }
  function workbookPrivZe(
    host: WorkbookOpsHost,
    wbIn496: unknown,
    wbIn497: unknown,
    wbIn498: unknown,
    wbIn499: unknown,
  ) {
    switch (wbIn496.kind) {
      case "Cell":
        return [host.m.Qe(wbIn496.addr, wbIn497)];
      case "Range": {
        let wbBind10179 = host.m.Qe(wbIn496.start, wbIn497),
          wbBind10180 = host.m.Qe(wbIn496.end, wbIn497),
          wbBind10181 =
            wbBind10179.sheet?.sheetName ??
            wbBind10180.sheet?.sheetName ??
            wbIn497,
          wbBind10182 = [],
          wbBind10183 = Math.min(wbBind10179.row, wbBind10180.row),
          wbBind10184 = Math.max(wbBind10179.row, wbBind10180.row),
          wbBind10185 = Math.min(wbBind10179.col, wbBind10180.col),
          wbBind10186 = Math.max(wbBind10179.col, wbBind10180.col);
        for (
          let wbBind16258 = wbBind10183;
          wbBind16258 <= wbBind10184;
          wbBind16258 += 1
        )
          for (
            let wbBind17469 = wbBind10185;
            wbBind17469 <= wbBind10186;
            wbBind17469 += 1
          )
            wbBind10182.push({
              sheet: {
                sheetName: wbBind10181,
              },
              row: wbBind16258,
              col: wbBind17469,
              absRow: false,
              absCol: false,
            });
        return wbBind10182;
      }
      case "WholeColumn": {
        let wbBind11481 = wbIn496.sheet?.sheetName ?? wbIn497;
        if (!wbBind11481) return [];
        let wbBind11482 = host.m.zt(wbBind11481);
        if (!wbBind11482) return [];
        let wbBind11483 = wbBind11482.__getColumnExtent(wbIn496.col - 1);
        if (!wbBind11483) return [];
        let wbBind11484 = [];
        for (
          let wbBind17281 = wbBind11483.minRow;
          wbBind17281 <= wbBind11483.maxRow;
          wbBind17281 += 1
        )
          wbBind11484.push({
            sheet: {
              sheetName: wbBind11481,
            },
            row: wbBind17281 + 1,
            col: wbIn496.col,
            absRow: false,
            absCol: false,
          });
        return wbBind11484;
      }
      case "WholeRow": {
        let wbBind11533 = wbIn496.sheet?.sheetName ?? wbIn497;
        if (!wbBind11533) return [];
        let wbBind11534 = host.m.zt(wbBind11533);
        if (!wbBind11534) return [];
        let wbBind11535 = wbBind11534.__getRowExtent(wbIn496.row - 1);
        if (!wbBind11535) return [];
        let wbBind11536 = [];
        for (
          let wbBind17282 = wbBind11535.minCol;
          wbBind17282 <= wbBind11535.maxCol;
          wbBind17282 += 1
        )
          wbBind11536.push({
            sheet: {
              sheetName: wbBind11533,
            },
            row: wbIn496.row,
            col: wbBind17282 + 1,
            absRow: false,
            absCol: false,
          });
        return wbBind11536;
      }
      case "Spill":
        return host.m.Ze(wbIn496.base, wbIn497, wbIn498, wbIn499);
      case "Structured":
        return host.p.field_k.expand(wbIn496.reference, {
          fallbackSheet: wbIn497,
          activeCellAddress: wbIn499,
        });
      case "Named":
        return host.m.Ve(
          wbIn496.name,
          wbIn496.sheet?.sheetName ?? wbIn497,
          wbIn498,
          wbIn499,
        );
      default:
        return [];
    }
  }
  function workbookPrivQe(
    host: WorkbookOpsHost,
    wbIn7690: unknown,
    wbIn7691: unknown,
  ) {
    return {
      sheet: {
        sheetName: wbIn7690.sheet?.sheetName ?? wbIn7691,
      },
      row: wbIn7690.row,
      col: wbIn7690.col,
      absRow: wbIn7690.absRow,
      absCol: wbIn7690.absCol,
    };
  }
  function workbookPrivEt(
    host: WorkbookOpsHost,
    wbIn5883: unknown,
    wbIn5884: unknown,
  ) {
    let wbBind15860 = [wbIn5883],
      wbBind15861 = new Set();
    for (; wbBind15860.length > 0; ) {
      let wbBind18589 = wbBind15860.shift(),
        wbBind18590 = wbIn5884.graph.dependents.get(wbBind18589);
      if (wbBind18590)
        for (let wbBind22371 of wbBind18590)
          wbBind15861.has(wbBind22371) ||
            (wbBind15861.add(wbBind22371),
            wbIn5884.dirty.add(wbBind22371),
            wbBind15860.push(wbBind22371));
    }
  }
  function workbookPrivTt(
    host: WorkbookOpsHost,
    wbIn10175: unknown,
    wbIn10176: unknown,
    wbIn10177: unknown,
  ) {
    let wbBind20635 = wbBind1988(wbIn10175, wbIn10176.col + 1),
      wbBind20636 = wbBind1989(wbIn10175, wbIn10176.row + 1);
    host.m.et(wbBind20635, wbIn10177);
    host.m.et(wbBind20636, wbIn10177);
  }
  function workbookPrivNt(
    host: WorkbookOpsHost,
    wbIn8708: unknown,
    wbIn8709: unknown,
  ) {
    wbIn8709.parsed.delete(wbIn8708);
    host.m.rt(wbIn8709.graph, wbIn8708);
    wbIn8709.dirty.delete(wbIn8708);
    host.m.it([wbIn8708], wbIn8709);
    wbIn8709.evaluations.delete(wbIn8708);
  }
  function workbookPrivRt(
    host: WorkbookOpsHost,
    wbIn6239: unknown,
    wbIn6240: unknown,
  ) {
    let wbBind16353 = wbIn6239.precedents.get(wbIn6240);
    if (wbBind16353) {
      for (let wbBind20330 of wbBind16353) {
        let wbBind20808 = wbIn6239.dependents.get(wbBind20330);
        wbBind20808 &&
          (wbBind20808.delete(wbIn6240),
          wbBind20808.size === 0 && wbIn6239.dependents.delete(wbBind20330));
      }
      wbIn6239.precedents.delete(wbIn6240);
    }
  }
  function workbookPrivIt(
    host: WorkbookOpsHost,
    wbIn2378: unknown,
    wbIn2379: unknown,
  ) {
    let wbBind9581 = [],
      wbBind9582 = new Set();
    for (let wbBind22982 of wbIn2378)
      wbBind22982 &&
        (wbBind9581.push(wbBind22982), wbBind9582.add(wbBind22982));
    for (; wbBind9581.length > 0; ) {
      let wbBind11048 = wbBind9581.shift();
      if ((wbBind9582.delete(wbBind11048), !wbIn2379.parsed.has(wbBind11048))) {
        if (wbIn2379.volatility.delete(wbBind11048)) {
          let wbBind20494 = wbIn2379.graph.dependents.get(wbBind11048);
          if (wbBind20494)
            for (let wbBind22896 of wbBind20494)
              wbBind9582.has(wbBind22896) ||
                (wbBind9581.push(wbBind22896), wbBind9582.add(wbBind22896));
        }
        continue;
      }
      let wbBind11049 = host.m.at(wbBind11048, wbIn2379),
        wbBind11050 = wbIn2379.volatility.get(wbBind11048);
      if (!wbBind11050 || !host.m.ot(wbBind11050, wbBind11049)) {
        wbIn2379.volatility.set(wbBind11048, wbBind11049);
        let wbBind19514 = wbIn2379.graph.dependents.get(wbBind11048);
        if (wbBind19514)
          for (let wbBind22897 of wbBind19514)
            wbBind9582.has(wbBind22897) ||
              (wbBind9581.push(wbBind22897), wbBind9582.add(wbBind22897));
      }
    }
  }
  function workbookPrivAt(
    host: WorkbookOpsHost,
    wbIn2260: unknown,
    wbIn2261: unknown,
  ) {
    let wbBind9320 = wbIn2261.parsed.get(wbIn2260),
      wbBind9321 = {
        isVolatileFormula: false,
        hasVolatileChain: false,
        chain: [],
      };
    if (!wbBind9320) return wbBind9321;
    if (wbHlp1036(wbBind9320.expr))
      return {
        isVolatileFormula: true,
        hasVolatileChain: true,
        head: wbIn2260,
        chain: [wbIn2260],
      };
    let wbBind9322 = wbIn2261.graph.precedents.get(wbIn2260);
    if (wbBind9322)
      for (let wbBind14857 of wbBind9322) {
        let wbBind15241 = wbIn2261.volatility.get(wbBind14857);
        if (
          wbBind15241 &&
          wbBind15241.hasVolatileChain &&
          !wbBind15241.chain.includes(wbIn2260)
        )
          return {
            isVolatileFormula: false,
            hasVolatileChain: true,
            head: wbBind15241.head ?? wbBind15241.chain[0] ?? wbBind14857,
            chain: [...wbBind15241.chain, wbIn2260],
          };
      }
    return wbBind9321;
  }
  function workbookPrivOt(
    host: WorkbookOpsHost,
    wbIn4592: unknown,
    wbIn4593: unknown,
  ) {
    if (
      wbIn4592.isVolatileFormula !== wbIn4593.isVolatileFormula ||
      wbIn4592.hasVolatileChain !== wbIn4593.hasVolatileChain ||
      (wbIn4592.head ?? "") !== (wbIn4593.head ?? "") ||
      wbIn4592.chain.length !== wbIn4593.chain.length
    )
      return false;
    for (
      let wbBind21949 = 0;
      wbBind21949 < wbIn4592.chain.length;
      wbBind21949 += 1
    )
      if (wbIn4592.chain[wbBind21949] !== wbIn4593.chain[wbBind21949])
        return false;
    return true;
  }
  function workbookPrivSt(
    host: WorkbookOpsHost,
    wbIn973: unknown,
    wbIn974: unknown,
    wbIn975: unknown,
    wbIn976: unknown,
  ) {
    let wbBind6050 = [],
      wbBind6051 = new Set(),
      wbBind6052 = {
        currentSheet: wbIn973,
        activeCellAddress: (wbIn976 ? host.m.le(wbIn976) : null) ?? undefined,
        cellAddressToKey: (wbIn16329) => host.m.Ye(wbIn16329, wbIn973),
        getCellValue: (wbIn9662) => {
          if (wbIn974.has(wbIn9662)) return wbIn974.get(wbIn9662);
          let wbBind20192 = host.m.ct(wbIn9662);
          return host.m.Dt(wbIn9662, wbIn973, wbBind20192, wbIn975);
        },
        callFunction: () => wbHlp1035("#NAME?"),
        resolveNamedReference: (wbIn15588, wbIn15589, wbIn15590) =>
          host.m.me(
            wbIn15588,
            wbIn15589,
            wbBind6052,
            wbBind6050,
            wbBind6051,
            wbIn15590,
          ),
        resolveStructuredReference: (wbIn13198) =>
          host.p.field_k.readValues(
            wbIn13198,
            wbBind6052,
            wbBind6052.currentSheet ?? wbIn973,
          ),
        handleFunctionCall: (wbIn16198) =>
          host.m.ye(wbIn16198, wbBind6052, wbBind6050),
        getColumnExtent: (wbIn16199, wbIn16200) =>
          host.m.lt(wbIn16199, wbIn16200),
        getRowExtent: (wbIn16201, wbIn16202) => host.m.ut(wbIn16201, wbIn16202),
        getCellFormulaType: wbIn975
          ? (wbIn16203) => host.m.ce(wbIn16203, wbIn973, wbIn975)
          : undefined,
      };
    return (
      (wbBind6052.callFunction = (wbIn4594, wbIn4595) =>
        Dot(wbBind6052, () => {
          let wbBind14434 = host.m.Oe(
            wbIn4594,
            wbIn4595,
            wbBind6052,
            wbBind6050,
          );
          if (wbBind14434 !== undefined) return wbBind14434;
          let wbBind14435 = wbIn4594?.toUpperCase();
          return wbBind14435 === "SHEET" || wbBind14435 === "_XLFN.SHEET"
            ? host.m.be(wbIn4595, wbBind6052)
            : wbBind14435 === "SHEETS" || wbBind14435 === "_XLFN.SHEETS"
              ? host.m.xe(wbIn4595, wbBind6052)
              : eft(wbIn4594, wbIn4595);
        })),
      wbBind6052
    );
  }
  function workbookPrivCt(host: WorkbookOpsHost, wbIn2730: unknown) {
    let { sheetName, address } = wbBind1990(wbIn2730),
      wbBind10333 = host.m.zt(sheetName);
    if (!wbBind10333) return wbHlp1035("#REF!");
    let wbBind10334 = host.m.Lt(address);
    if (!wbBind10334) return wbHlp1035("#REF!");
    let wbBind10335 = wbBind10333.__getRawValue(
      wbBind10334.row,
      wbBind10334.col,
    );
    if (wbBind10335 !== undefined) return host.m.Xt(wbBind10335, false);
    let wbBind10336 = host.m.Bt(wbBind10333, wbBind10334.row, wbBind10334.col);
    if (!wbBind10336) return null;
    let wbBind10337 = host.m.Zt(wbBind10336);
    wbBind10333.__setRawValue(wbBind10334.row, wbBind10334.col, wbBind10337);
    wbBind10333.__setExcelRawValue(
      wbBind10334.row,
      wbBind10334.col,
      wbBind10336.value ?? null,
    );
    let wbBind10338 = host.m.Xt(wbBind10337, false);
    if (wbBind10338 !== null) return wbBind10338;
    let wbBind10339 = host.m.ae();
    return wbBind10339.parsed.has(wbIn2730)
      ? host.m.wt(wbIn2730, wbBind10339)
      : wbBind10338;
  }
  function workbookPrivLt(
    host: WorkbookOpsHost,
    wbIn8049: unknown,
    wbIn8050: unknown,
  ) {
    let wbBind18554 = host.m.zt(wbIn8049);
    if (!wbBind18554) return null;
    let wbBind18555 = wbBind18554.__getColumnExtent(wbIn8050 - 1);
    return wbBind18555
      ? {
          startRow: wbBind18555.minRow + 1,
          endRow: wbBind18555.maxRow + 1,
        }
      : null;
  }
  function workbookPrivUt(
    host: WorkbookOpsHost,
    wbIn8130: unknown,
    wbIn8131: unknown,
  ) {
    let wbBind18632 = host.m.zt(wbIn8130);
    if (!wbBind18632) return null;
    let wbBind18633 = wbBind18632.__getRowExtent(wbIn8131 - 1);
    return wbBind18633
      ? {
          startCol: wbBind18633.minCol + 1,
          endCol: wbBind18633.maxCol + 1,
        }
      : null;
  }
  function workbookPrivDt(
    host: WorkbookOpsHost,
    wbIn4379: unknown,
    wbIn4380: unknown,
  ) {
    let { sheetName, address } = wbBind1990(wbIn4379),
      wbBind13539 = host.m.zt(sheetName);
    if (!wbBind13539) return;
    let wbBind13540 = host.m.Lt(address);
    if (!wbBind13540) return;
    let wbBind13541 = host.m.Vt(wbBind13539, wbBind13540.row, wbBind13540.col),
      wbBind13542 = wbBind13539.__getRawValue(wbBind13540.row, wbBind13540.col),
      wbBind13543 =
        (host.m.Wt(wbIn4380) ? wbHlp1035("#VALUE!") : wbIn4380) ?? 0,
      wbBind13544 = host.m.Yt(wbBind13543, wbBind13542);
    wbBind13539.__setRawValue(wbBind13540.row, wbBind13540.col, wbBind13544);
    host.m.an(wbBind13541, wbBind13544);
  }
  function workbookPrivFt(
    host: WorkbookOpsHost,
    wbIn3179: unknown,
    wbIn3180: unknown,
    wbIn3181: unknown,
    wbIn3182: unknown,
  ) {
    let wbBind11344 = null;
    if (wbIn3182?.formulaText !== undefined)
      wbBind11344 = wbIn3182.formulaText ?? null;
    else if (wbIn3182?.worksheet && wbIn3182.coord) {
      let wbBind20525 = wbIn3182.worksheet.__getCell(
        wbIn3182.coord.row,
        wbIn3182.coord.col,
      );
      wbBind11344 =
        host.m.qe(wbBind20525?.formula) ?? wbBind20525?.formula ?? null;
    }
    let wbBind11345;
    if (wbIn3182?.precedents) wbBind11345 = wbBind1992(wbIn3182.precedents);
    else {
      let wbBind22101 = wbIn3181.graph.precedents.get(wbIn3179);
      wbBind11345 = wbBind22101 ? wbBind1992(wbBind22101) : [];
    }
    let wbBind11346 = wbIn3180 ?? 0;
    wbIn3181.evaluations.set(wbIn3179, {
      value: wbBind11346,
      formula: wbBind11344,
      precedents: wbBind11345,
    });
  }
  return {
    workbookPrivWe,
    workbookPrivGe,
    workbookPrivKe,
    workbookPrivQe,
    workbookPrivJe,
    workbookPrivYe,
    workbookPrivXe,
    workbookPrivZe,
    workbookPrivQe,
    workbookPrivEt,
    workbookPrivTt,
    workbookPrivNt,
    workbookPrivRt,
    workbookPrivIt,
    workbookPrivAt,
    workbookPrivOt,
    workbookPrivSt,
    workbookPrivCt,
    workbookPrivLt,
    workbookPrivUt,
    workbookPrivDt,
    workbookPrivFt,
  };
}
